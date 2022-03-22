import * as Primitive from "../../../../../xml-primitives";
import * as etd from "../../../../xml/schematy/dziedzinowe/mf/2021/06/09/eD/DefinicjeTypy";

// Source files:
// http://crd.gov.pl/wzor/2021/11/29/11089/schemat.xsd


interface BaseType {
	_exists?: boolean;
	_namespace?: string;
}
interface FakturaType extends BaseType {
	/** Na podstawie art. 106a - 106q ustawy. Wartości sprzedaży i kwoty podatku wypełnia się w walucie, w której wystawiono fakturę, z wyjątkiem pól, w których kwoty podatku zostały przeliczone zgodnie z art. 31a w związku z art. 106e ust. 11 ustawy. W przypadku wystawienia faktury korygującej, wypełnia się wszystkie dane wg stanu po korekcie. Dane dotyczące podstaw opodatkowania, kwot podatku oraz kwoty ogółem wypełnia się poprzez różnicę */
	Fa: FakturaTypeFaType;
	/** Nagłówek */
	Naglowek: TNaglowek;
	/** Dane podatnika. Imię i nazwisko lub nazwa sprzedawcy towarów lub usług */
	Podmiot1: FakturaTypePodmiot1Type;
	/** Dane nabywcy */
	Podmiot2: FakturaTypePodmiot2Type;
	/** Dane podmiotu/-ów trzeciego/-ich (innego/-ych niż sprzedawca i nabywca występujący sekcji Podmiot2), związanego/-ych z fakturą */
	Podmiot3?: FakturaTypePodmiot3Type[];
	/** Dane podmiotu upoważnionego, związanego z fakturą */
	PodmiotUpowazniony?: FakturaTypePodmiotUpowaznionyType;
	/** Pozostałe informacje na fakturze */
	Stopka?: FakturaTypeStopkaType;
}

