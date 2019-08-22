import { Component, OnInit } from '@angular/core';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  Name:String;
  Age:Number;
  Email="abc";
  Address;
  Hobbies:String[];
  constructor() {
    this.Name = "Arun";
    this.Age = 20;
    this.Email = "xyz"
    this.Address = {HouseNo:"abc", Street:"xyz"}
    this.Hobbies = ["abcd","xyzx"]
   }

  ngOnInit() {
  }

}
