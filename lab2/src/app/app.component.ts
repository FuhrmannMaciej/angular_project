import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lab2';
  TotalRevenueIcon = '../../assets/icons/money-bag.png';
  TotalRevenueValue = 1000;
  TotalRevenueColor = 'green';
  TotalRevenueLabel = 'Total Revenue';
  RevenueIcon = '../../assets/icons/cart.png';
  RevenueValue = 1000;
  RevenueColor = 'purple';
  RevenueLabel = 'Revenue';
}
