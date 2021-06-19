import { Component, OnInit } from '@angular/core';
import { Globals } from '../app.globals';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[Globals]
})
export class NavbarComponent implements OnInit {
  loginvalid: boolean;
  constructor(public global : Globals) { 
  }

  ngOnInit() {
    this.loginvalid = this.global.loginbtn;
  }
onnavlogin()
{

}
}