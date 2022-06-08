import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListNamesComponent } from './components/list-names/list-names.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './share/header/header.component';
import { NameComponent } from './components/list-names/name/name.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { NamesReducers } from './store/name/name.reducers';
import { NamesEffect } from './store/name/name.effects';

@NgModule({
  declarations: [
    AppComponent,
    ListNamesComponent,
    HeaderComponent,
    NameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([
      NamesEffect,
      
    ]),
    StoreModule.forRoot({
      names: NamesReducers
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
