import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lab2';
  smallReportRevenueIcon = '../../assets/icons/money-bag.png';
  smallReportRevenueValue = 1000;
  smallReportRevenueColor = 'green';
  smallReportRevenueLabel = 'Total Revenue';
}
