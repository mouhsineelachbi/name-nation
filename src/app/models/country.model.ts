export interface Country {
    country_id: string;
    probability: number;
}

export class CountryC implements Country {
    country_id: string;
    probability: number;
    constructor(country_id: string, probability: number){
        this.country_id = country_id
        this.probability = probability
    }
}