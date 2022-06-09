import { Component, Inject, OnInit } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { map, Observable, tap } from 'rxjs';
import { NameNationality } from 'src/app/model/name-nationality.model';
import { NameService } from 'src/app/services/name.service';
import { AppState } from 'src/app/store/app.states';
import {
  FetchNameNationality, NameNationalityActionTypes
} from 'src/app/store/name-nationality/name-nationality.actions';
import { FetchNames, NameActionTypes } from 'src/app/store/name/name.actions';

@Component({
  selector: 'app-list-names',
  templateUrl: './list-names.component.html',
  styleUrls: ['./list-names.component.css'],
})
export class ListNamesComponent implements OnInit {

  namesNationalities?: NameNationality[]
  isLoading = this.store.select((state)=> state?.namesNationality?.loading)

  constructor(
    private service: NameService,
    private store: Store<AppState>,
    @Inject(ToastrService) private toastr: ToastrService,
    @Inject(Actions) private actions: Actions
  ) {}

  ngOnInit(): void {
    /*
     * dispatch fetch names to get names from JAVA Rest API
     */
    this.store.dispatch(FetchNames());

    /*
     * Listen to success action to dispatch fetch nationality of names
     */
    this.actions
      .pipe(ofType(NameActionTypes.FETCH_NAMES_SUCCESS))
      .subscribe(() =>
        this.store
          .select((state) => state.names.names)
          .subscribe(() => {
            this.store.dispatch(FetchNameNationality());
          })
      );

    /*
     * Listen to failed action to get error
     */
    this.actions
      .pipe(ofType(NameActionTypes.FETCH_NAMES_FAILED))
      .subscribe(() =>
        this.store
          .select((state) => state.names.errorMessage)
          .subscribe((error) => {
            this.showFailed(error);
          })
      );

    /*
     * Listen to success action to get names nationalities
     */
    this.actions
      .pipe(ofType(NameNationalityActionTypes.FETCH_NAMENATIONALITY_SUCCESS))
      .subscribe((names:any) => {
        console.log(names.nameNationality);
        this.namesNationalities = names.nameNationality
      })
  }

  /*
   * use Toast package to show success notification
   */
  showSuccess() {
    this.toastr.success(
      'Names has been successfully fetched from api',
      'Fetching names',
      {
        progressBar: true,
      }
    );
  }

  /*
   * use Toast package to show error notification
   */
  showFailed(error: string) {
    this.toastr.error(error, 'Error', {
      progressBar: true,
    });
  }
}
