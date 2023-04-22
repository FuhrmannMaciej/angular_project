import { FormControl } from '@angular/forms';

export type IssuePersonData = {
  name: FormControl<string>;
  city: FormControl<string>;
  address: FormControl<string>;
  zipCode: FormControl<string>;
  nip: FormControl<string>;
  bankAccount: FormControl<string>;
};
