import { AbstractControl } from '@angular/forms';

export function ValidateUrl(control: AbstractControl)
 {

  if (!(control.value === 'pradumna')) {
    return { inv: true };
  }
  return null;
}