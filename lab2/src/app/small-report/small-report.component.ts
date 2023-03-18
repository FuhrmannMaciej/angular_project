import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-small-report',
  templateUrl: './small-report.component.html',
  styleUrls: ['./small-report.component.scss']
})
export class SmallReportComponent {
  @Input() icon = '../../assets/icons/failed.png'
  @Input() color = "blue"
  @Input() value = 0
  @Input() label = "Default label"

  @Output() menuAction = new EventEmitter()

  onMenu(event: any) {
    console.log('menu clicked', event)
  }
}
