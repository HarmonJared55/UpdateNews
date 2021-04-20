import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, FormGroup, Validator } from '@angular/forms';
import { MustMatch } from '../utils/must-match.validator';
@Directive({
 selector: '[mustMatch]',
 providers: [
 {
 provide: NG_VALIDATORS,
 useExisting: MustMatchDirective,
 multi: true,
 },
 ],
})
export class MustMatchDirective{
 @Input()
 mustMatch: string[] = [];
 constructor() {}

 validate(formGroup: FormGroup) {
  return MustMatch(this.mustMatch[0], this.mustMatch[1])(formGroup);
  }
 
 
}