interface FakturaTypeFaType extends BaseType {
	/** Inne adnotacje na fakturze */
	Adnotacje: FakturaTypeFaTypeAdnotacjeType;
	/** Dane faktury korygowanej */
	DaneFaKorygowanej?: FakturaTypeFaTypeDaneFaKorygowanejType[];
	/** Pola rezerwowe przeznaczone dla wykazywania dodatkowych informacji na fakturze, w tym wymaganych przepisami prawa, dla których nie przewidziano innych pól/elementów */
	DodatkowyOpis?: TKluczWartosc[];
	/** Szczegółowe pozycje faktury w walucie, w której wystawiono fakturę - węzeł opcjonalny dla faktury zaliczkowej, faktury korygującej fakturę zaliczkową, oraz faktur korygujących dotyczących wszystkich dostaw towarów lub usług dokonanych lub świadczonych w danym okresie, o których mowa w art. 106j ust. 3 ustawy, dla których należy podać dane dotyczące opustu lub obniżki w podziale na stawki podatku i procedury w sekcji Fa. W przypadku faktur korygujących, o których mowa w art. 106j ust. 3 ustawy, gdy opust lub obniżka ceny odnosi się do części dostaw towarów lub usług dokonanych lub świadczonych w danym okresie w sekcji FaWiersz należy podać nazwy (rodzaje) towarów lub usług objętych korektą. W przypadku faktur, o których mowa w art. 106f ust. 3 ustawy należy prezentować pełne wartości zamówienia lub umowy. W przypadku faktur korygujących pozycje faktury (w tym faktur korygujących faktury, o których mowa w art. 106f ust. 3 ustawy, jeśli korekta dotyczy wartości zamówienia) należy prezentować różnice wynikające z korekty poszczególnych pozycji lub storna poszczególnych pozycji korygowanych i prawidłowe wartości korygowanych pozycji jako osobne wiersze. W przypadku faktur korygujących faktury, o których mowa w art. 106f ust. 3 ustawy, jeśli korekta nie dotyczy wartości zamówienia i jednocześnie zmienia wysokość podstawy opodatkowania lub podatku, należy wprowadzić zapis stornujący dany wiersz wg stanu przed korektą i zapis przywracający wartość zamówienia w celu potwierdzenia braku zmiany jego wartości */
	FaWiersze?: FakturaTypeFaTypeFaWierszeType;
	/** Faktura, o której mowa w art. 109 ust. 3d ustawy */
	FP?: etd.TWybor1;
	/** Trzyliterowy kod waluty (ISO-4217) w przypadkach, o których mowa w art. 31a ustawy */
	KodWaluty: TKodWaluty;
	/** Poprawny numer faktury korygowanej w przypadku, gdy przyczyną korekty jest błędny numer faktury korygowanej. W polu NrFaKorygowanej należy wówczas wskazać ten błędny numer */
	NrFaKorygowany?: string;
	/** Pole obowiązkowe dla faktury wystawianej po wydaniu towaru lub wykonaniu usługi, o której mowa w art. 106f ust. 3 i ostatniej z faktur, o której mowa w art. 106f ust. 4 ustawy */
	NrFaZaliczkowej?: string[];
	/** Okres, którego dotyczy faktura w przypadkach, o których mowa w art. 19a ust. 3 zdanie pierwsze i ust. 4 oraz ust. 5 pkt 4 ustawy */
	OkresFa?: FakturaTypeFaTypeOkresFaType;
	/** Dla faktury korygującej, o której mowa w art. 106j ust. 3 ustawy - okres, do którego odnosi się udzielany opust lub obniżka, w przypadku gdy podatnik udziela opustu lub obniżki ceny w odniesieniu do dostaw towarów lub usług dokonanych lub świadczonych na rzecz jednego odbiorcy w danym okresie. */
	OkresFaKorygowanej?: string;
	/** Data wystawienia, z zastrzeżeniem art. 106na ust. 1 ustawy */
	P_1: Date;
	/** Suma wartości sprzedaży netto ze stawką podstawową - aktualnie 23% albo 22%. W przypadku faktur zaliczkowych, kwota zaliczki netto. W przypadku faktur korygujących, kwota różnicy, o której mowa w art. 106j ust. 2 pkt 5 ustawy */
	P_13_1?: number;
	/** Suma wartości sprzedaży netto ze stawką obniżoną pierwszą - aktualnie 8 % albo 7%. W przypadku faktur zaliczkowych, kwota zaliczki netto. W przypadku faktur korygujących, kwota różnicy, o której mowa w art. 106j ust. 2 pkt 5 ustawy */
	P_13_2?: number;
	/** Suma wartości sprzedaży netto ze stawką obniżoną drugą - aktualnie 5%. W przypadku faktur zaliczkowych, kwota zaliczki netto. W przypadku faktur korygujących, kwota różnicy, o której mowa w art. 106j ust. 2 pkt 5 ustawy */
	P_13_3?: number;
	/** Suma wartości sprzedaży netto ze stawką obniżoną trzecią w walucie, w której faktura została wystawiona - procedura odwrotnego obciążenia, dla której podatnikiem jest nabywca zgodnie z art. 17 ust. 1 pkt 7 i 8 ustawy oraz dla stawki podatku w przypadku ryczałtu dla taksówek osobowych. W przypadku faktur zaliczkowych, kwota zaliczki netto. W przypadku faktur korygujących, kwota różnicy, o której mowa w art. 106j ust. 2 pkt 5 ustawy */
	P_13_4?: number;
	/** Suma wartości sprzedaży netto dla transakcji dostawy towarów oraz świadczenia usług poza terytorium kraju. W przypadku faktur zaliczkowych, kwota zaliczki netto. W przypadku faktur korygujących, kwota różnicy, o której mowa w art. 106j ust. 2 pkt 5 ustawy */
	P_13_5?: number;
	/** Suma wartości sprzedaży netto ze stawką 0%. W przypadku faktur zaliczkowych, kwota zaliczki netto. Pole opcjonalne dla przypadków określonych w art. 106e ust. 2 i 3, a także ust. 4 pkt 3 i ust. 5 pkt 1-3 ustawy. W przypadku faktur korygujących, kwota różnicy, o której mowa w art. 106j ust. 2 pkt 5 ustawy */
	P_13_6?: number;
	/** Suma wartości sprzedaży zwolnionej. W przypadku faktur zaliczkowych, kwota zaliczki netto. Pola opcjonalne dla przypadków określonych w art. 106e ust. 2 i 3, a także ust. 4 pkt 3 i ust. 5 pkt 1-3 ustawy. W przypadku faktur korygujących, kwota różnicy, o której mowa w art. 106j ust. 2 pkt 5 ustawy */
	P_13_7?: number;
	/** Kwota podatku od sumy wartości sprzedaży netto ze stawką podstawową - aktualnie 23% albo 22%. W przypadku faktur zaliczkowych, kwota podatku wyliczona według wzoru, o którym mowa w art. 106f ust. 1 pkt 3 ustawy. W przypadku faktur korygujących, kwota różnicy, o której mowa w art. 106j ust. 2 pkt 5 ustawy */
	P_14_1?: number;
	/** W przypadku gdy faktura jest wystawiona w walucie obcej, kwota podatku od sumy wartości sprzedaży netto ze stawką podstawową, przeliczona zgodnie z art. 31a w związku z art. 106e ust. 11 ustawy - aktualnie 23% albo 22%. W przypadku faktur zaliczkowych, kwota podatku wyliczona według wzoru, o którym mowa w art. 106f ust. 1 pkt 3 ustawy. W przypadku faktur korygujących, kwota różnicy, o której mowa w art. 106j ust. 2 pkt 5 ustawy */
	P_14_1W?: number;
	/** Kwota podatku od sumy wartości sprzedaży netto ze stawką obniżoną pierwszą - aktualnie 8% albo 7%. W przypadku faktur zaliczkowych, kwota podatku wyliczona według wzoru, o którym mowa w art. 106f ust. 1 pkt 3 ustawy. W przypadku faktur korygujących, kwota różnicy, o której mowa w art. 106j ust. 2 pkt 5 ustawy */
	P_14_2?: number;
	/** W przypadku gdy faktura jest wystawiona w walucie obcej, kwota podatku od sumy wartości sprzedaży netto ze stawką obniżoną, przeliczona zgodnie z art. 31a w związku z art. 106e ust. 11 ustawy - aktualnie 8% albo 7%. W przypadku faktur zaliczkowych, kwota podatku wyliczona według wzoru, o którym mowa w art. 106f ust. 1 pkt 3 ustawy. W przypadku faktur korygujących, kwota różnicy, o której mowa w art. 106j ust. 2 pkt 5 ustawy */
	P_14_2W?: number;
	/** Kwota podatku od sumy wartości sprzedaży netto ze stawką obniżoną drugą - aktualnie 5%. W przypadku faktur zaliczkowych, kwota podatku wyliczona według wzoru, o którym mowa w art. 106f ust. 1 pkt 3 ustawy. W przypadku faktur korygujących, kwota różnicy, o której mowa w art. 106j ust. 2 pkt 5 ustawy */
	P_14_3?: number;
	/** W przypadku gdy faktura jest wystawiona w walucie obcej, kwota podatku od sumy wartości sprzedaży netto ze stawką obniżoną drugą, przeliczona zgodnie z art. 31a w związku z art. 106e ust. 11 ustawy - aktualnie 5%. W przypadku faktur zaliczkowych, kwota podatku wyliczona według wzoru, o którym mowa w art. 106f ust. 1 pkt 3 ustawy. W przypadku faktur korygujących, kwota różnicy, o której mowa w art. 106j ust. 2 pkt 5 ustawy */
	P_14_3W?: number;
	/** Kwota "0" dla procedury odwrotnego obciążenia, dla której podatnikiem jest nabywca zgodnie z art. 17 ust. 1 pkt 7 i 8 ustawy oraz kwota podatku od sumy wartości sprzedaży netto dla stawki podatku w walucie, w której faktura została wystawiona w przypadku ryczałtu dla taksówek osobowych. W przypadku faktur zaliczkowych, kwota podatku wyliczona według wzoru, o którym mowa w art. 106f ust. 1 pkt 3 ustawy. W przypadku faktur korygujących, kwota różnicy, o której mowa w art. 106j ust. 2 pkt 5 ustawy */
	P_14_4?: number;
	/** W przypadku gdy faktura jest wystawiona w walucie obcej, kwota "0" dla procedury odwrotnego obciążenia, dla której podatnikiem jest nabywca zgodnie z art. 17 ust. 1 pkt 7 i 8 ustawy oraz kwota podatku od sumy wartości sprzedaży netto w walucie obcej dla stawki podatku w przypadku ryczałtu dla taksówek osobowych, przeliczona zgodnie z art. 31a w związku z art. 106e ust. 11 ustawy. W przypadku faktur zaliczkowych, kwota podatku wyliczona według wzoru, o którym mowa w art. 106f ust. 1 pkt 3 ustawy. W przypadku faktur korygujących, kwota różnicy, o której mowa w art. 106j ust. 2 pkt 5 ustawy */
	P_14_4W?: number;
	/** Kwota podatku od wartości dodanej w przypadku procedury szczególnej, o której mowa w dziale XII w rozdziale 6a ustawy. W przypadku faktur korygujących, kwota różnicy, o której mowa w art. 106j ust. 2 pkt 5 ustawy */
	P_14_5?: number;
	/** Kwota należności ogółem. W przypadku faktur zaliczkowych kwota zapłaty dokumentowana fakturą. W przypadku faktur, o których mowa w art. 106f ust. 3 ustawy kwota pozostała do zapłaty. W przypadku faktur korygujących korekta kwoty wynikającej z faktury korygowanej. W przypadku, o którym mowa w art. 106j ust. 3 ustawy korekta kwot wynikających z faktur korygowanych */
	P_15: number;
	/** Miejsce wystawienia faktury */
	P_1M?: string;
	/** Kolejny numer faktury, nadany w ramach jednej lub więcej serii, który w sposób jednoznaczny identyfikuje fakturę */
	P_2: string;
	/** Data dokonania lub zakończenia dostawy towarów lub wykonania usługi lub data otrzymania zapłaty, o której mowa w art. 106b ust. 1 pkt 4 ustawy, o ile taka data jest określona i różni się od daty wystawienia faktury. Pole wypełnia się w przypadku, gdy dla wszystkich pozycji faktury data jest wspólna */
	P_6?: Date;
	/** Warunki płatności */
	Platnosc?: FakturaTypeFaTypePlatnoscType;
	/** W przypadku korekty danych sprzedawcy należy podać kompletne dane sprzedawcy występujące w fakturze korygowanej. Pole nie dotyczy przypadku korekty błędnego numeru NIP występującego w fakturze pierwotnej. Wówczas wymagana jest korekta faktury do wartości zerowych */
	Podmiot1K?: FakturaTypeFaTypePodmiot1KType;
	/** W przypadku korekty danych nabywcy występującego jako Podmiot2 lub dodatkowego nabywcy występującego jako Podmiot3 należy podać kompletne dane tego podmiotu występujące w fakturze korygowanej. Korekcie nie podlegają błędne numery identyfikujące nabywcę oraz dodatkowego nabywcę. W przypadku korygowania pozostałych danych nabywcy lub dodatkowego nabywcy wskazany numer identyfikacyjny musi być identyczny z numerem w części Podmiot2 względnie Podmiot3 faktury korygującej */
	Podmiot2K?: FakturaTypeFaTypePodmiot2KType[];
	/** Przyczyna korekty dla faktur korygujących */
	PrzyczynaKorekty?: string;
	/** Rodzaj faktury */
	RodzajFaktury: TRodzajFaktury;
	/** Dodatkowe rozliczenia na fakturze */
	Rozliczenie?: FakturaTypeFaTypeRozliczenieType;
	/** Istniejące powiązania między nabywcą a dokonującym dostawy towarów lub usługodawcą, zgodnie z § 10 ust. 4 pkt 3, z zastrzeżeniem ust. 4b rozporządzenia w sprawie szczegółowego zakresu danych zawartych w deklaracjach podatkowych i w ewidencji w zakresie podatku od towarów i usług */
	TP?: etd.TWybor1;
	/** Typ skutku korekty w ewidencji */
	TypKorekty?: TTypKorekty;
	/** Warunki transakcji, o ile występują */
	WarunkiTransakcji?: FakturaTypeFaTypeWarunkiTransakcjiType;
	/** Numery dokumentów magazynowych WZ (wydanie na zewnątrz) związane z fakturą */
	WZ?: string[];
	/** Zamówienie lub umowa, o których mowa w art. 106f ust. 1 pkt 4 ustawy (dla faktur zaliczkowych) w walucie, w której wystawiono fakturę zaliczkową. W przypadku faktury korygującej fakturę zaliczkową należy prezentować różnice wynikające z korekty poszczególnych pozycji zamówienia lub umowy lub storna poszczególnych korygowanych pozycji zamówienia lub umowy i prawidłowe wartości korygowanych pozycji jako osobne wiersze jeśli korekta dotyczy wartości zamówienia. W przypadku faktur korygujących faktury zaliczkowe, jeśli korekta nie dotyczy wartości zamówienia i jednocześnie zmienia wysokość podstawy opodatkowania lub podatku, należy wprowadzić zapis stornujący dany wiersz wg stanu przed korektą i zapis przywracający wartość zamówienia w celu potwierdzenia braku zmiany jego wartości */
	Zamowienie?: FakturaTypeFaTypeZamowienieType;
	/** Informacja dodatkowa niezbędna dla rolników ubiegających się o zwrot podatku akcyzowego zawartego w cenie oleju napędowego */
	ZwrotAkcyzy?: etd.TWybor1;
}

