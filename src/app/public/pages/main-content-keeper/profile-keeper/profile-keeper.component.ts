import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile-keeper',
  templateUrl: './profile-keeper.component.html',
  styleUrls: ['./profile-keeper.component.css']
})
export class ProfileKeeperComponent {
  name = 'Alejandro';
  lastName= 'Soto';
  birthdate = '28-02-2002';
  phone = '959458748';
  email = 'ale12@gmail.com';
  password = '';
  repeat_password = '';

  constructor(private router: Router){}

  goToKeeper(){
    this.router.navigateByUrl('/home-keeper');
  }
  goToFindHouse(){
    this.router.navigateByUrl('/find-house');
  }
  goToMessenger(){
    this.router.navigateByUrl('/messenger-keeper');
  }

}

