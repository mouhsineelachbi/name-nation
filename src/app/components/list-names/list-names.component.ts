import { Component, Inject, OnInit } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
import { NameService } from 'src/app/services/name.service';
import { AppState } from 'src/app/store/app.states';
import { FetchNames, NameActionTypes } from 'src/app/store/name/name.actions';

@Component({
  selector: 'app-list-names',
  templateUrl: './list-names.component.html',
  styleUrls: ['./list-names.component.css'],
})
export class ListNamesComponent implements OnInit {
  names?: string[];
  error?: string;
  getError = this.store
    .select((state) => state.names.errorMessage)
    .pipe((error) => error);
  getNames = this.store
    .select((state) => state.names.names)

  constructor(
    private service: NameService,
    private store: Store<AppState>,
    @Inject(ToastrService) private toastr: ToastrService,
    @Inject(Actions) private actions: Actions
  ) {}

  ngOnInit(): void {
    this.store.dispatch(FetchNames());
    this.actions
      .pipe(ofType(NameActionTypes.FETCH_NAMES_SUCCESS))
      .subscribe(() =>
        this.store
          .select((state) => state.names.names)
          .subscribe((names) => {
            this.names = names;
            this.showSuccess();
          })
      );

    this.actions
      .pipe(ofType(NameActionTypes.FETCH_NAMES_FAILED))
      .subscribe(() =>
        this.store
          .select((state) => state.names.errorMessage)
          .subscribe((error) => {
            this.showFailed(error);
          })
      );
  }
  showSuccess() {
    this.toastr.success(
      'Names has been successfully fetched from api',
      'Fetching names',
      {
        progressBar: true,
      }
    );
  }

  showFailed(error: string) {
    this.toastr.error(error, 'Error', {
      progressBar: true,
    });
  }
}