interface FakturaTypeFaTypeAdnotacjeType extends BaseType {
	/** W przypadku dostawy towarów lub świadczenia usług, w odniesieniu do których obowiązek podatkowy powstaje zgodnie z art. 19a ust. 5 pkt 1 lub art. 21 ust. 1 ustawy - wyrazy "metoda kasowa", należy podać wartość "1"; w przeciwnym przypadku - wartość "2" */
	P_16: etd.TWybor1_2;
	/** W przypadku faktur, o których mowa w art. 106d ust. 1 ustawy - wyraz "samofakturowanie", należy podać wartość "1"; w przeciwnym przypadku - wartość "2" */
	P_17: etd.TWybor1_2;
	/** W przypadku dostawy towarów lub wykonania usługi, dla których obowiązanym do rozliczenia podatku od wartości dodanej lub podatku o podobnym charakterze jest nabywca towaru lub usługi - wyrazy "odwrotne obciążenie", należy podać wartość "1", w przeciwnym przypadku - wartość "2" */
	P_18: etd.TWybor1_2;
	/** W przypadku faktur, w których kwota należności ogółem przekracza kwotę
	  * 15 000 zł lub jej równowartość wyrażoną w walucie obcej, obejmujących
	  * dokonaną na rzecz podatnika dostawę towarów lub świadczenie usług, o których mowa w załączniku nr 15 do ustawy - wyrazy "mechanizm
	  * podzielonej płatności", przy czym do przeliczania na złote kwot wyrażonych w walucie obcej stosuje się zasady przeliczania kwot stosowane w celu określenia podstawy opodatkowania; należy podać wartość "1", w przeciwnym przypadku - wartość "2" */
	P_18A: etd.TWybor1_2;
	/** W przypadku dostawy towarów lub świadczenia usług zwolnionych od podatku na podstawie art. 43 ust. 1, art. 113 ust. 1 i 9 albo przepisów wydanych na podstawie art. 82 ust. 3 ustawy lub na podstawie innych przepisów należy podać wartość "1", w przeciwnym przypadku - wartość "2" */
	P_19: etd.TWybor1_2;
	/** Jeśli pole P_19 równa się "1" - należy wskazać przepis ustawy albo aktu wydanego na podstawie ustawy, na podstawie którego podatnik stosuje zwolnienie od podatku */
	P_19A?: string;
	/** Jeśli pole P_19 równa się "1" - należy wskazać przepis dyrektywy 2006/112/WE, który zwalnia od podatku taką dostawę towarów lub takie świadczenie usług */
	P_19B?: string;
	/** Jeśli pole P_19 równa się "1" - należy wskazać inną podstawę prawną wskazującą na to, że dostawa towarów lub świadczenie usług korzysta ze zwolnienia */
	P_19C?: string;
	/** W przypadku gdy przedmiotem wewnątrzwspólnotowej dostawy są nowe środki transportu należy podać wartość "1", w przeciwnym przypadku - wartość "2" */
	P_22: etd.TWybor1_2;
	/** Jeśli pole P_22 równa się "1" - należy podać datę dopuszczenia nowego środka transportu do użytku */
	P_22A?: Date;
	/** Jeśli pole P_22 równa się "1" a dostawa dotyczy pojazdów lądowych, o których mowa w art. 2 pkt 10 lit. a ustawy - należy podać przebieg pojazdu */
	P_22B?: string;
	/** Jeśli pole P_22 równa się "1" a dostawa dotyczy pojazdów lądowych, o których mowa w art. 2 pkt 10 lit. a ustawy - można podać numer VIN */
	P_22B1?: string;
	/** Jeśli pole P_22 równa się "1" a dostawa dotyczy pojazdów lądowych, o których mowa w art. 2 pkt 10 lit. a ustawy - można podać numer nadwozia */
	P_22B2?: string;
	/** Jeśli pole P_22 równa się "1" a dostawa dotyczy pojazdów lądowych, o których mowa w art. 2 pkt 10 lit. a ustawy - można podać numer podwozia */
	P_22B3?: string;
	/** Jeśli pole P_22 równa się "1" a dostawa dotyczy pojazdów lądowych, o których mowa w art. 2 pkt 10 lit. a ustawy - można podać numer ramy */
	P_22B4?: string;
	/** Jeśli pole P_22 równa się "1" można podać kolor nowego środka transportu */
	P_22BK?: string;
	/** Jeśli pole P_22 równa się "1" można podać model nowego środka transportu */
	P_22BMD?: string;
	/** Jeśli pole P_22 równa się "1" można podać markę nowego środka transportu */
	P_22BMK?: string;
	/** Jeśli pole P_22 równa się "1" można podać numer rejestracyjny nowego środka transportu */
	P_22BNR?: string;
	/** Jeśli pole P_22 równa się "1" można podać rok produkcji nowego środka transportu */
	P_22BRP?: string;
	/** Jeśli pole P_22 równa się "1" a dostawa dotyczy pojazdów lądowych, o których mowa w art. 2 pkt 10 lit. a ustawy - można podać typ nowego środka transportu */
	P_22BT?: string;
	/** Jeśli pole P_22 równa się "1" a dostawa dotyczy jednostek pływających, o których mowa w art. 2 pkt 10 lit. b ustawy, należy podać liczbę godzin roboczych używania nowego środka transportu */
	P_22C?: string;
	/** Jeśli pole P_22 równa się "1" a dostawa dotyczy jednostek pływających, o których mowa w art. 2 pkt 10 lit. b ustawy, można podać numer kadłuba nowego środka transportu */
	P_22C1?: string;
	/** Jeśli pole P_22 równa się "1" a dostawa dotyczy statków powietrznych, o których mowa w art. 2 pkt 10 lit. c ustawy, należy podać liczbę godzin roboczych używania nowego środka transportu */
	P_22D?: string;
	/** Jeśli pole P_22 równa się "1" a dostawa dotyczy statków powietrznych, o których mowa w art. 2 pkt 10 lit. c ustawy, można podać numer fabryczny nowego środka transportu */
	P_22D1?: string;
	/** W przypadku faktur wystawianych w procedurze uproszczonej przez drugiego w kolejności podatnika, o którym mowa w art. 135 ust. 1 pkt 4 lit. b i c oraz ust. 2, zawierającej adnotację, o której mowa w art. 136 ust. 1 pkt 1 i stwierdzenie, o którym mowa w art. 136 ust. 1 pkt 2 ustawy należy podać wartość "1", w przeciwnym przypadku - wartość "2" */
	P_23: etd.TWybor1_2;
	/** W przypadku wystąpienia procedur marży, o których mowa w art. 119 lub 120 ustawy należy podać wartość "1", w przeciwnym przypadku - wartość "2" */
	P_PMarzy: etd.TWybor1_2;
	/** W przypadku świadczenia usług turystyki, dla których podstawę opodatkowania stanowi marża, zgodnie z art. 119 ust. 1 ustawy, a faktura dokumentująca świadczenie zawiera wyrazy "procedura marży dla biur podróży", należy podać wartość "1" */
	P_PMarzy_2?: etd.TWybor1;
	/** W przypadku dostawy towarów używanych dla których podstawę opodatkowania stanowi marża, zgodnie z art. 120 ustawy, a faktura dokumentująca dostawę zawiera wyrazy "procedura marży - towary używane", należy podać wartość "1" */
	P_PMarzy_3_1?: etd.TWybor1;
	/** W przypadku dostawy dzieł sztuki dla których podstawę opodatkowania stanowi marża, zgodnie z art. 120 ustawy, a faktura dokumentująca dostawę zawiera wyrazy "procedura marży - dzieła sztuki", należy podać wartość "1" */
	P_PMarzy_3_2?: etd.TWybor1;
	/** W przypadku dostawy przedmiotów kolekcjonerskich i antyków, dla których podstawę opodatkowania stanowi marża, zgodnie z art. 120 ustawy, a faktura dokumentująca dostawę zawiera wyrazy "procedura marży - przedmioty kolekcjonerskie i antyki", należy podać wartość "1" */
	P_PMarzy_3_3?: etd.TWybor1;
}

