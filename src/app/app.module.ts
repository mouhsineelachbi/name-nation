import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListNamesComponent } from './components/list-names/list-names.component';
import { HttpClientModule } from '@angular/common/http';
import { NameComponent } from './components/list-names/name/name.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { NamesReducers } from './store/name/name.reducers';
import { NamesEffect } from './store/name/name.effects';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NameNationalityReducer } from './store/name-nationality/name-nationality.reducers';
import { NameNationalityEffect } from './store/name-nationality/name-nationality.effects';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ListNamesComponent,
    NameComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    EffectsModule.forRoot([
      NamesEffect,
      NameNationalityEffect            
    ]),
    StoreModule.forRoot({
      names: NamesReducers,
      nationality: NameNationalityReducer
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
