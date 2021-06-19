import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule , Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Globals } from './app.globals';

const appRoutes:Routes = [
  {path:'',component:WelcomeComponent},
  {path:'login',component:LoginComponent}
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, WelcomeComponent, LoginComponent, NavbarComponent ],
  bootstrap:    [ AppComponent, WelcomeComponent,LoginComponent ],
  providers:[ Globals ]
})
export class AppModule { }