interface FakturaTypeFaTypeDaneFaKorygowanejType extends BaseType {
	/** Data wystawienia faktury, której dotyczy faktura korygująca */
	DataWystFaKorygowanej: Date;
	/** Numer faktury korygowanej */
	NrFaKorygowanej: string;
	/** Numer identyfikujący fakturę korygowaną w Krajowym Systemie e-Faktur (KSeF) */
	NrKSeFFaKorygowanej: string;
}

interface FakturaTypeFaTypeFaWierszeType extends BaseType {
	/** Szczegółowe pozycje faktury w walucie, w której wystawiono fakturę */
	FaWiersz: FakturaTypeFaTypeFaWierszeTypeFaWierszType[];
	/** Liczba wierszy faktury */
	LiczbaWierszyFaktury: number;
	/** Łączna wartość kolumny P_11 */
	WartoscWierszyFaktury1: number;
	/** Łączna wartość kolumny P_11A */
	WartoscWierszyFaktury2: number;
}

interface FakturaTypeFaTypeFaWierszeTypeFaWierszType extends BaseType {
	/** Symbol Nomenklatury Scalonej */
	CN?: string;
	/** Pole przeznaczone do wpisania przez sprzedawcę dodatkowych danych, które nie zostały uwzględnione w elementach struktury i nie są wymagane przepisami, a które mogą znaleźć się na fakturze */
	DodatkoweInfo?: string;
	/** Globalny numer jednostki handlowej */
	GTIN?: string;
	/** Oznaczenie dotyczące dostawy towarów i świadczenia usług */
	GTU?: TGTU;
	/** Kurs waluty stosowany do wyliczenia kwoty podatku w przypadkach, o których mowa w art. 31a ustawy */
	KursWaluty?: number;
	/** Kwota podatku akcyzowego zawarta w cenie towaru */
	KwotaAkcyzy?: number;
	/** Kolejny numer wiersza faktury */
	NrWierszaFa: number;
	/** Kwoty wszelkich opustów lub obniżek cen, w tym w formie rabatu z tytułu wcześniejszej zapłaty, o ile nie zostały one uwzględnione w cenie jednostkowej netto. Pole opcjonalne dla przypadków określonych w art. 106e ust. 2 i 3 oraz ust. 5 pkt 1 ustawy */
	P_10?: number;
	/** Wartość dostarczonych towarów lub wykonanych usług, objętych transakcją, bez kwoty podatku (wartość sprzedaży netto). Pole opcjonalne dla przypadków określonych w art. 106e ust. 2 i 3 oraz ust. 5 pkt 3 ustawy */
	P_11?: number;
	/** Wartość sprzedaży brutto, w przypadku zastosowania art. 106e ust. 7 i 8 ustawy */
	P_11A?: number;
	/** Stawka podatku. Pole opcjonalne dla przypadków określonych w art. 106e ust. 2, 3, 4 pkt 3 i ust. 5 pkt 3 ustawy */
	P_12?: TStawkaPodatku;
	/** Wskazanie procedury dla wiersza faktury */
	P_12_Procedura?: TProceduraFa;
	/** Stawka podatku od wartości dodanej w przypadku, o którym mowa w dziale XII w rozdziale 6a ustawy */
	P_12_XII?: number;
	/** Data dokonania lub zakończenia dostawy towarów lub wykonania usługi lub data otrzymania zapłaty, o której mowa w art. 106b ust. 1 pkt 4 ustawy, o ile taka data jest określona i różni się od daty wystawienia faktury. Pole wypełnia się dla przypadku, gdy dla poszczególnych pozycji faktury występują różne daty */
	P_6A?: Date;
	/** Nazwa (rodzaj) towaru lub usługi. Pole opcjonalne wyłącznie dla przypadku określonego w art 106j ust. 3 pkt 2 ustawy (faktura korekta) */
	P_7?: string;
	/** Miara dostarczonych towarów lub zakres wykonanych usług. Pole opcjonalne dla przypadku określonego w art. 106e ust. 5 pkt 3 ustawy */
	P_8A?: string;
	/** Ilość (liczba) dostarczonych towarów lub zakres wykonanych usług. Pole opcjonalne dla przypadku określonego w art. 106e ust. 5 pkt 3 ustawy */
	P_8B?: number;
	/** Cena jednostkowa towaru lub usługi bez kwoty podatku (cena jednostkowa netto). Pole opcjonalne dla przypadków określonych w art. 106e ust. 2 i 3 oraz ust. 5 pkt 3 ustawy */
	P_9A?: number;
	/** Cena wraz z kwotą podatku (cena jednostkowa brutto), w przypadku zastosowania art. 106e ust. 7 i 8 ustawy */
	P_9B?: number;
	/** Symbol Polskiej Klasyfikacji Obiektów Budowlanych */
	PKOB?: string;
	/** Symbol Polskiej Klasyfikacji Wyrobów i Usług */
	PKWiU?: string;
	/** Oznaczenie dotyczące procedury */
	Procedura?: TOznaczenieProcedury;
	/** Uniwersalny unikalny numer wiersza faktury */
	UU_ID?: string;
}

interface FakturaTypeFaTypeOkresFaType extends BaseType {
	/** Data końcowa okresu, którego dotyczy faktura - data dokonania lub zakończenia dostawy towarów lub wykonania usługi */
	P_6_Do: Date;
	/** Data początkowa okresu, którego dotyczy faktura */
	P_6_Od: Date;
}

