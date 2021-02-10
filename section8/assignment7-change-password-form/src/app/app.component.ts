import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators} from './password.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment7-change-password-form';

form = new FormGroup({
  oldpassword: new FormControl('',
    Validators.required,
    PasswordValidators.isValid
  ),
  newpassword: new FormControl('',Validators.required),
  confirmpassword: new FormControl('',Validators.required)
},{validators: PasswordValidators.passwordsShouldMatch});

get oldpassword() {
  return this.form.get('oldpassword');
}

get newpassword() {
  return this.form.get('newpassword');
}

get confirmpassword() {
  return this.form.get('confirmpassword');
}

}
