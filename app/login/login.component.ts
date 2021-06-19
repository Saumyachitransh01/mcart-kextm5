import { Component, OnInit } from '@angular/core';
import { Globals } from '../app.globals';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[Globals]
})
export class LoginComponent implements OnInit {
  public userName: string;
  public password: string;
  constructor(private global:Globals) { }

  ngOnInit() {
  }
  onSubmit()
  {

  }
  oncancel(){
    this.global.loginbtn = true;
    console.log(this.global.loginbtn)
  }
}