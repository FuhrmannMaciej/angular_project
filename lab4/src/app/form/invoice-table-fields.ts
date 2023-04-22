import { FormControl } from '@angular/forms';

export type InvoiceTableFields = {
  name: FormControl<string>;
  quantity: FormControl<number>;
  unit: FormControl<string>;
  price: FormControl<number>;
  tax: FormControl<number>;
  value: FormControl<number>;
  valueWithTax: FormControl<number>;
};