interface FakturaTypeFaTypePlatnoscType extends BaseType {
	/** Data zapłaty, jeśli do wystawienia faktury płatność została dokonana */
	DataZaplaty?: Date;
	/** Forma płatności */
	FormaPlatnosci?: TFormaPlatnosci;
	/** Doprecyzowanie innej formy płatności */
	OpisPlatnosci?: string;
	/** Możliwość wystąpienia więcej niż jednej zapłaty częściowej w fakturze może wystąpić wyłącznie w przypadku płatności dokonywanych po dostawie towarów lub wykonaniu usług, a przed wystawieniem faktury, z wyjątkiem przypadków, gdy otrzymanie płatności nie skutkuje obowiązkiem wystawienia faktury */
	PlatnosciCzesciowe?: FakturaTypeFaTypePlatnoscTypePlatnosciCzescioweType[];
	/** Znacznik innej formy płatności: 1 - inna forma płatności */
	PlatnoscInna?: etd.TWybor1;
	/** Numer rachunku bankowego */
	RachunekBankowy?: TRachunekBankowy[];
	/** Rachunek bankowy faktora */
	RachunekBankowyFaktora?: TRachunekBankowy[];
	/** Skonto */
	Skonto?: FakturaTypeFaTypePlatnoscTypeSkontoType;
	TerminyPlatnosci?: FakturaTypeFaTypePlatnoscTypeTerminyPlatnosciType[];
	/** Znacznik informujący, że kwota należności wynikająca z faktury została zapłacona: 1 - zapłacono */
	Zaplacono?: etd.TWybor1;
	/** Znacznik informujący, że kwota należności wynikająca z faktury została zapłacona w części: 1 - zapłacono w części */
	ZaplataCzesciowa?: etd.TWybor1;
}

interface FakturaTypeFaTypePlatnoscTypePlatnosciCzescioweType extends BaseType {
	/** Data zapłaty częściowej, jeśli do wystawienia faktury płatność częściowa została dokonana */
	DataZaplatyCzesciowej: Date;
	/** Kwota zapłaty częściowej */
	KwotaZaplatyCzesciowej: number;
}

interface FakturaTypeFaTypePlatnoscTypeSkontoType extends BaseType {
	/** Warunki, które nabywca powinien spełnić aby skorzystać ze skonta */
	WarunkiSkonta: string;
	/** Wysokość skonta */
	WysokoscSkonta: string;
}

interface FakturaTypeFaTypePlatnoscTypeTerminyPlatnosciType extends BaseType {
	/** Termin płatności */
	TerminPlatnosci: Date;
	/** Opis terminu płatności */
	TerminPlatnosciOpis?: string;
}

interface FakturaTypeFaTypePodmiot1KType extends BaseType {
	/** Adres podatnika */
	Adres: TAdres;
	/** Dane identyfikujące podatnika */
	DaneIdentyfikacyjne: TPodmiot1;
	/** Kod (prefiks) podatnika VAT UE dla przypadków określonych w art. 97 ust. 10 pkt 2 i 3 ustawy oraz w przypadku, o którym mowa w art. 136 ust. 1 pkt 3 ustawy */
	PrefiksPodatnika?: TKodyKrajowUE;
}

interface FakturaTypeFaTypePodmiot2KType extends BaseType {
	/** Adres nabywcy. Pola opcjonalne dla przypadków określonych w art. 106e ust. 5 pkt 3 ustawy */
	Adres?: TAdres;
	/** Dane identyfikujące nabywcę */
	DaneIdentyfikacyjne: TPodmiot;
	/** Kod (prefiks) nabywcy VAT UE, o którym mowa w art. 106e ust. 1 pkt 24 ustawy oraz w przypadku, o którym mowa w art. 136 ust. 1 pkt 4 ustawy */
	PrefiksNabywcy?: TKodyKrajowUE;
}

interface FakturaTypeFaTypeRozliczenieType extends BaseType {
	/** Kwota nadpłacona do rozliczenia/zwrotu */
	DoRozliczenia?: number;
	/** Kwota należności do zapłaty równa polu P_15 powiększonemu o Obciazenia i pomniejszonemu o Odliczenia */
	DoZaplaty?: number;
	/** Obciążenia */
	Obciazenia?: FakturaTypeFaTypeRozliczenieTypeObciazeniaType[];
	/** Odliczenia */
	Odliczenia?: FakturaTypeFaTypeRozliczenieTypeOdliczeniaType[];
	/** Suma obciążeń */
	SumaObciazen?: number;
	/** Suma odliczeń */
	SumaOdliczen?: number;
}

interface FakturaTypeFaTypeRozliczenieTypeObciazeniaType extends BaseType {
	/** Kwota doliczona do kwoty wykazanej w polu P_15 */
	Kwota: number;
	/** Powód obciążenia */
	Powod: string;
}

interface FakturaTypeFaTypeRozliczenieTypeOdliczeniaType extends BaseType {
	/** Kwota odliczona od kwoty wykazanej w polu P_15 */
	Kwota: number;
	/** Powód odliczenia */
	Powod: string;
}

interface FakturaTypeFaTypeWarunkiTransakcjiType extends BaseType {
	/** Kurs umowny - w przypadkach, gdy w fakturze znajduje się informacja o kursie, po którym zostały przeliczone kwoty wykazane w fakturze w złotych. Nie dotyczy przypadków, o których mowa w art. 31a ustawy */
	KursUmowny?: number;
	/** Numery partii towaru */
	NrPartiiTowaru?: string[];
	/** Wartość "1" oznacza dostawę dokonaną przez podmiot, o którym mowa w art. 22 ust. 2d ustawy. Pole dotyczy sytuacji, w której podmiot uczestniczy w transakcji łańcuchowej innej niż procedura trójstronna uproszczona, o której mowa w art. 135 ust. 1 pkt 4 ustawy */
	PodmiotPosredniczacy?: etd.TWybor1;
	Transport?: FakturaTypeFaTypeWarunkiTransakcjiTypeTransportType[];
	Umowy?: FakturaTypeFaTypeWarunkiTransakcjiTypeUmowyType[];
	/** Waluta umowna - trzyliterowy kod waluty (ISO-4217) w przypadkach, gdy w fakturze znajduje się informacja o kursie, po którym zostały przeliczone kwoty wykazane w fakturze w złotych. Nie dotyczy przypadków, o których mowa w art. 31a ustawy */
	WalutaUmowna?: TKodWaluty;
	/** Warunki dostawy towarów - w przypadku istnienia pomiędzy stronami transakcji, umowy określającej warunki dostawy tzw. Incoterms */
	WarunkiDostawy?: string;
	Zamowienia?: FakturaTypeFaTypeWarunkiTransakcjiTypeZamowieniaType[];
}

interface FakturaTypeFaTypeWarunkiTransakcjiTypeTransportType extends BaseType {
	/** Data i godzina rozpoczęcia transportu */
	DataGodzRozpTransportu?: Date;
	/** Data i godzina zakończenia transportu */
	DataGodzZakTransportu?: Date;
	/** Jednostka opakowania */
	JednostkaOpakowania?: string;
	/** Znacznik innego ładunku: 1 - inny ładunek */
	LadunekInny: etd.TWybor1;
	/** Numer zlecenia transportu */
	NrZleceniaTransportu?: string;
	/** Opis innego ładunku, w tym ładunek mieszany */
	OpisInnegoLadunku: string;
	/** Opis innego rodzaju transportu */
	OpisInnegoTransportu: string;
	/** Rodzaj ładunku */
	OpisLadunku: TLadunek;
	Przewoznik?: FakturaTypeFaTypeWarunkiTransakcjiTypeTransportTypePrzewoznikType;
	/** Rodzaj zastosowanego transportu w przypadku dokonanej dostawy towarów */
	RodzajTransportu: TRodzajTransportu;
	/** Znacznik innego rodzaju transportu: 1 - inny rodzaj transportu */
	TransportInny: etd.TWybor1;
	/** Adres miejsca docelowego, do którego został zlecony transport */
	WysylkaDo: TAdres;
	/** Adres pośredni wysyłki */
	WysylkaPrzez?: TAdres[];
	/** Adres miejsca wysyłki */
	WysylkaZ: TAdres;
}

