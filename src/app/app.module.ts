import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormatNumberPipe } from './format-number.pipe';
import { SplitNumberPipe } from './split-number.pipe';
// import currenciesData from './currencies.data'

@NgModule({
  declarations: [
    AppComponent,
    FormatNumberPipe,
    SplitNumberPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    // { provide: 'CurrenciesData', useValue: currenciesData}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
