import { Component, OnInit } from '@angular/core';
import { NameService } from 'src/app/services/name.service';

@Component({
  selector: 'app-list-names',
  templateUrl: './list-names.component.html',
  styleUrls: ['./list-names.component.css']
})
export class ListNamesComponent implements OnInit {

  names: string[] = []

  constructor(private service: NameService) { }

  ngOnInit(): void {
    this.service.getNames().subscribe(data => {this.names = data.split(",")});
  }
}