interface FakturaTypeFaTypeWarunkiTransakcjiTypeTransportTypePrzewoznikType extends BaseType {
	/** Adres przewoźnika */
	AdresPrzewoznika: TAdres;
	/** Dane identyfikacyjne przewoźnika */
	DaneIdentyfikacyjne: TPodmiot;
}

interface FakturaTypeFaTypeWarunkiTransakcjiTypeUmowyType extends BaseType {
	/** Data umowy */
	DataUmowy?: Date;
	/** Numer umowy */
	NrUmowy?: string;
}

interface FakturaTypeFaTypeWarunkiTransakcjiTypeZamowieniaType extends BaseType {
	/** Data zamówienia */
	DataZamowienia?: Date;
	/** Numer zamówienia */
	NrZamowienia?: string;
}

interface FakturaTypeFaTypeZamowienieType extends BaseType {
	/** Liczba wierszy zamówienia lub umowy */
	LiczbaWierszyZamowienia: number;
	/** Wartość zamówienia lub umowy z uwzględnieniem kwoty podatku */
	WartoscZamowienia: number;
	/** Szczegółowe pozycje zamówienia lub umowy w walucie, w której wystawiono fakturę zaliczkową */
	ZamowienieWiersz: FakturaTypeFaTypeZamowienieTypeZamowienieWierszType[];
}

interface FakturaTypeFaTypeZamowienieTypeZamowienieWierszType extends BaseType {
	/** Symbol Nomenklatury Scalonej */
	CNZ?: string;
	/** Pole przeznaczone do wpisania przez sprzedawcę dodatkowych danych, które nie zostały uwzględnione w elementach struktury i nie są wymagane przepisami, a które mogą znaleźć się na fakturze */
	DodatkoweInfoZ?: string;
	/** Globalny numer jednostki handlowej */
	GTINZ?: string;
	/** Oznaczenie dotyczące dostawy towarów i świadczenia usług */
	GTUZ?: TGTU;
	/** Kurs waluty stosowany do wyliczenia kwoty podatku w przypadkach, o których mowa w art. 31a ustawy. Dla faktur zaliczkowych należy podać kurs identyczny dla wszystkich towarów i usług */
	KursWalutyZ?: number;
	/** Kwota podatku akcyzowego zawarta w cenie towaru */
	KwotaAkcyzyZ?: number;
	/** Kolejny numer wiersza zamówienia lub umowy */
	NrWierszaZam: number;
	/** Wartość zamówionego towaru lub usługi bez kwoty podatku */
	P_11NettoZ?: number;
	/** Kwota podatku od zamówionego towaru lub usługi */
	P_11VatZ?: number;
	/** Stawka podatku */
	P_12Z?: TStawkaPodatku;
	/** Wskazanie procedury dla wiersza zamówienia */
	P_12Z_Procedura?: TProceduraZamowienie;
	/** Stawka podatku od wartości dodanej w przypadku, o którym mowa w dziale XII w rozdziale 6a ustawy */
	P_12Z_XII?: number;
	/** Nazwa (rodzaj) towaru lub usługi */
	P_7Z?: string;
	/** Miara zamówionego towaru lub zakres usługi */
	P_8AZ?: string;
	/** Ilość zamówionego towaru lub zakres usługi */
	P_8BZ?: number;
	/** Cena jednostkowa netto */
	P_9AZ?: number;
	/** Symbol Polskiej Klasyfikacji Obiektów Budowlanych */
	PKOBZ?: string;
	/** Symbol Polskiej Klasyfikacji Wyrobów i Usług */
	PKWiUZ?: string;
	/** Oznaczenia dotyczące procedur */
	ProceduraZ?: TOznaczenieProceduryZ;
	/** Uniwersalny unikalny numer wiersza zamówienia lub umowy */
	UU_IDZ?: string;
}

interface FakturaTypePodmiot1Type extends BaseType {
	/** Adres podatnika */
	Adres: TAdres;
	/** Adres korespondencyjny podatnika */
	AdresKoresp?: TAdres;
	/** Dane identyfikujące podatnika */
	DaneIdentyfikacyjne: TPodmiot1;
	/** Adres e-mail podatnika */
	Email?: string;
	/** Numer EORI podatnika (sprzedawcy) */
	NrEORI?: string;
	/** Kod (prefiks) podatnika VAT UE dla przypadków określonych w art. 97 ust. 10 pkt 2 i 3 ustawy oraz w przypadku, o którym mowa w art. 136 ust. 1 pkt 3 ustawy */
	PrefiksPodatnika?: TKodyKrajowUE;
	/** Status podatnika */
	StatusInfoPodatnika?: TStatusInfoPodatnika;
	/** Numer telefonu podatnika */
	Telefon?: string[];
}

interface FakturaTypePodmiot2Type extends BaseType {
	/** Adres nabywcy. Pola opcjonalne dla przypadków określonych w art. 106e ust. 5 pkt 3 ustawy */
	Adres?: TAdres;
	/** Adres korespondencyjny nabywcy */
	AdresKoresp?: TAdres;
	/** Dane identyfikujące nabywcę */
	DaneIdentyfikacyjne: TPodmiot;
	/** Adres e-mail nabywcy */
	Email?: string;
	/** Numer EORI nabywcy towarów */
	NrEORI?: string;
	/** Numer klienta dla przypadków, w których nabywca posługuje się nim w umowie lub zamówieniu */
	NrKlienta?: string;
	/** Kod (prefiks) nabywcy VAT UE, o którym mowa w art. 106e ust. 1 pkt 24 ustawy oraz w przypadku, o którym mowa w art. 136 ust. 1 pkt 4 ustawy */
	PrefiksNabywcy?: TKodyKrajowUE;
	/** Numer telefonu nabywcy */
	Telefon?: string[];
}

interface FakturaTypePodmiot3Type extends BaseType {
	/** Adres podmiotu trzeciego */
	Adres: TAdres;
	/** Adres korespondencyjny podmiotu trzeciego */
	AdresKoresp?: TAdres;
	/** Dane identyfikujące podmiot trzeci */
	DaneIdentyfikacyjne: TPodmiot;
	/** Adres e-mail podmiotu trzeciego */
	Email?: string;
	/** Numer EORI nabywcy towarów */
	NrEORI?: string;
	/** Numer klienta dla przypadków, w których podmiot wymieniony jako podmiot trzeci posługuje się nim w umowie lub zamówieniu */
	NrKlienta?: string;
	/** Opis roli podmiotu - w przypadku wyboru roli jako Inny podmiot */
	OpisRoli: string;
	/** Rola podmiotu */
	Rola: TRolaPodmiotu3;
	/** Znacznik innego podmiotu: 1 - Inny podmiot */
	RolaInna: etd.TWybor1;
	/** Numer telefonu podmiotu trzeciego */
	Telefon?: string[];
	/** Udział - procentowy udział dodatkowego nabywcy. Udziałem nabywcy wymienionego w sekcji Podmiot2 jest wówczas dopełnienie do 100% sumy udziałów dodatkowych nabywców. W przypadku niewypełnienia pola przyjmuje się, że udziały występujących w fakturze nabywców są równe */
	Udzial?: number;
}

interface FakturaTypePodmiotUpowaznionyType extends BaseType {
	/** Adres podmiotu upoważnionego */
	Adres: TAdres;
	/** Adres korespondencyjny podmiotu upoważnionego */
	AdresKoresp?: TAdres;
	/** Dane identyfikujące podmiotu upoważnionego */
	DaneIdentyfikacyjne: TPodmiot;
	/** Adres e-mail podmiotu upoważnionego */
	EmailPU?: string;
	/** Numer EORI podmiotu upoważnionego */
	NrEORI?: string;
	/** Rola podmiotu upoważnionego */
	RolaPU: TRolaPodmiotuUpowaznionego;
	/** Numer telefonu podmiotu upoważnionego */
	TelefonPU?: string[];
}

