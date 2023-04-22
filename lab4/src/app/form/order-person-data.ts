import { FormControl } from '@angular/forms';

export type OrderPersonData = {
  name: FormControl<string>;
  city: FormControl<string>;
  address: FormControl<string>;
  zipCode: FormControl<string>;
  nip: FormControl<string | null>;
};
