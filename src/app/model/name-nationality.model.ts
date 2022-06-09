import { Country } from "./country.model";

export interface NameNationality {
    name: string;
    country: Country[];
}

export class NameNationalityC implements NameNationality {
    name: string;
    country: Country[];

    constructor(name: string, country: Country[]){
        this.name = name;
        this.country = country;

    }
}