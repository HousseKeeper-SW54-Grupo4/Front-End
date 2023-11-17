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
import {TravelerComponent} from "./public/pages/main-content-traveler/traveler/traveler.component";
import {FindKeeperComponent} from "./public/pages/main-content-traveler/find-keeper/find-keeper.component";
import {MessengerTravelerComponent} from "./public/pages/main-content-traveler/messenger-traveler/messenger-traveler.component";
import {ProfileTravelerComponent} from "./public/pages/main-content-traveler/profile-traveler/profile-traveler.component";
import {SignUpKeeperComponent} from "./security/pages/sign-up-keeper/sign-up-keeper.component";
import {SignUpTravellerComponent} from "./security/pages/sign-up-traveller/sign-up-traveller.component";
import {SignInComponent} from "./security/pages/sign-in/sign-in.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register-keeper', component: RegisterKeeperComponent},
  {path: 'register-traveller', component: RegisterTravellerComponent},
  {path: 'home-keeper', component: KeeperComponent},
  {path: 'find-house', component: FindHouseComponent},
  {path: 'messenger-keeper', component: MessengerKeeperComponent},
  {path: 'profile-keeper', component: ProfileKeeperComponent},
  {path: 'home-traveller', component: TravelerComponent},
  {path: 'find-keeper', component: FindKeeperComponent},
  {path: 'messenger-traveler', component: MessengerTravelerComponent},
  {path: 'profile-traveler', component: ProfileTravelerComponent},
  { path: 'sign-in', component : SignInComponent },
  { path: 'sign-up-keeper', component : SignUpKeeperComponent },
  { path: 'sign-up-traveller', component : SignUpTravellerComponent },
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', component:PageNotFoundComponent},

]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
