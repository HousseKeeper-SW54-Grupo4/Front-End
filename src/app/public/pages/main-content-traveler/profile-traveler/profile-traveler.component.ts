import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile-traveler',
  templateUrl: './profile-traveler.component.html',
  styleUrls: ['./profile-traveler.component.css']
})
export class ProfileTravelerComponent {
  name = 'Leonardo';
  lastName= 'Soto';
  birthdate = '16-02-2001';
  phone = '97249304';
  email = 'leo@gmail.com';
  password = '';
  repeat_password = '';
  constructor(private router: Router){}
  goToTraveler(){
    this.router.navigateByUrl('/home-traveller');
  }
  goToFindKeeper(){
    this.router.navigateByUrl('/find-keeper');
  }
  goToMessenger(){
    this.router.navigateByUrl('/messenger-traveler');
  }
  goToLogin(){
    this.router.navigateByUrl('/login');
  }
}
