import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-keeper',
  templateUrl: './keeper.component.html',
  styleUrls: ['./keeper.component.css']
})
export class KeeperComponent {

title='keeper';

  constructor(private router: Router){}
  goToFindHouse(){
    this.router.navigateByUrl('/find-house');
  }

  goToMessenger(){
    this.router.navigateByUrl('/messenger-keeper');
  }

  goToProfile(){
    this.router.navigateByUrl('/profile-keeper');
  }

}
