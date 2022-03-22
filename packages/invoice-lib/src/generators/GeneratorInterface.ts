import { FakturaType } from "@devorgpl/ksef-model-lib/xmlns/crd.gov.pl/wzor/2021/11/29/11089";

export interface GeneratorInterface {
    generate(invoice: FakturaType): string;
}