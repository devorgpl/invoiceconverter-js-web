import * as Primitive from "../../../../../../../../../xml-primitives";

// Source files:
// http://crd.gov.pl/wps/PA_E2_PI/zalacznik_oi/zalacznik_oi_2348
// http://crd.gov.pl/wps/PA_E2_PI/zalacznik_oi/zalacznik_oi_2360
// http://crd.gov.pl/wps/PA_E2_PI/zalacznik_oi/zalacznik_oi_2372


interface BaseType {
	_exists?: boolean;
	_namespace?: string;
}
/** Dane określające adres */
interface TAdres extends BaseType {
	AdresPol: TAdresPolski;
	AdresZagr: TAdresZagraniczny;
}
export var TAdres: { new(): TAdres };

/** Dane określające adres - bez elementu Poczta w adresie polskim */
interface TAdres1 extends BaseType {
	AdresPol: TAdresPolski1;
	AdresZagr: TAdresZagraniczny;
}
export var TAdres1: { new(): TAdres1 };

/** Adres e-mail */
export type TAdresEmail = string;
type _TAdresEmail = Primitive._string;

/** Informacje opisujące adres polski */
interface TAdresPolski extends BaseType {
	/** Gmina */
	Gmina: string;
	/** Kraj */
	KodKraju: TKodKraju;
	/** Kod pocztowy */
	KodPocztowy: string;
	/** Nazwa miejscowości */
	Miejscowosc: string;
	/** Numer budynku */
	NrDomu: string;
	/** Numer lokalu */
	NrLokalu?: string;
	/** Nazwa urzędu pocztowego */
	Poczta: string;
	/** Powiat */
	Powiat: string;
	/** Nazwa ulicy */
	Ulica?: string;
	/** Województwo */
	Wojewodztwo: string;
}
export var TAdresPolski: { new(): TAdresPolski };

/** Informacje opisujące adres polski - bez elementu Poczta */
interface TAdresPolski1 extends BaseType {
	/** Gmina */
	Gmina: string;
	/** Kraj */
	KodKraju: TKodKraju;
	/** Kod pocztowy */
	KodPocztowy: string;
	/** Nazwa miejscowości */
	Miejscowosc: string;
	/** Numer budynku */
	NrDomu: string;
	/** Numer lokalu */
	NrLokalu?: string;
	/** Powiat */
	Powiat: string;
	/** Nazwa ulicy */
	Ulica?: string;
	/** Województwo */
	Wojewodztwo: string;
}
export var TAdresPolski1: { new(): TAdresPolski1 };

