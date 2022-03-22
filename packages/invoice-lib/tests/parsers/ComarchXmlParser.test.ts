import { expect, use } from "chai";
import * as fs from 'fs';
import chaiDateTime from 'chai-datetime';
import { ComarchXmlParser } from "../../src/parsers/ComarchXmlParser";

const file1 = fs.readFileSync("tests/parsers/_data/FX.xml",'utf8');
use(chaiDateTime);

describe('should test ComarchXML parser', function() {
    it('valid ComarchXML file', function() {
        const parser = new ComarchXmlParser();
        const result = parser.test(file1);
        expect(result).equal(true);
    }); 
  });

  describe('should parse ComarchXML', function() {
    it('parse ComarchXML file', function() {
        const parser = new ComarchXmlParser();
        const result = parser.parse(file1);
        // basic info
        expect(result.Naglowek.DataWytworzeniaFa).to.equalDate(new Date('2022-01-25'));
        expect(result.Naglowek.KodFormularza.content).equal("FA");
        expect(result.Fa.P_2).equal("FX/18/01/2022/MAG1");
        //?
        expect(result.Fa.Adnotacje.P_16).equal(2);
        expect(result.Fa.Adnotacje.P_17).equal(2);
        expect(result.Fa.Adnotacje.P_18).equal(2);
        expect(result.Fa.Adnotacje.P_18A).equal(2);
        expect(result.Fa.Adnotacje.P_19).equal(2);
        expect(result.Fa.Adnotacje.P_22).equal(2);
        expect(result.Fa.Adnotacje.P_23).equal(2);
        expect(result.Fa.Adnotacje.P_PMarzy).equal(2);

        // buyer
        const buyer = result.Podmiot2;
        const buyerIdData = buyer.DaneIdentyfikacyjne;
        expect(buyerIdData.NazwaHandlowa).equal('Super');
        expect(buyerIdData.PelnaNazwa).equal('Super Shop Buyer');
        expect(buyerIdData.NIP).equal(123456789);
        expect(buyer.Adres?.AdresPol.Miejscowosc).equal('Grzeń');
        expect(buyer.Adres?.AdresPol.KodPocztowy).equal('11-155');
        expect(buyer.Adres?.AdresPol.Ulica).equal('ul. Piastowska 2');

        // seller
        const seller = result.Podmiot1;
        const sellerIdData = seller.DaneIdentyfikacyjne;
        expect(sellerIdData.NazwaHandlowa).equal('Extra');
        expect(sellerIdData.PelnaNazwa).equal('Extra seler');
        expect(sellerIdData.NIP).equal(321654987);
        expect(seller.Adres?.AdresPol.Miejscowosc).equal('Stworzeń');
        expect(seller.Adres?.AdresPol.KodPocztowy).equal('22-333');
        expect(seller.Adres?.AdresPol.Ulica).equal('UL. Marna 17');

        // entries - global
        expect(result.Fa.FaWiersze?.LiczbaWierszyFaktury).equal(44);
        expect(result.Fa.FaWiersze?.WartoscWierszyFaktury1).equal(1097.39);
        expect(result.Fa.FaWiersze?.WartoscWierszyFaktury2).equal(1349.79);

        // entries
        // entry 1
        let entry = result.Fa.FaWiersze?.FaWiersz[0];
        expect(entry?.CN).equal("Piórnik podwójny bez wyposażenia, MINECRAFT 0%");
        expect(entry?.DodatkoweInfo).equal("5901137152257");
        expect(entry?.GTIN).equal("5901137152257");
        expect(entry?.NrWierszaFa).equal(1);
        // netto
        expect(entry?.P_11).equal(26.73);
        expect(entry?.P_11A).equal(32.88);
        // tax %
        expect(entry?.P_12).equal(23.00);
        expect(entry?.P_8A).equal('PCE');
        expect(entry?.P_8B).equal(1);
        expect(entry?.P_9A).equal(26.73);
        expect(entry?.P_9B).equal(32.88);

                // entry 1
        entry = result.Fa.FaWiersze?.FaWiersz[1];
        expect(entry?.CN).equal("Piornik bez wyposażenia Minecrfat 0%");
        expect(entry?.DodatkoweInfo).equal("5901137161549");
        expect(entry?.GTIN).equal("5901137161549");
        expect(entry?.NrWierszaFa).equal(2);
        // netto
        expect(entry?.P_11).equal(22.68);
        // tax %
        expect(entry?.P_12).equal(23.00);
        expect(entry?.P_8A).equal('PCE');
        expect(entry?.P_8B).equal(1);
        expect(entry?.P_9A).equal(22.68);
        expect(entry?.P_9B).equal(27.9);

    }); 
  });
