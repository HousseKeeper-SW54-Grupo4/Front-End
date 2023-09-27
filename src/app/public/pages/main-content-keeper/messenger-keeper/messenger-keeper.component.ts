import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-messenger-keeper',
  templateUrl: './messenger-keeper.component.html',
  styleUrls: ['./messenger-keeper.component.css']
})
export class MessengerKeeperComponent {
  constructor(private router: Router){}
  goToKeeper(){
    this.router.navigateByUrl('/home-keeper');
  }
  goToFindHouse(){
    this.router.navigateByUrl('/find-house');
  }
  goToProfile(){
    this.router.navigateByUrl('/profile-keeper');
  }
}
