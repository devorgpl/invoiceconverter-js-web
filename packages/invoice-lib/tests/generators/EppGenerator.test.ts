import { expect, use } from "chai";
import * as fs from 'fs';
import chaiDateTime from 'chai-datetime';
import { ComarchXmlParser } from "../../src/parsers/ComarchXmlParser";
import { EppGenerator } from "../../src/generators/EppGenerator";
import { decode, encode } from 'iconv-lite';

const file1 = fs.readFileSync("tests/parsers/_data/FX.xml",'utf8');
const resultFile = fs.readFileSync("tests/generators/_data/FX.xml.epp");
use(chaiDateTime);

  describe('should generate Epp content', function() {
    it('generate EPP from ComarchXML', function() {
        const parser = new ComarchXmlParser();
        const parsed = parser.parse(file1);
        const generator = new EppGenerator();
        const result = generator.generate(parsed);
        const buffer = encode(result, 'win1250');
        fs.writeFileSync("tests/generators/_data/output.epp", buffer);
        const resultData = decode(resultFile, 'cp1250');
        //expect(resultData).equals(result);
    }); 
  });
