import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InvoiceForm } from './invoice-form';
import { InvoiceTableFields } from './invoice-table-fields';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  invoice!: FormGroup<InvoiceForm>;

  constructor(private readonly fb: FormBuilder) {}

  onAddPosition() {
    // const position: FormGroup<InvoiceTableFields> = new FormGroup({
    //   name: new FormControl(this.invoice.controls.items.value.name),
    //   price: new FormControl(itemPrice),
    //   quantity: new FormControl(itemQuantity),
    // });
    // this.invoice.controls.items.push(position);
  }
}
