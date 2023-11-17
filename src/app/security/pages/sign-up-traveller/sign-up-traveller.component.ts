import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-sign-up-traveller',
  templateUrl: './sign-up-traveller.component.html',
  styleUrls: ['./sign-up-traveller.component.css']
})
export class SignUpTravellerComponent {
  signUpForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthenticationService) {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      birthdate: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      repeat_password: ['', Validators.required],

    });
  }
  signUp() {
    if (this.signUpForm.valid) {
      // Enviar los datos al servidor a través del servicio
      const travellerData = this.signUpForm.value;
      this.authService.signUpTraveller(travellerData).subscribe(
        (response) => {
          // Manejar la respuesta del servidor, si es necesario
          console.log('Registro exitoso', response);
          // Redirigir a la página de inicio de sesión después del registro
          this.router.navigateByUrl('/sign-in');
        },
        (error) => {
          // Manejar errores en caso de que ocurran
          console.error('Error en el registro', error);
        }
      );
    } else {
    }
  }


  goToLogin() {
    this.router.navigateByUrl('/login');
  }
  goToRegisterKeeper(){
    this.router.navigateByUrl('/sign-up-keeper');
  }
}
