import { AbstractControl } from '@angular/forms';

// Password at least one Uppercase, lowercase, number, special character and min 8 digits
export function passwordValidator(control: AbstractControl) {
  const passwordRegEx = new RegExp(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[~!@#$%^&*_+=`(){}\[\]\-:;"'<>,.?\/\|\\])(?!.*[\s]).{8,}$/
  );
  if (!passwordRegEx.test(control.value)) {
    return { passwordValidator: true };
  }
  return null;
}
