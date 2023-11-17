import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  correo_electronico: any;
  contrasena: any;
  selectedUserType: 'login' | 'keeper' | 'traveller' = 'login';

  constructor(private router: Router){}
  goToRegister(){
    this.router.navigateByUrl('/register-keeper');
  }

  goToKeeper(){
    this.router.navigateByUrl('/home-keeper');
  }

  goToTraveller(){
    this.router.navigateByUrl('/home-traveller');
  }

  selectUserType(type: 'keeper' | 'traveller') {
    this.selectedUserType = type;
  }

  login(){
    if(this.selectedUserType == 'keeper'){
      this.goToKeeper();
    }
    else if(this.selectedUserType == 'traveller')
    {
      this.goToTraveller();
    }
  }
  getCurrentUserEmail() {
    let currentUserString = localStorage.getItem('currentUser');
    if (currentUserString) {
      console.log(`current user: ${currentUserString}`);
      let currentUser = (JSON.parse(currentUserString));
      console.log(currentUser);
      return currentUser.email;
    } else return null;

  }
  getCurrentTokenUser() {
    let token = localStorage.getItem('accessToken');
    if (token) {
      console.log(`token user: ${token}`);
      let tokenUser = (JSON.parse(token));
      console.log(tokenUser);
      return token;
    } else return null;

  }
  getSignInLink(): string {
    if (this.selectedUserType === 'login') {
      return '/sign-in';
    } else if (this.selectedUserType === 'keeper') {
      return '/sign-up-keeper';
    } else if (this.selectedUserType === 'traveller') {
      return '/sign-up-traveller';
    }
    return '/sign-in'; // En caso de que no coincida con ninguno, redirige a Sign-In
  }
  signOut() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('accessToken');
    this.router.navigate(['']).then();
    console.log("Signed Out");
  }

}
