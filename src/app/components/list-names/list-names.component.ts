import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NameService } from 'src/app/services/name.service';
import { AppState } from 'src/app/store/app.states';
import { FetchNames } from 'src/app/store/name/name.actions';

@Component({
  selector: 'app-list-names',
  templateUrl: './list-names.component.html',
  styleUrls: ['./list-names.component.css'],
})
export class ListNamesComponent implements OnInit {
  names: string[] = [];

  constructor(private service: NameService, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(FetchNames())
  }
}
