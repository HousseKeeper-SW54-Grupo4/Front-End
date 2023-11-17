import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  signInForm: FormGroup;

  constructor(public builder: FormBuilder,
              public authService: AuthenticationService,
              public router: Router) {
    this.signInForm = this.builder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get email() { return this.signInForm.controls['email'];}

  get password() { return this.signInForm.controls['password'];}
  goToLogin(){
    this.router.navigateByUrl('/login');
  }
  signIn() {
    this.authService.signIn(this.signInForm.value).subscribe((response: any) => {
      console.log('Server response:', response);

      localStorage.setItem('accessToken', JSON.stringify(response.accessToken));
      localStorage.setItem('currentUser', JSON.stringify(response.user));
      this.signInForm.reset();

      const userType = response.user?.type;

      if (userType === 'keeper') {
        this.router.navigate(['home-keeper']).then();
      } else if (userType === 'traveller') {
        this.router.navigate(['home-traveller']).then();
      } else {
        console.error('Unknown user type');
      }
    });
  }

  cancelSignIn() {
    console.log('Cancelled');
  }

}
