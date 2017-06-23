import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app works!';
  currency: Currency = {
        pair: "USD CHF",
        buy: 0.99143,
        sell: 0.99043
    }
}

export class Currency {
  pair: string;
  buy: number;
  sell: number;
}
