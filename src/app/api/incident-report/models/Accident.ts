import { Injured } from "./Injured";
import { Vehicle } from "./Vehicle";
import { Address } from "./Address";

export interface Acidente {
    id?: string,
    gravidade?: string,
    enderecos?: Address[],
    veiculos?: Vehicle[],
    feridos?: Injured[]
}