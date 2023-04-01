import { Component, Input } from '@angular/core';
import { CSS } from '../models/css.model';

@Component({
  selector: 'app-css-preview',
  templateUrl: './css-preview.component.html',
  styleUrls: ['./css-preview.component.scss']
})
export class CssPreviewComponent {

  @Input() css: CSS = {
    color: undefined,
    border: undefined,
    'box-shadow': undefined,
    background: undefined
  }
}