/** Informacje opisujące adres zagraniczny */
interface TAdresZagraniczny extends BaseType {
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
type _TAdresZagranicznyKodKrajuType = _TKodKraju;

/** Liczby naturalne */
export type TCalkowity = number;
type _TCalkowity = Primitive._number;

/** Określa, czy to jest złożenie, czy korekta dokumentu */
export type TCelZlozenia = (1 | 2);
interface _TCelZlozenia extends Primitive._number { content: TCelZlozenia; }

/** Typ daty */
export type TData = Date;
type _TData = Primitive._Date;

/** Typ daty i godziny */
export type TDataCzas = Date;
type _TDataCzas = Primitive._Date;

/** Podstawowy zestaw danych identyfikacyjnych o osobie fizycznej */
interface TIdentyfikatorOsobyFizycznej extends BaseType {
	/** Data urodzenia */
	DataUrodzenia: Date;
	/** Pierwsze imię */
	ImiePierwsze: string;
	/** Nazwisko */
	Nazwisko: string;
	/** Identyfikator podatkowy NIP */
	NIP: string;
	/** Identyfikator podatkowy numer PESEL */
	PESEL?: string;
}
export var TIdentyfikatorOsobyFizycznej: { new(): TIdentyfikatorOsobyFizycznej };

/** Podstawowy zestaw danych identyfikacyjnych o osobie fizycznej z identyfikatorem NIP albo PESEL */
interface TIdentyfikatorOsobyFizycznej1 extends BaseType {
	/** Data urodzenia */
	DataUrodzenia: Date;
	/** Pierwsze imię */
	ImiePierwsze: string;
	/** Nazwisko */
	Nazwisko: string;
	/** Identyfikator podatkowy NIP */
	NIP: string;
	/** Identyfikator podatkowy numer PESEL */
	PESEL: string;
}
export var TIdentyfikatorOsobyFizycznej1: { new(): TIdentyfikatorOsobyFizycznej1 };

/** Podstawowy zestaw danych identyfikacyjnych o osobie fizycznej z identyfikatorem NIP */
interface TIdentyfikatorOsobyFizycznej2 extends BaseType {
	/** Data urodzenia */
	DataUrodzenia: Date;
	/** Pierwsze imię */
	ImiePierwsze: string;
	/** Nazwisko */
	Nazwisko: string;
	/** Identyfikator podatkowy NIP */
	NIP: string;
}
export var TIdentyfikatorOsobyFizycznej2: { new(): TIdentyfikatorOsobyFizycznej2 };

/** Pełny zestaw danych identyfikacyjnych o osobie fizycznej */
interface TIdentyfikatorOsobyFizycznejPelny extends BaseType {
	/** Data urodzenia */
	DataUrodzenia: Date;
	/** Imię matki */
	ImieMatki: string;
	/** Imię ojca */
	ImieOjca: string;
	/** Pierwsze imię */
	ImiePierwsze: string;
	/** Nazwisko */
	Nazwisko: string;
	/** Identyfikator podatkowy NIP */
	NIP?: string;
	/** Identyfikator podatkowy numer PESEL */
	PESEL: string;
}
export var TIdentyfikatorOsobyFizycznejPelny: { new(): TIdentyfikatorOsobyFizycznejPelny };

/** Zestaw danych identyfikacyjnych dla osoby fizycznej zagranicznej */
interface TIdentyfikatorOsobyFizycznejZagranicznej extends BaseType {
	/** Data urodzenia [Date of Birth] */
	DataUrodzenia: Date;
	/** Imię matki [Mother’s name] */
	ImieMatki?: string;
	/** Imię ojca [Father’s name] */
	ImieOjca?: string;
	/** Imię pierwsze [First name] */
	ImiePierwsze: string;
	/** Miejsce urodzenia [Place of Birth] */
	MiejsceUrodzenia: string;
	/** Nazwisko [Family name] */
	Nazwisko: string;
	/** Identyfikator podatkowy NIP [Tax Identification Number (NIP)] */
	NIP?: string;
}
export var TIdentyfikatorOsobyFizycznejZagranicznej: { new(): TIdentyfikatorOsobyFizycznejZagranicznej };

/** Podstawowy zestaw danych identyfikacyjnych o osobie niefizycznej */
interface TIdentyfikatorOsobyNiefizycznej extends BaseType {
	/** Identyfikator podatkowy NIP */
	NIP: string;
	/** Pełna nazwa */
	PelnaNazwa: string;
	/** Numer REGON */
	REGON?: string;
}
export var TIdentyfikatorOsobyNiefizycznej: { new(): TIdentyfikatorOsobyNiefizycznej };

/** Podstawowy zestaw danych identyfikacyjnych o osobie niefizycznej  - bez elementu Numer REGON */
interface TIdentyfikatorOsobyNiefizycznej1 extends BaseType {
	/** Identyfikator podatkowy NIP */
	NIP: string;
	/** Pełna nazwa */
	PelnaNazwa: string;
}
export var TIdentyfikatorOsobyNiefizycznej1: { new(): TIdentyfikatorOsobyNiefizycznej1 };

type TIdentyfikatorOsobyNiefizycznej1PelnaNazwaType = string;
type _TIdentyfikatorOsobyNiefizycznej1PelnaNazwaType = Primitive._string;

type TIdentyfikatorOsobyNiefizycznejPelnaNazwaType = string;
type _TIdentyfikatorOsobyNiefizycznejPelnaNazwaType = Primitive._string;

/** Pełny zestaw danych identyfikacyjnych o osobie niefizycznej */
interface TIdentyfikatorOsobyNiefizycznejPelny extends BaseType {
	/** Identyfikator podatkowy NIP */
	NIP?: string;
	/** Pełna nazwa */
	PelnaNazwa: string;
	/** Numer REGON */
	REGON: string;
	/** Skrócona nazwa */
	SkroconaNazwa: string;
}
export var TIdentyfikatorOsobyNiefizycznejPelny: { new(): TIdentyfikatorOsobyNiefizycznejPelny };

type TIdentyfikatorOsobyNiefizycznejPelnyPelnaNazwaType = string;
type _TIdentyfikatorOsobyNiefizycznejPelnyPelnaNazwaType = Primitive._string;

type TIdentyfikatorOsobyNiefizycznejPelnySkroconaNazwaType = string;
type _TIdentyfikatorOsobyNiefizycznejPelnySkroconaNazwaType = Primitive._string;

/** Zestaw danych identyfikacyjnych dla osoby niefizycznej zagranicznej */
interface TIdentyfikatorOsobyNiefizycznejZagranicznej extends BaseType {
	/** Identyfikator podatkowy NIP [Tax Identification Number (NIP)] */
	NIP?: string;
	/** Pełna nazwa [Name] */
	PelnaNazwa: string;
	/** Nazwa skrócona [Short Name] */
	SkroconaNazwa?: string;
}
export var TIdentyfikatorOsobyNiefizycznejZagranicznej: { new(): TIdentyfikatorOsobyNiefizycznejZagranicznej };

type TIdentyfikatorOsobyNiefizycznejZagranicznejPelnaNazwaType = string;
type _TIdentyfikatorOsobyNiefizycznejZagranicznejPelnaNazwaType = Primitive._string;

type TIdentyfikatorOsobyNiefizycznejZagranicznejSkroconaNazwaType = string;
type _TIdentyfikatorOsobyNiefizycznejZagranicznejSkroconaNazwaType = Primitive._string;

/** Pierwsze imię */
export type TImie = string;
type _TImie = Primitive._string;

/** Typ określający nazwę województwa, nazwę powiatu lub nazwę gminy */
export type TJednAdmin = string;
type _TJednAdmin = Primitive._string;

/** Słownik kodów krajów */
export type TKodKraju = ("AF" | "AX" | "AL" | "DZ" | "AD" | "AO" | "AI" | "AQ" | "AG" | "AN" | "SA" | "AR" | "AM" | "AW" | "AU" | "AT" | "AZ" | "BS" | "BH" | "BD" | "BB" | "BE" | "BZ" | "BJ" | "BM" | "BT" | "BY" | "BO" | "BQ" | "BA" | "BW" | "BR" | "BN" | "IO" | "BG" | "BF" | "BI" | "XC" | "CL" | "CN" | "HR" | "CW" | "CY" | "TD" | "ME" | "DK" | "DM" | "DO" | "DJ" | "EG" | "EC" | "ER" | "EE" | "ET" | "FK" | "FJ" | "PH" | "FI" | "FR" | "TF" | "GA" | "GM" | "GH" | "GI" | "GR" | "GD" | "GL" | "GE" | "GU" | "GG" | "GY" | "GF" | "GP" | "GT" | "GN" | "GQ" | "GW" | "HT" | "ES" | "HN" | "HK" | "IN" | "ID" | "IQ" | "IR" | "IE" | "IS" | "IL" | "JM" | "JP" | "YE" | "JE" | "JO" | "KY" | "KH" | "CM" | "CA" | "QA" | "KZ" | "KE" | "KG" | "KI" | "CO" | "KM" | "CG" | "CD" | "KP" | "XK" | "CR" | "CU" | "KW" | "LA" | "LS" | "LB" | "LR" | "LY" | "LI" | "LT" | "LV" | "LU" | "MK" | "MG" | "YT" | "MO" | "MW" | "MV" | "MY" | "ML" | "MT" | "MP" | "MA" | "MQ" | "MR" | "MU" | "MX" | "XL" | "FM" | "UM" | "MD" | "MC" | "MN" | "MS" | "MZ" | "MM" | "NA" | "NR" | "NP" | "NL" | "DE" | "NE" | "NG" | "NI" | "NU" | "NF" | "NO" | "NC" | "NZ" | "PS" | "OM" | "PK" | "PW" | "PA" | "PG" | "PY" | "PE" | "PN" | "PF" | "PL" | "GS" | "PT" | "PR" | "CF" | "CZ" | "KR" | "ZA" | "RE" | "RU" | "RO" | "RW" | "EH" | "BL" | "KN" | "LC" | "MF" | "VC" | "SV" | "WS" | "AS" | "SM" | "SN" | "RS" | "SC" | "SL" | "SG" | "SK" | "SI" | "SO" | "LK" | "PM" | "US" | "SZ" | "SD" | "SS" | "SR" | "SJ" | "SH" | "SY" | "CH" | "SE" | "TJ" | "TH" | "TW" | "TZ" | "TG" | "TK" | "TO" | "TT" | "TN" | "TR" | "TM" | "TV" | "UG" | "UA" | "UY" | "UZ" | "VU" | "WF" | "VA" | "HU" | "VE" | "GB" | "VN" | "IT" | "TL" | "CI" | "BV" | "CX" | "IM" | "SX" | "CK" | "VI" | "VG" | "HM" | "CC" | "MH" | "FO" | "SB" | "ST" | "TC" | "ZM" | "CV" | "ZW" | "AE" | "XI");
interface _TKodKraju extends Primitive._string { content: TKodKraju; }

/** Kod kraju urodzenia */
export type TKodKrajuUrodzenia = string;
type _TKodKrajuUrodzenia = Primitive._string;

/** Kod kraju wydania numeru identyfikacyjnego */
export type TKodKrajuWydania = string;
type _TKodKrajuWydania = _TKodKraju;

/** Kod pocztowy */
export type TKodPocztowy = string;
type _TKodPocztowy = _TZnakowy;

/** Element będący numerem kwartału */
export type TKwartal = number;
type _TKwartal = Primitive._number;

/** Wartość kwotowa wykazana w zł i gr */
export type TKwota2 = number;
type _TKwota2 = Primitive._number;

/** Wartość kwotowa nieujemna wykazana w zł i gr */
export type TKwota2Nieujemna = number;
type _TKwota2Nieujemna = _TKwota2;

/** Wartość kwotowa wykazana w zł */
export type TKwotaC = number;
type _TKwotaC = Primitive._number;

/** Wartość kwotowa nieujemna wykazana w zł */
export type TKwotaCNieujemna = number;
type _TKwotaCNieujemna = _TKwotaC;

/** Typ określający nazwę miejscowości */
export type TMiejscowosc = string;
type _TMiejscowosc = Primitive._string;

/** Element będący numerem miesiąca */
export type TMiesiac = number;
type _TMiesiac = Primitive._number;

/** Liczby naturalne */
export type TNaturalny = number;
type _TNaturalny = Primitive._number;

/** Nazwisko */
export type TNazwisko = string;
type _TNazwisko = Primitive._string;

/** Numer akcyzowy */
export type TNrAKC = string;
type _TNrAKC = Primitive._string;

/** Numer budynku */
export type TNrBudynku = string;
type _TNrBudynku = _TZnakowy;

/** Numer dokumentu */
export type TNrDokumentu = string;
type _TNrDokumentu = _TZnakowy;

/** Numer dokumentu stwierdzającego tożsamość */
export type TNrDokumentuStwierdzajacegoTozsamosc = string;
type _TNrDokumentuStwierdzajacegoTozsamosc = Primitive._string;

/** Numer służący identyfikacji dla celów podatkowych */
export type TNrIdentyfikacjiPodatkowej = string;
type _TNrIdentyfikacjiPodatkowej = Primitive._string;

/** Numer Krajowego Rejestru Sądowego */
export type TNrKRS = string;
type _TNrKRS = Primitive._string;

/** Numer lokalu */
export type TNrLokalu = string;
type _TNrLokalu = _TZnakowy;

/** Identyfikator podatkowy NIP */
export type TNrNIP = string;
type _TNrNIP = Primitive._string;

/** Identyfikator podatkowy numer PESEL */
export type TNrPESEL = string;
type _TNrPESEL = Primitive._string;

/** Numer REGON */
export type TNrREGON = string;
type _TNrREGON = Primitive._string;

/** Podstawowy zestaw danych o osobie fizycznej */
interface TOsobaFizyczna extends BaseType {
	AdresZamieszkania: TOsobaFizycznaAdresZamieszkaniaType;
	OsobaFizyczna: TIdentyfikatorOsobyFizycznej;
}
export var TOsobaFizyczna: { new(): TOsobaFizyczna };

/** Podstawowy zestaw danych o osobie fizycznej z identyfikatorem NIP albo PESEL */
interface TOsobaFizyczna1 extends BaseType {
	AdresZamieszkania: TOsobaFizyczna1AdresZamieszkaniaType;
	OsobaFizyczna: TIdentyfikatorOsobyFizycznej1;
}
export var TOsobaFizyczna1: { new(): TOsobaFizyczna1 };

interface TOsobaFizyczna1AdresZamieszkaniaType extends _TAdres {
	rodzajAdresu: string;
}

/** Podstawowy zestaw danych o osobie fizycznej z identyfikatorem NIP */
interface TOsobaFizyczna2 extends BaseType {
	AdresZamieszkania: TOsobaFizyczna2AdresZamieszkaniaType;
	OsobaFizyczna: TIdentyfikatorOsobyFizycznej2;
}
export var TOsobaFizyczna2: { new(): TOsobaFizyczna2 };

interface TOsobaFizyczna2AdresZamieszkaniaType extends _TAdres {
	rodzajAdresu: string;
}

/** Podstawowy zestaw danych o osobie fizycznej z identyfikatorem NIP albo PESEL - bez elementu Poczta w adresie polskim */
interface TOsobaFizyczna3 extends BaseType {
	AdresZamieszkania: TOsobaFizyczna3AdresZamieszkaniaType;
	OsobaFizyczna: TIdentyfikatorOsobyFizycznej1;
}
export var TOsobaFizyczna3: { new(): TOsobaFizyczna3 };

interface TOsobaFizyczna3AdresZamieszkaniaType extends _TAdres1 {
	rodzajAdresu: string;
}

/** Podstawowy zestaw danych o osobie fizycznej z identyfikatorem NIP - bez elementu Poczta w adresie polskim */
interface TOsobaFizyczna4 extends BaseType {
	AdresZamieszkania: TOsobaFizyczna4AdresZamieszkaniaType;
	OsobaFizyczna: TIdentyfikatorOsobyFizycznej2;
}
export var TOsobaFizyczna4: { new(): TOsobaFizyczna4 };

interface TOsobaFizyczna4AdresZamieszkaniaType extends _TAdres1 {
	rodzajAdresu: string;
}

/** Podstawowy zestaw danych o osobie fizycznej - bez elementu Poczta w adresie polskim */
interface TOsobaFizyczna5 extends BaseType {
	AdresZamieszkania: TOsobaFizyczna5AdresZamieszkaniaType;
	OsobaFizyczna: TIdentyfikatorOsobyFizycznej;
}
export var TOsobaFizyczna5: { new(): TOsobaFizyczna5 };

interface TOsobaFizyczna5AdresZamieszkaniaType extends _TAdres1 {
	rodzajAdresu: string;
}

interface TOsobaFizycznaAdresZamieszkaniaType extends _TAdres {
	rodzajAdresu: string;
}

/** Pełny zestaw danych o osobie fizycznej */
interface TOsobaFizycznaPelna extends BaseType {
	AdresZamieszkania: TOsobaFizycznaPelnaAdresZamieszkaniaType;
	OsobaFizyczna: TIdentyfikatorOsobyFizycznejPelny;
}
export var TOsobaFizycznaPelna: { new(): TOsobaFizycznaPelna };

/** Pełny zestaw danych o osobie fizycznej - bez elementu Poczta w adresie polskim */
interface TOsobaFizycznaPelna1 extends BaseType {
	AdresZamieszkania: TOsobaFizycznaPelna1AdresZamieszkaniaType;
	OsobaFizyczna: TIdentyfikatorOsobyFizycznejPelny;
}
export var TOsobaFizycznaPelna1: { new(): TOsobaFizycznaPelna1 };

interface TOsobaFizycznaPelna1AdresZamieszkaniaType extends _TAdres1 {
	rodzajAdresu: string;
}

interface TOsobaFizycznaPelnaAdresZamieszkaniaType extends _TAdres {
	rodzajAdresu: string;
}

/** Podstawowy zestaw danych o osobie niefizycznej */
interface TOsobaNiefizyczna extends BaseType {
	AdresSiedziby: TOsobaNiefizycznaAdresSiedzibyType;
	OsobaNiefizyczna: TIdentyfikatorOsobyNiefizycznej;
}
export var TOsobaNiefizyczna: { new(): TOsobaNiefizyczna };

/** Podstawowy zestaw danych o osobie niefizycznej - bez elementu Poczta w adresie polskim */
interface TOsobaNiefizyczna1 extends BaseType {
	AdresSiedziby: TOsobaNiefizyczna1AdresSiedzibyType;
	OsobaNiefizyczna: TIdentyfikatorOsobyNiefizycznej;
}
export var TOsobaNiefizyczna1: { new(): TOsobaNiefizyczna1 };

interface TOsobaNiefizyczna1AdresSiedzibyType extends _TAdres1 {
	rodzajAdresu: string;
}

/** Podstawowy zestaw danych o osobie niefizycznej - bez elementu Numer REGON oraz bez elementu Poczta w adresie polskim */
interface TOsobaNiefizyczna2 extends BaseType {
	AdresSiedziby: TOsobaNiefizyczna2AdresSiedzibyType;
	OsobaNiefizyczna: TIdentyfikatorOsobyNiefizycznej1;
}
export var TOsobaNiefizyczna2: { new(): TOsobaNiefizyczna2 };

interface TOsobaNiefizyczna2AdresSiedzibyType extends _TAdres1 {
	rodzajAdresu: string;
}

interface TOsobaNiefizycznaAdresSiedzibyType extends _TAdres {
	rodzajAdresu: string;
}

/** Pełny zestaw danych o niefizycznej */
interface TOsobaNiefizycznaPelna extends BaseType {
	AdresSiedziby: TOsobaNiefizycznaPelnaAdresSiedzibyType;
	OsobaNiefizyczna: TIdentyfikatorOsobyNiefizycznejPelny;
}
export var TOsobaNiefizycznaPelna: { new(): TOsobaNiefizycznaPelna };

/** Pełny zestaw danych o osobie niefizycznej - bez elementu Poczta w adresie polskim */
interface TOsobaNiefizycznaPelna1 extends BaseType {
	AdresSiedziby: TOsobaNiefizycznaPelna1AdresSiedzibyType;
	OsobaNiefizyczna: TIdentyfikatorOsobyNiefizycznejPelny;
}
export var TOsobaNiefizycznaPelna1: { new(): TOsobaNiefizycznaPelna1 };

interface TOsobaNiefizycznaPelna1AdresSiedzibyType extends _TAdres1 {
	rodzajAdresu: string;
}

interface TOsobaNiefizycznaPelnaAdresSiedzibyType extends _TAdres {
	rodzajAdresu: string;
}

/** Podstawowy zestaw danych o osobie fizycznej lub niefizycznej */
interface TPodmiotDowolny extends _TPodmiotDowolnyBezAdresu {
	AdresZamieszkaniaSiedziby: TPodmiotDowolnyAdresZamieszkaniaSiedzibyType;
}
export var TPodmiotDowolny: { new(): TPodmiotDowolny };

/** Podstawowy zestaw danych o osobie fizycznej lub niefizycznej - bez elementu Poczta w adresie polskim */
interface TPodmiotDowolny1 extends _TPodmiotDowolnyBezAdresu {
	AdresZamieszkaniaSiedziby: TPodmiotDowolny1AdresZamieszkaniaSiedzibyType;
}
export var TPodmiotDowolny1: { new(): TPodmiotDowolny1 };

interface TPodmiotDowolny1AdresZamieszkaniaSiedzibyType extends _TAdres1 {
	rodzajAdresu: string;
}

/** Podstawowy zestaw danych o osobie fizycznej lub niefizycznej - bez elementu Numer REGON oraz bez elementu Poczta w adresie polskim */
interface TPodmiotDowolny2 extends _TPodmiotDowolnyBezAdresu3 {
	AdresZamieszkaniaSiedziby: TPodmiotDowolny2AdresZamieszkaniaSiedzibyType;
}
export var TPodmiotDowolny2: { new(): TPodmiotDowolny2 };

interface TPodmiotDowolny2AdresZamieszkaniaSiedzibyType extends _TAdres1 {
	rodzajAdresu: string;
}

interface TPodmiotDowolnyAdresZamieszkaniaSiedzibyType extends _TAdres {
	rodzajAdresu: string;
}

/** Skrócony zestaw danych o osobie fizycznej lub niefizycznej */
interface TPodmiotDowolnyBezAdresu extends BaseType {
	OsobaFizyczna: TIdentyfikatorOsobyFizycznej;
	OsobaNiefizyczna: TIdentyfikatorOsobyNiefizycznej;
}
export var TPodmiotDowolnyBezAdresu: { new(): TPodmiotDowolnyBezAdresu };

/** Skrócony zestaw danych o osobie fizycznej lub niefizycznej z identyfikatorem NIP albo PESEL */
interface TPodmiotDowolnyBezAdresu1 extends BaseType {
	OsobaFizyczna: TIdentyfikatorOsobyFizycznej1;
	OsobaNiefizyczna: TIdentyfikatorOsobyNiefizycznej;
}
export var TPodmiotDowolnyBezAdresu1: { new(): TPodmiotDowolnyBezAdresu1 };

/** Skrócony zestaw danych o osobie fizycznej lub niefizycznej z identyfikatorem NIP */
interface TPodmiotDowolnyBezAdresu2 extends BaseType {
	OsobaFizyczna: TIdentyfikatorOsobyFizycznej2;
	OsobaNiefizyczna: TIdentyfikatorOsobyNiefizycznej;
}
export var TPodmiotDowolnyBezAdresu2: { new(): TPodmiotDowolnyBezAdresu2 };

/** Skrócony zestaw danych o osobie fizycznej lub niefizycznej z identyfikatorem NIP - bez elementu numer REGON dla osoby niefizycznej */
interface TPodmiotDowolnyBezAdresu3 extends BaseType {
	OsobaFizyczna: TIdentyfikatorOsobyFizycznej2;
	OsobaNiefizyczna: TIdentyfikatorOsobyNiefizycznej1;
}
export var TPodmiotDowolnyBezAdresu3: { new(): TPodmiotDowolnyBezAdresu3 };

/** Pełny zestaw danych o osobie fizycznej lub niefizycznej */
interface TPodmiotDowolnyPelny extends BaseType {
	AdresZamieszkaniaSiedziby: TPodmiotDowolnyPelnyAdresZamieszkaniaSiedzibyType;
	OsobaFizyczna: TIdentyfikatorOsobyFizycznejPelny;
	OsobaNiefizyczna: TIdentyfikatorOsobyNiefizycznejPelny;
}
export var TPodmiotDowolnyPelny: { new(): TPodmiotDowolnyPelny };

/** Pełny zestaw danych o osobie fizycznej lub niefizycznej - bez elementu Poczta w adresie polskim */
interface TPodmiotDowolnyPelny1 extends BaseType {
	AdresZamieszkaniaSiedziby: TPodmiotDowolnyPelny1AdresZamieszkaniaSiedzibyType;
	OsobaFizyczna: TIdentyfikatorOsobyFizycznejPelny;
	OsobaNiefizyczna: TIdentyfikatorOsobyNiefizycznejPelny;
}
export var TPodmiotDowolnyPelny1: { new(): TPodmiotDowolnyPelny1 };

interface TPodmiotDowolnyPelny1AdresZamieszkaniaSiedzibyType extends _TAdres1 {
	rodzajAdresu: string;
}

interface TPodmiotDowolnyPelnyAdresZamieszkaniaSiedzibyType extends _TAdres {
	rodzajAdresu: string;
}

/** Wartość procentowa z dokładnością do 2 miejsc po przecinku */
export type TProcentowy = number;
type _TProcentowy = Primitive._number;

/** Oznaczenie roku */
export type TRok = string;
type _TRok = Primitive._string;

/** Liczby wykazywane z dokładnością do dwóch miejsc po przecinku */
export type TRzeczywisty = number;
type _TRzeczywisty = _TKwota2;

/** Typ znakowy ograniczony do 3500 znaków */
export type TTekstowy = string;
type _TTekstowy = Primitive._string;

/** Nazwa ulicy */
export type TUlica = string;
type _TUlica = _TZnakowy;

/** Pojedyncze pole wyboru */
export type TWybor1 = 1;
interface _TWybor1 extends Primitive._number { content: TWybor1; }

/** Podwójne pole wyboru */
export type TWybor1_2 = (1 | 2);
interface _TWybor1_2 extends Primitive._number { content: TWybor1_2; }

/** Potrójne pole wyboru */
export type TWybor1_3 = (1 | 2 | 3);
interface _TWybor1_3 extends Primitive._number { content: TWybor1_3; }

/** Typ znakowy ograniczony do jednej linii */
export type TZnakowy = string;
type _TZnakowy = Primitive._string;

export interface document extends BaseType {
}
export var document: document;
