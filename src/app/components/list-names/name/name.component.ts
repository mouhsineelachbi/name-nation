import { Component, Input, OnInit } from '@angular/core';
import { Country, CountryC } from 'src/app/models/country.model';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  @Input()
  name?: string;
  @Input()
  countries?: Country[]
  
  constructor() { }

  ngOnInit(): void {

    /*
    * Modify probabilities to be in %
    */
    if(this.countries) {
      this.countries = this.countries.map((country: Country) => {
        return new CountryC(country.country_id, Number(country.probability.toFixed(2))*100)
      })
    }
  }

}
