import { FakturaType } from "@devorgpl/ksef-model-lib/xmlns/crd.gov.pl/wzor/2021/11/29/11089";
import { XMLParser } from "fast-xml-parser";
import { ParserInterface } from "./ParserInterface";

export class ComarchXmlParser implements ParserInterface {
    parser = new XMLParser();

    test(data: string): boolean {
        let jObj = this.parser.parse(data);
        return !!jObj['Document-Invoice'];
    }

    private extractShortName(name: string): string {
        var firstWordReg = /^([^\ ]+)+/;
        let shortName = name.trim();
        const shortNameMatch = firstWordReg.exec(shortName);
        if (shortNameMatch && shortNameMatch[1]) {
            shortName = shortNameMatch[1];
        }
        return shortName;
    }

    parse(data: string): FakturaType {
        let jObj = this.parser.parse(data);
        const header = jObj['Document-Invoice']['Invoice-Header'];
        const summary = jObj['Document-Invoice']['Invoice-Summary'];
        const buyer = jObj['Document-Invoice']['Invoice-Parties']['Buyer'];
        const seller = jObj['Document-Invoice']['Invoice-Parties']['Seller'];
        const buyerShortName = this.extractShortName(buyer['Name']);
        const sellerShortName = this.extractShortName(seller['Name']);
        const entries = jObj['Document-Invoice']['Invoice-Lines']['Line'];
        let result: FakturaType = {
            Fa: {
                FaWiersze: {
                    FaWiersz: [],
                    LiczbaWierszyFaktury: summary['TotalLines'],
                    WartoscWierszyFaktury1: summary['TotalNetAmount'],
                    WartoscWierszyFaktury2: summary['TotalGrossAmount']
                },
                Adnotacje: {
                    P_16: 2,
                    P_17: 2,
                    P_18: 2,
                    P_18A: 2,
                    P_19: 2,
                    P_22: 2,
                    P_23: 2,
                    P_PMarzy: 2
                },
                KodWaluty: header['InvoiceCurrency'],
                P_1: new Date(header['InvoiceDate']),
                P_15: 0,
                P_2: header['InvoiceNumber'],
                RodzajFaktury: "VAT"
            },
            Naglowek: {
                DataWytworzeniaFa: new Date(header['InvoiceDate']),
                KodFormularza: {
                    content: 'FA',
                    kodSystemowy: '',
                    wersjaSchemy: ''
                },
                WariantFormularza: 1
            },
            Podmiot1: {
                Adres: {
                    AdresPol: {
                        KodKraju: seller['Country'],
                        KodPocztowy: seller['PostalCode'],
                        Miejscowosc: seller['CityName'],
                        Ulica: seller['StreetAndNumber'],
                        NrDomu: '',
                    },
                    AdresZagr: {
                        KodKraju: "PL",
                        Miejscowosc: ''
                    },
                },
                DaneIdentyfikacyjne: {
                    ImiePierwsze: '',
                    NazwaHandlowa: sellerShortName,
                    NIP: seller['TaxID'],
                    Nazwisko: '',
                    PelnaNazwa: seller['Name'].trim()
                }
            },
            Podmiot2: {
                Adres: {
                    AdresPol: {
                        KodKraju: buyer['Country'],
                        KodPocztowy: buyer['PostalCode'],
                        Miejscowosc: buyer['CityName'],
                        Ulica: buyer['StreetAndNumber'],
                        NrDomu: '',
                    },
                    AdresZagr: {
                        KodKraju: "PL",
                        Miejscowosc: ''
                    },
                },
                DaneIdentyfikacyjne: {
                    ImiePierwsze: '',
                    NIP: buyer['TaxID'],
                    NazwaHandlowa: buyerShortName,
                    Nazwisko: '',
                    PelnaNazwa: buyer['Name'].trim(),
                    BrakID: 1,
                    NrID: ''
                }
            },
        };
        entries.forEach((element: any) => {
            const item = element['Line-Item'];
            result.Fa.FaWiersze?.FaWiersz.push({
                NrWierszaFa: item['LineNumber'],
                CN: item['ItemDescription'],
                GTIN: String(item['EAN']),
                DodatkoweInfo: String(item['EAN']),
                P_11: item['NetAmount'],
                P_11A: item['NetAmount'] + item['TaxAmount'],
                P_12: item['TaxRate'],
                P_7: item['ItemDescription'],
                P_8A: item['UnitOfMeasure'],
                P_8B: item['InvoiceQuantity'],
                P_9A: item['InvoiceUnitNetPrice'],
                P_9B: item['InvoiceUnitNetPrice'] + Math.round(item['InvoiceUnitNetPrice'] * item['TaxRate'])/100,
            });
        });
        return result;
    };
}
