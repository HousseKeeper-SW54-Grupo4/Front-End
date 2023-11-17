import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-sign-up-keeper',
  templateUrl: './sign-up-keeper.component.html',
  styleUrls: ['./sign-up-keeper.component.css']
})
export class SignUpKeeperComponent {
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
      // Otros campos del formulario
    });
  }
  signUp() {
    if (this.signUpForm.valid) {
      // Enviar los datos al servidor a través del servicio
      const keeperData = this.signUpForm.value;
      this.authService.signUpKeeper(keeperData).subscribe(
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

  goToRegisterTraveller(){
    this.router.navigateByUrl('/sign-up-traveller');
  }
}
