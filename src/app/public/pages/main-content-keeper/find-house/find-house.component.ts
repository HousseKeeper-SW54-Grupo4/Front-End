import { Component } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-find-house',
  templateUrl: './find-house.component.html',
  styleUrls: ['./find-house.component.css']
})
export class FindHouseComponent {
  constructor(private router: Router){}
  goToKeeper(){
    this.router.navigateByUrl('/home-keeper');
  }
  goToMessenger(){
    this.router.navigateByUrl('/messenger-keeper');
  }
  goToProfile(){
    this.router.navigateByUrl('/profile-keeper');
  }
  goToLogin(){
    this.router.navigateByUrl('/login');
  }
}
