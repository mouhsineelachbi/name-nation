import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListNamesComponent } from './components/list-names/list-names.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './share/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ListNamesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
