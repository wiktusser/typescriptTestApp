import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

import { FormatNumberPipe } from './format-number.pipe'
import { SplitNumberPipe } from './split-number.pipe'

import { Currency } from './currency.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  ngOnInit() {

    //change value of currencies
    setInterval(() => {
      for (let currency of this.currencies) {
        let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        currency.buy = currency.buy + (0.1 * currency.buy * plusOrMinus);
        currency.sell = currency.sell + (0.1 * currency.sell * plusOrMinus);

        //setting indicator for arrows
        if (plusOrMinus == -1) {
          currency.indicator = false
        }
        else currency.indicator = true;
      }
    }, 1000);
  };

  currencies: Currency[] = [
    {
      pair: "USD CHF",
      buy: 0.99143,
      sell: 0.99043,
      indicator: false
    },
    {
      pair: "GBP USD",
      buy: 1.28495,
      sell: 1.2836,
      indicator: false
    },
    {
      pair: "GBP CHF",
      buy: 1.27378,
      sell: 1.27147,
      indicator: false
    },
    {
      pair: "EUR SEK",
      buy: 9.632,
      sell: 9.6055,
      indicator: false
    },
    {
      pair: "USD JPY",
      buy: 110.467,
      sell: 110.417,
      indicator: false
    },
    {
      pair: "EUR JPY",
      buy: 120.589,
      sell: 120.491,
      indicator: false
    }
  ];






}