interface FakturaTypeStopkaType extends BaseType {
	/** Pozostałe informacje */
	Informacje?: FakturaTypeStopkaTypeInformacjeType[];
	/** Numery podmiotu lub grupy podmiotów w innych rejestrach i bazach danych */
	Rejestry?: FakturaTypeStopkaTypeRejestryType[];
}

interface FakturaTypeStopkaTypeInformacjeType extends BaseType {
	/** Stopka faktury */
	StopkaFaktury?: string;
}

interface FakturaTypeStopkaTypeRejestryType extends BaseType {
	/** Numer w Bazie Danych o Odpadach */
	BDO?: string;
	/** Numer Krajowego Rejestru Sądowego */
	KRS?: string;
	/** Pełna nazwa */
	PelnaNazwa?: string;
	/** REGON */
	REGON?: string;
}

type FakturaTypeStopkaTypeRejestryTypeBDOType = string;
type _FakturaTypeStopkaTypeRejestryTypeBDOType = _TZnakowy;

/** Kod SWIFT */
export type SWIFT_Type = string;
type _SWIFT_Type = Primitive._string;

/** Informacje opisujące adres */
interface TAdres extends BaseType {
	AdresPol: TAdresPolski;
	AdresZagr: TAdresZagraniczny;
}
export var TAdres: { new(): TAdres };

/** Informacje opisujące adres polski */
interface TAdresPolski extends BaseType {
	/** Globalny Numer Lokalizacyjny [Global Location Number] */
	GLN?: string;
	/** Gmina */
	Gmina?: string;
	/** Kraj */
	KodKraju: etd.TKodKraju;
	/** Kod pocztowy */
	KodPocztowy: string;
	/** Nazwa miejscowości */
	Miejscowosc: string;
	/** Numer budynku */
	NrDomu: string;
	/** Numer lokalu */
	NrLokalu?: string;
	/** Nazwa urzędu pocztowego */
	Poczta?: string;
	/** Powiat */
	Powiat?: string;
	/** Nazwa ulicy */
	Ulica?: string;
	/** Województwo */
	Wojewodztwo?: string;
}
export var TAdresPolski: { new(): TAdresPolski };

/** Informacje opisujące adres zagraniczny */
interface TAdresZagraniczny extends BaseType {
	/** Globalny Numer Lokalizacyjny [Global Location Number] */
	GLN?: string;
	/** Kod Kraju [Country Code] */
	KodKraju: string;
	/** Kod pocztowy [Postal code] */
	KodPocztowy?: string;
	/** Nazwa miejscowości [City] */
	Miejscowosc: string;
	/** Numer budynku [Building number] */
	NrDomu?: string;
	/** Numer lokalu [Flat number] */
	NrLokalu?: string;
	/** Nazwa ulicy [Street] */
	Ulica?: string;
}
export var TAdresZagraniczny: { new(): TAdresZagraniczny };

type TAdresZagranicznyKodKrajuType = string;
type _TAdresZagranicznyKodKrajuType = etd._TKodKraju;

/** Data transakcji lub zdarzenia w okresie od 2016-07-01 do 2050-01-01 */
export type TData = Date;
type _TData = etd._TData;

/** Data i czas zdarzenia w okresie od 01.10.2021T00:00:00Z do 01.01.2050T23:59:59Z */
export type TDataCzas = Date;
type _TDataCzas = etd._TDataCzas;

/** Data transakcji lub zdarzenia w okresie od 2006-01-01 do 2050-01-01 */
export type TDataT = Date;
type _TDataT = etd._TData;

/** Typy form płatności */
export type TFormaPlatnosci = (1 | 2 | 3 | 4 | 5 | 6 | 7);
interface _TFormaPlatnosci extends Primitive._number { content: TFormaPlatnosci; }

/** Typ Globalnego Numeru Lokalizacyjnego */
export type TGLN = string;
type _TGLN = Primitive._string;

/** Oznaczenie dotyczące dostawy towarów i świadczenia usług */
export type TGTU = ("GTU_01" | "GTU_02" | "GTU_03" | "GTU_04" | "GTU_05" | "GTU_06" | "GTU_07" | "GTU_08" | "GTU_09" | "GTU_10" | "GTU_11" | "GTU_12" | "GTU_13");
interface _TGTU extends _TZnakowy { content: TGTU; }

/** Wykorzystywany do określenia ilości. Wartość numeryczna 22 znaki max, w tym 6 po przecinku. */
export type TIlosci = number;
type _TIlosci = Primitive._number;

/** Typ złożony, klucz-wartość */
interface TKluczWartosc extends BaseType {
	/** Klucz */
	Klucz: string;
	/** Wartość */
	Wartosc: string;
}
export var TKluczWartosc: { new(): TKluczWartosc };

/** Symbol wzoru formularza */
export type TKodFormularza = "FA";
interface _TKodFormularza extends Primitive._string { content: TKodFormularza; }

/** Kod pocztowy polski */
export type TKodPocztowyPL = string;
type _TKodPocztowyPL = etd._TKodPocztowy;

/** Słownik kodów walut */
export type TKodWaluty = ("AED" | "AFN" | "ALL" | "AMD" | "ANG" | "AOA" | "ARS" | "AUD" | "AWG" | "AZN" | "BAM" | "BBD" | "BDT" | "BGN" | "BHD" | "BIF" | "BMD" | "BND" | "BOB" | "BOV" | "BRL" | "BSD" | "BTN" | "BWP" | "BYN" | "BZD" | "CAD" | "CDF" | "CHE" | "CHF" | "CHW" | "CLF" | "CLP" | "CNY" | "COP" | "COU" | "CRC" | "CUC" | "CUP" | "CVE" | "CZK" | "DJF" | "DKK" | "DOP" | "DZD" | "EGP" | "ERN" | "ETB" | "EUR" | "FJD" | "FKP" | "GBP" | "GEL" | "GGP" | "GHS" | "GIP" | "GMD" | "GNF" | "GTQ" | "GYD" | "HKD" | "HNL" | "HRK" | "HTG" | "HUF" | "IDR" | "ILS" | "IMP" | "INR" | "IQD" | "IRR" | "ISK" | "JEP" | "JMD" | "JOD" | "JPY" | "KES" | "KGS" | "KHR" | "KMF" | "KPW" | "KRW" | "KWD" | "KYD" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "LSL" | "LYD" | "MAD" | "MDL" | "MGA" | "MKD" | "MMK" | "MNT" | "MOP" | "MRU" | "MUR" | "MVR" | "MWK" | "MXN" | "MXV" | "MYR" | "MZN" | "NAD" | "NGN" | "NIO" | "NOK" | "NPR" | "NZD" | "OMR" | "PAB" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "PYG" | "QAR" | "RON" | "RSD" | "RUB" | "RWF" | "SAR" | "SBD" | "SCR" | "SDG" | "SEK" | "SGD" | "SHP" | "SLL" | "SOS" | "SRD" | "SSP" | "STN" | "SVC" | "SYP" | "SZL" | "THB" | "TJS" | "TMT" | "TND" | "TOP" | "TRY" | "TTD" | "TWD" | "TZS" | "UAH" | "UGX" | "USD" | "USN" | "UYI" | "UYU" | "UYW" | "UZS" | "VES" | "VND" | "VUV" | "WST" | "XAF" | "XAG" | "XAU" | "XBA" | "XBB" | "XBC" | "XBD" | "XCD" | "XDR" | "XOF" | "XPD" | "XPF" | "XPT" | "XSU" | "XUA" | "XXX" | "YER" | "ZAR" | "ZMW" | "ZWL");
interface _TKodWaluty extends Primitive._string { content: TKodWaluty; }

