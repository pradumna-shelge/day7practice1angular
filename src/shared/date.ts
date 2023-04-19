import { AbstractControl } from '@angular/forms';

export function datev(control: AbstractControl) {

    let  p = new Date();
    let year = p.getFullYear();
    p = new Date(control.value);
    let ny = p.getFullYear();

  if (!(Number(year) > Number(ny)+17)) {
    return { datev: true };
  }
  return null;
}