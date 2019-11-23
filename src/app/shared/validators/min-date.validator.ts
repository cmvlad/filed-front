import {AbstractControl} from '@angular/forms';

export function minDateValidator(control: AbstractControl) {
  const validatorResult = {validDate: true};
  const currentDate = new Date();
  const selectedDate: Date = control.value;
  if (control.value instanceof Date) {
    if (currentDate.getMonth() <= selectedDate.getMonth() &&
      currentDate.getFullYear() <= selectedDate.getFullYear()) {
      return null;
    }
  }
  return validatorResult;
}
