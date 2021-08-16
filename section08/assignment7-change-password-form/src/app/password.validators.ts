import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators {

    static isValid(control: AbstractControl) : Promise<ValidationErrors | null> {
        
        return new Promise((resolve) =>{
            if (control.value !== '1234')
                resolve({ isValid: true });
            else
                resolve(null);
        });

    }

    static passwordsShouldMatch(control: AbstractControl) : ValidationErrors | null {
        let newPassword = control.get('newpassword');
        let confirmPassword = control.get('confirmpassword');
        if (newPassword.value !== confirmPassword.value)
            return {passwordsShouldMatch: true}

        return null;
    }
}