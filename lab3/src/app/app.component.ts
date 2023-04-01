import { Component } from '@angular/core';
import { CSS } from './models/css.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  css: CSS = {
    color: undefined,
    background: undefined,
    border: undefined,
    'box-shadow': undefined
  };

  onCssChange(css: CSS): void {
    this.css = css;
  }
}
