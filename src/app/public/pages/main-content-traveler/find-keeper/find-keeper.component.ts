import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {keepers} from "../../../model/keepers";
import {KeepersService} from "../../../services/keepers.service";

@Component({
  selector: 'app-find-keeper',
  templateUrl: './find-keeper.component.html',
  styleUrls: ['./find-keeper.component.css']
})
export class FindKeeperComponent implements OnInit{
  keeper:keepers[]=[];

  constructor(private router: Router,private keeperService:KeepersService){}
  ngOnInit() {

    this.keeperService.getAll().subscribe((response:any)=>{

      this.keeper=response
    })
  }
  goToTraveler(){
    this.router.navigateByUrl('/home-traveller');
  }
  goToMessenger(){
    this.router.navigateByUrl('/messenger-traveler');
  }
  goToProfile(){
    this.router.navigateByUrl('/profile-traveler');
  }
  goToLogin(){
    this.router.navigateByUrl('/login');
  }
}
