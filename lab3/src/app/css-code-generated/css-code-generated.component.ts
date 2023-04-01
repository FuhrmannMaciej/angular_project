import { Component, Input } from '@angular/core';
import { CSS } from '../models/css.model';


@Component({
  selector: 'app-css-code-generated',
  templateUrl: './css-code-generated.component.html',
  styleUrls: ['./css-code-generated.component.scss']
})
export class CssCodeGeneratedComponent {
  @Input() css: CSS = {
    color: undefined,
    border: undefined,
    'box-shadow': undefined,
    background: undefined
  }
}
