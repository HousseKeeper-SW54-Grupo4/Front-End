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

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register-keeper', component: RegisterKeeperComponent},
  {path: 'register-traveller', component: RegisterTravellerComponent},
  {path: 'home-keeper', component: KeeperComponent},
  {path: 'find-house', component: FindHouseComponent},
  {path: 'messenger-keeper', component: MessengerKeeperComponent},
  {path: 'profile-keeper', component: ProfileKeeperComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', component:PageNotFoundComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
