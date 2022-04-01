import { FakturaType, FakturaTypeFaTypeFaWierszeTypeFaWierszType } from "@devorgpl/ksef-model-lib/xmlns/crd.gov.pl/wzor/2021/11/29/11089";
import { GeneratorInterface } from "./GeneratorInterface";

export class EppGenerator implements GeneratorInterface {
    generate(invoice: FakturaType): string {
        let outputTxt = "";
        outputTxt += this.generateInfo(invoice)
        outputTxt += this.generateInvoice(invoice)
        outputTxt += this.generateItemDictionary(invoice)
        return outputTxt
    }

    private generateInfo(invoice: FakturaType): string {
        let result = ""
        let invoiceDate = invoice.Naglowek.DataWytworzeniaFa
        const invoiceDateFormatted = this.formatDate(invoiceDate);
        const seller = invoice.Podmiot1;
        result += "[INFO]\n"
        result += '"1.05",3,1250,"Subiekt GT",'
        result += this.quote(seller.DaneIdentyfikacyjne.NazwaHandlowa) + ","
        result += this.quote(seller.DaneIdentyfikacyjne.NazwaHandlowa) + ","
        result += this.quote(seller.DaneIdentyfikacyjne.PelnaNazwa) + ","
        result += this.quote(seller.Adres.AdresPol.Miejscowosc) + ","
        result += this.quote(seller.Adres.AdresPol.KodPocztowy) + ","
        result += this.quote(seller.Adres.AdresPol.Ulica) + ","
        result += this.quote(seller.DaneIdentyfikacyjne.NIP) + ","
        result += this.quote("MAG") + ","
        result += this.quote("Magazyn") + ","
        result += ","
        result += ","
        result += "1" + ","
        result += invoiceDateFormatted + ","
        result += invoiceDateFormatted + ","
        result += "Automat" + ","
        result += invoiceDateFormatted + ","
        result += "Polska" + ","
        result += "PL" + ","
        result += ","
        result += "0"
        result += "\n"
        result += "\n"
        return result
    } 


    formatDate(date: Date): string {
        if (!(date instanceof Date)) {
            date = new Date(date);
        }
        const month = date.getMonth() + 1;
        return '' 
            + String(date.getFullYear()) + ''
            + (month >= 10? String(month): '0'+String(month)) + ''
            + (date.getDate()>=10? String(date.getDate()): '0'+String(date.getDate())) + ''
            + '00' + ''
            + '00' + ''
            + '00';
    }

    private quote(str: string | undefined): string {
        return '"'+str+'"';
    }
    private generateInvoice(invoice: FakturaType): string {
        let invoiceDate = invoice.Naglowek.DataWytworzeniaFa
        const invoiceDateFormatted = this.formatDate(invoiceDate);
        const buyer = invoice.Podmiot2;
        const netTotal = Number(invoice.Fa.FaWiersze?.WartoscWierszyFaktury1);
        const grossTotal = Number(invoice.Fa.FaWiersze?.WartoscWierszyFaktury2);

        let result = "[NAGLOWEK]\n"
        result += '"FS",1,0,2004,,,'
        result += this.quote(invoice.Fa.P_2) + ","
        result += ","
        result += ","
        result += ","
        result += ","
        result += this.quote(buyer.DaneIdentyfikacyjne.NazwaHandlowa) + ","
        result += this.quote(buyer.DaneIdentyfikacyjne.PelnaNazwa) + ","
        result += this.quote(buyer.DaneIdentyfikacyjne.PelnaNazwa) + ","
        result += this.quote(buyer.Adres?.AdresPol.Miejscowosc) + ","
        result += this.quote(buyer.Adres?.AdresPol.KodPocztowy) + ","
        result += this.quote(buyer.Adres?.AdresPol.Ulica) + ","
        result += this.quote(buyer.DaneIdentyfikacyjne.NIP) + ","

        result += this.quote('Sprzedaż') + ","
        result += this.quote('Sprzedaż dla klienta') + ","
        result += this.quote(buyer.Adres?.AdresPol.Miejscowosc) + ","
        result += invoiceDateFormatted + ","
        result += invoiceDateFormatted + ","
        result += ","
        result += String(invoice.Fa.FaWiersze?.LiczbaWierszyFaktury) + ","
        result += "1,"
        result += this.quote('detaliczna') + ","
        result += netTotal + ","
        result += String((Math.round((grossTotal - netTotal) * 100) / 100).toFixed(2)) + ","
        result += grossTotal + ","
        result += ","
        result += ","

        result += "0.0000,"
        result += invoiceDateFormatted + ","
        result += "0.0000,"
        result += "0.000,"
        result += "0,"
        result += "0,"
        result += "1,"
        result += "0,"
        result += "0,"
        result += 'Wystawca,'
        result += ","
        result += ","
        result += "0.0000,"
        result += "0.0000,"
        result += "PLN,"
        result += "1.0000,"
        result += ","
        result += ","
        result += ","
        result += ","
        result += "0,"
        result += "0,"
        result += "0,"
        result += ","
        result += ","
        result += ","
        result += ","
        result += ","
        result += ","
        result += ","
        result += "\n"
        result += "\n"

        result += "[ZAWARTOSC]"
        result += "\n"

        const items = invoice.Fa.FaWiersze?.FaWiersz;
        items?.forEach(element=> {
            result += this.generateInvoiceLine(element);
        });

        result += "\n"
        result += "\n"
        return result
    } 

