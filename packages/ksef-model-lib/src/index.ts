import { document, FakturaType, TNaglowek, TNaglowekKodFormularzaType } from "../xmlns/crd.gov.pl/wzor/2021/11/29/11089";

var f: document
var x0 : { new(): TNaglowekKodFormularzaType };
var x1: TNaglowekKodFormularzaType = {
    content: 'FA',
    kodSystemowy: '',
    wersjaSchemy: '',
}

var x2: FakturaType;
/* = {
Fa: {Adnotacje: null,
KodWaluty: "PLN",
P_1: null,
P_15: null,
P_2: null,
RodzajFaktury: null},
Naglowek: {
DataWytworzeniaFa: null,
KodFormularza: null,
WariantFormularza: null,
SystemInfo: null,
},
Podmiot1: null,
Podmiot2: null,

}
 */ 
var x3: TNaglowek;
/*  = {
    DataWytworzeniaFa: null,
    KodFormularza: null,
    WariantFormularza: 1,
}
 */
console.log(x1)
