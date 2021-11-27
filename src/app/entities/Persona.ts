import { Recapito } from "./Recapito";

export interface Persona{
    id?: number;
    nome: string;
    cognome : string;
    recapito : Recapito;
}