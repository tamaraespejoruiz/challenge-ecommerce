import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ValidationErrors,  } from '@angular/forms';
import { Validators, FormGroupDirective } from '@angular/forms';  
import { NewUser } from 'src/app/models/new-user';

import { UserRegistrationService } from 'src/app/services/user-registration.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass'],
})
export class SignUpComponent implements OnInit {

  hide = true;
  users?: NewUser;
  contactForm: FormGroup;
  
  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[^0-9]+$/)]],
      lastname: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[^0-9]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      direction: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      dni: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      //duplicated-password: ['', [Validators.required, Validators.minLength(8)]], 
      // Si tengo tiempo agrego el validar la contraseña
    })
  }

  getUserFromForm(): NewUser {
    return {
      name: this.contactForm.get('name')?.value, 
      lastname: this.contactForm.get('lastname')?.value, 
     email: this.contactForm.get('email')?.value, 
      direction: this.contactForm.get('direction')?.value,
      phone: this.contactForm.get('phone')?.value, 
      dni: this.contactForm.get('dni')?.value,
      password: this.contactForm.get('password')?.value
    }
  }


  constructor(private fb: FormBuilder, private userService: UserRegistrationService) {
    this.contactForm = this.initForm();
  }
  ngOnInit(): void {
  }

  onSubmit(formDirective: FormGroupDirective) {
    console.log(this.contactForm.value);
    let newUser: NewUser = this.getUserFromForm();

    if (this.userService.belongsNewUser(newUser) === undefined) {
      this.userService.addNewUser(this.getUserFromForm()); // agregar al usuario mediante el servicio
    } else {
      console.log("EL USUARIO REGISTRADO YA EXISTE"); // Si tengo tiempo agregar una especie de popap
    }
    //this.contactForm.reset();
    formDirective.resetForm();
  }

}
