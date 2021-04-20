import { FormGroup } from '@angular/forms';
export function MustMatch(controlName: string, matchingControlName: string) {
 return (formGroup: FormGroup) => {
 const control = formGroup.controls[controlName];
 const matchingControl = formGroup.controls[matchingControlName];
 //return null if controls havent initialized yet
 if (!control || !matchingControl) {
 return null;
 }
 //here i am going to check the matching control/confirm password has any
//error then control null
 if (matchingControl.errors && !matchingControl.errors.mustMatch) {
 return null;
 }
 if (control.value !== matchingControl.value) {
 matchingControl.setErrors({ mustMatch: true });
 } else {
 matchingControl.setErrors(null);
 }
 };
}
