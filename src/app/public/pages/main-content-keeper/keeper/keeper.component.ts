import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Viajes} from "../../../model/viajes";
import {ViajesService} from "../../../services/viajes.service";

@Component({
  selector: 'app-keeper',
  templateUrl: './keeper.component.html',
  styleUrls: ['./keeper.component.css']
})
export class KeeperComponent implements OnInit{

  viajes:Viajes[]=[];
  title='keeper';

  constructor(private router: Router ,private viajeService:ViajesService){}

  ngOnInit() {

    this.viajeService.getAll().subscribe((response:any)=>{

      this.viajes=response
    })
  }
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
