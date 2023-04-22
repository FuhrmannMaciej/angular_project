import { FormControl, FormArray , FormGroup } from '@angular/forms';
import { OrderPersonData } from './order-person-data';
import { IssuePersonData } from './issue-person-data';
import { InvoiceTableFields } from './invoice-table-fields';

export type InvoiceForm = {
  issuePersonData: FormGroup<IssuePersonData>;
  orderPersonData: FormGroup<OrderPersonData>;
  invoiceNumber: FormControl<string>;
  invoiceDate: FormControl<string>;
  orderDate: FormControl<string>;
  paymentDate: FormControl<string>;
  paymentMethod: FormControl<string>;
  invoiceTable: FormArray<FormGroup<InvoiceTableFields>>;
};
