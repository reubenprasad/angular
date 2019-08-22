import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  sign:Boolean=false;
  
  constructor() { }

  ngOnInit() {
  }
 
  public toggleSignUp(){
    this.sign = ! this.sign;
  }

}