    private generateInvoiceLine(item: FakturaTypeFaTypeFaWierszeTypeFaWierszType): string {
    let result = ''
    result += item.NrWierszaFa + ","
    result += "1,"
    result += this.quote(item.GTIN) + ","
    result += "1,"
    result += "0,"
    result += "0,"
    result += "1,"
    result += "0.0000,"
    result += "0.0000,"  // rabat?
    result += "szt.,"
    result += this.quote(String(item.P_8B?.toFixed(3))) + ","
    result += this.quote(String(item.P_8B?.toFixed(3))) + ","
    result += ","
    result += this.quote(String(item.P_9A?.toFixed(2))) + ","  // cena bazowa
    result += this.quote(String(item.P_9A?.toFixed(2))) + ","  // cena sugerowana
    let taxRate: string = item.P_12?item.P_12:'0';
    if (!["zw", "oo", "np"].includes(taxRate)) {
        taxRate = String(Number(taxRate).toFixed(2));
    }
    result += this.quote(taxRate) + ","
    result += this.quote(String(item.P_11?.toFixed(2))) + ","
    const tax = Number(item.P_11A) - Number(item.P_11);
    result += this.quote(String((Math.round(tax * 100) / 100).toFixed(2))) + ","
    result += this.quote(String((Math.round(Number(item.P_11A) * 100) / 100).toFixed(2))) + ","
    result += ","
    result += ","

    result += "\n"
    return result
    }
    private generateItemDictionary(invoice: FakturaType): string {
        let result = ""
        result += "[NAGLOWEK]\n"
        result += '"TOWARY"'
        result += "\n"
        result += "\n"
        result += "[ZAWARTOSC]"
        result += "\n"

        const items = invoice.Fa.FaWiersze?.FaWiersz;
        items?.forEach(element=> {
            result += this.generateItemDictionaryLine(element);
        });

        return result
    } 
    generateItemDictionaryLine(element: FakturaTypeFaTypeFaWierszeTypeFaWierszType) {
        let result = ''
        result += "1,"
        result += this.quote(element.GTIN) + ","
        result += this.quote(element.GTIN) + ","
        result += this.quote(element.GTIN) + ","
        const fullName = this.fixedFullName(element.P_7);
        result += this.quote(fullName) + ","
        let taxRate: string = element.P_12?element.P_12:'0';
        if (!["zw", "oo", "np"].includes(taxRate)) {
            taxRate = String(Number(taxRate).toFixed(2));
        }
        result += ","
        result += ","
        result += ","
        result += this.quote("") + ","
        result += '"szt.",'
        result += this.quote(String(element.P_12)) + ","
        result += String(taxRate)+ ","
        result += this.quote(String(element.P_12)) + ","
        result += String(taxRate) + ","
        result += ","
        result += ","
        result += ","
        result += ","
        result += ","
        result += this.quote('') + ","
        result += ","
        result += ","
        result += ","
        result += ","
        result += ","
        result += ","
        result += ","
        result += ","
        result += ","
        result += ","
        result += ","
        result += ","
        result += ","
        result += ","
        result += ","
        result += ","
        result += ","
        result += ","
        result += this.quote(element.GTIN) + ","
        result += ","
        result += ","
        result += "\n"
        return result
    }

    fixedFullName(name: string | undefined) {
        if (! name) {
            return '';
        }
        return name.trim().replace(/"/g,'\'');
    }

}
