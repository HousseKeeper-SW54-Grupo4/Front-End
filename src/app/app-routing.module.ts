import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {RegisterKeeperComponent} from "./public/pages/register-user/register-keeper/register-keeper.component";
import {LoginComponent} from "./public/pages/login/login.component";
import {RegisterTravellerComponent} from "./public/pages/register-user/register-traveller/register-traveller.component";
import {FindHouseComponent} from "./public/pages/main-content-keeper/find-house/find-house.component";
import {MessengerKeeperComponent} from "./public/pages/main-content-keeper/messenger-keeper/messenger-keeper.component";
import {ProfileKeeperComponent} from "./public/pages/main-content-keeper/profile-keeper/profile-keeper.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {KeeperComponent} from "./public/pages/main-content-keeper/keeper/keeper.component";
import {TravelerComponent} from "./public/pages/main-content-traveler/traveler/traveler.component";                                       //Carpeta Traveler
import {FindKeeperComponent} from "./public/pages/main-content-traveler/find-keeper/find-keeper.component";                            //Carpeta find keeper
import {MessengerTravelerComponent} from "./public/pages/main-content-traveler/messenger-traveler/messenger-traveler.component";          //Carpeta nesenger-traveler
import {ProfileTravelerComponent} from "./public/pages/main-content-traveler/profile-traveler/profile-traveler.component";      //Profile Traveler




const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register-keeper', component: RegisterKeeperComponent},
  {path: 'register-traveller', component: RegisterTravellerComponent},
  {path: 'home-keeper', component: KeeperComponent},
  {path: 'find-house', component: FindHouseComponent},
  {path: 'messenger-keeper', component: MessengerKeeperComponent},
  {path: 'profile-keeper', component: ProfileKeeperComponent},
  {path: 'home-traveller', component: TravelerComponent},                        //Carpeta Traveler
  {path: 'find-keeper', component: FindKeeperComponent},                   // Carpeta find keeper
  {path: 'messenger-traveler', component: MessengerTravelerComponent},       // Carpeta nesenger-traveler
  {path: 'profile-traveler', component: ProfileTravelerComponent},           // Carpeta Profile Traveler
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', component:PageNotFoundComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