/** Kody krajów członkowskich Unii Europejskiej, w tym kod dla obszaru Irlandii Północnej */
export type TKodyKrajowUE = ("AT" | "BE" | "BG" | "CY" | "CZ" | "DK" | "EE" | "FI" | "FR" | "DE" | "EL" | "HR" | "HU" | "IE" | "IT" | "LV" | "LT" | "LU" | "MT" | "NL" | "PL" | "PT" | "RO" | "SK" | "SI" | "ES" | "SE" | "XI");
interface _TKodyKrajowUE extends Primitive._string { content: TKodyKrajowUE; }

/** Wartość numeryczna 18 znaków max, w tym 2 znaki po przecinku */
export type TKwotowy = number;
type _TKwotowy = Primitive._number;

/** Typy ładunków */
export type TLadunek = (1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20);
interface _TLadunek extends Primitive._number { content: TLadunek; }

/** Nagłówek */
interface TNaglowek extends BaseType {
	/** Data i czas wytworzenia faktury */
	DataWytworzeniaFa: Date;
	KodFormularza: TNaglowekKodFormularzaType;
	/** Nazwa systemu teleinformatycznego, z którego korzysta podatnik */
	SystemInfo?: string;
	WariantFormularza: TNaglowekWariantFormularzaType;
}
export var TNaglowek: { new(): TNaglowek };

type TNaglowekDataWytworzeniaFaType = Date;
type _TNaglowekDataWytworzeniaFaType = etd._TDataCzas;

interface TNaglowekKodFormularzaType extends _TKodFormularza {
	kodSystemowy: string;
	wersjaSchemy: string;
}

type TNaglowekWariantFormularzaType = 1;
interface _TNaglowekWariantFormularzaType extends Primitive._number { content: TNaglowekWariantFormularzaType; }

/** Liczby naturalne większe od zera */
export type TNaturalny = number;
type _TNaturalny = etd._TNaturalny;

/** Numer NRB */
export type TNrNRB = string;
type _TNrNRB = Primitive._string;

/** Numer zagranicznego rachunku bankowego */
export type TNrRBZagr = string;
type _TNrRBZagr = Primitive._string;

/** Numer identyfikujący fakturę w Krajowym Systemie e-Faktur (KSeF) */
export type TNumerKSeF = string;
type _TNumerKSeF = Primitive._string;

/** Numer telefonu */
export type TNumerTelefonu = string;
type _TNumerTelefonu = _TZnakowy;

/** Oznaczenia dotyczące procedur dla faktur */
export type TOznaczenieProcedury = ("WSTO_EE" | "IED" | "TT_D" | "I_42" | "I_63" | "B_SPV" | "B_SPV_DOSTAWA" | "B_MPV_PROWIZJA");
interface _TOznaczenieProcedury extends _TZnakowy { content: TOznaczenieProcedury; }

/** Oznaczenia dotyczące procedur dla zamówień */
export type TOznaczenieProceduryZ = ("WSTO_EE" | "IED" | "TT_D" | "B_SPV" | "B_SPV_DOSTAWA" | "B_MPV_PROWIZJA");
interface _TOznaczenieProceduryZ extends _TZnakowy { content: TOznaczenieProceduryZ; }

/** Zestaw danych identyfikacyjnych oraz danych adresowych nabywcy i podmiotów trzecich */
interface TPodmiot extends BaseType {
	/** Podmiot nie posiada identyfikatora podatkowego: 1- tak */
	BrakID: etd.TWybor1;
	/** Pierwsze imię */
	ImiePierwsze?: string;
	/** Nazwa handlowa */
	NazwaHandlowa?: string;
	/** Nazwisko */
	Nazwisko?: string;
	/** Identyfikator podatkowy NIP */
	NIP: string;
	/** Identyfikator podatkowy inny */
	NrID: string;
	/** Pełna nazwa */
	PelnaNazwa?: string;
}
export var TPodmiot: { new(): TPodmiot };

/** Zestaw danych identyfikacyjnych oraz danych adresowych podatnika */
interface TPodmiot1 extends BaseType {
	/** Pierwsze imię */
	ImiePierwsze: string;
	/** Nazwa handlowa */
	NazwaHandlowa?: string;
	/** Nazwisko */
	Nazwisko: string;
	/** Identyfikator podatkowy NIP */
	NIP: string;
	/** Pełna nazwa */
	PelnaNazwa: string;
}
export var TPodmiot1: { new(): TPodmiot1 };

/** Wskazanie procedury dla wiersza faktury */
export type TProceduraFa = (1 | 2 | 3 | 4 | 5 | 6 | 7);
interface _TProceduraFa extends Primitive._number { content: TProceduraFa; }

/** Wskazanie procedury dla wiersza zamówienia */
export type TProceduraZamowienie = (1 | 3 | 4 | 5 | 6 | 7);
interface _TProceduraZamowienie extends Primitive._number { content: TProceduraZamowienie; }

/** Wartość procentowa z dokładnością do 6 miejsc po przecinku */
export type TProcentowy = number;
type _TProcentowy = Primitive._number;

/** Informacje o rachunku bankowym */
interface TRachunekBankowy extends BaseType {
	/** Nazwa banku */
	NazwaBanku?: string;
	/** Pełny numer rachunku w standardzie NRB */
	NrRBPL: string;
	/** Pełny numer rachunku zagranicznego */
	NrRBZagr: string;
	/** Rachunek własny banku */
	RachunekWlasnyBanku?: TRachunekWlasnyBanku;
	/** Kod SWIFT */
	SWIFT: string;
}
export var TRachunekBankowy: { new(): TRachunekBankowy };

/** Typy rachunków własnych banku */
export type TRachunekWlasnyBanku = (1 | 2 | 3);
interface _TRachunekWlasnyBanku extends Primitive._number { content: TRachunekWlasnyBanku; }

/** Rodzaj faktury */
export type TRodzajFaktury = ("VAT" | "KOR" | "ZAL" | "ROZ" | "UPR" | "KOR_ZAL" | "KOR_ROZ");
interface _TRodzajFaktury extends _TZnakowy { content: TRodzajFaktury; }

/** Rodzaj transportu */
export type TRodzajTransportu = (1 | 2 | 3 | 4 | 5 | 7 | 8);
interface _TRodzajTransportu extends Primitive._number { content: TRodzajTransportu; }

/** Rola podmiotu trzeciego */
export type TRolaPodmiotu3 = (1 | 2 | 3 | 4 | 5 | 6);
interface _TRolaPodmiotu3 extends Primitive._number { content: TRolaPodmiotu3; }

/** Rola podmiotu upoważnionego */
export type TRolaPodmiotuUpowaznionego = (1 | 2 | 3);
interface _TRolaPodmiotuUpowaznionego extends Primitive._number { content: TRolaPodmiotuUpowaznionego; }

/** Status podatnika */
export type TStatusInfoPodatnika = (1 | 2 | 3 | 4);
interface _TStatusInfoPodatnika extends Primitive._number { content: TStatusInfoPodatnika; }

/** Stawka podatku */
export type TStawkaPodatku = ("23" | "22" | "8" | "7" | "5" | "4" | "3" | "0" | "zw" | "oo" | "np");
interface _TStawkaPodatku extends _TZnakowy { content: TStawkaPodatku; }

/** Typ skutku korekty w ewidencji */
export type TTypKorekty = (1 | 2 | 3);
interface _TTypKorekty extends Primitive._number { content: TTypKorekty; }

/** Typ znakowy ograniczony do 256 znaków */
export type TZnakowy = string;
type _TZnakowy = Primitive._string;

/** Typ znakowy ograniczony do 20 znaków */
export type TZnakowy20 = string;
type _TZnakowy20 = Primitive._string;

/** Typ znakowy ograniczony do 50 znaków */
export type TZnakowy50 = string;
type _TZnakowy50 = Primitive._string;

export interface document extends BaseType {
	/** Faktura VAT */
	Faktura: FakturaType;
}
export var document: document;
