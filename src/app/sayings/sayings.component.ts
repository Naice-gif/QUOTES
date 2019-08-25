import { Component, OnInit } from '@angular/core';
import {Quoty } from '../quoty';
@Component({
  selector: 'app-sayings',
  templateUrl: './sayings.component.html',
  styleUrls: ['./sayings.component.css']
})
export class SayingsComponent implements OnInit {
  quotes:Quoty []= [
    new Quoty('Les Brown','Accept responsibility for your life. Know that it is you who will get you where you want to go, no one else', 'I do not know'),
    new Quoty('Yann Martel','You must take life the way it comes at you and make the best of it','I do not know'),
    new Quoty('State of Affairs','There comes a point in time that you got to takecontrol of your own life','I do not know'),
    new Quoty('Disney World Studios','When i marry i want it to be because i choose to spend the rest of my life with someone i love', 'I do not know'),
    new Quoty('Billy Cox','The two things in life you are in total control over are your attitude and your effort', 'I do not know'),
 
  ];

  toggledetails(index){
    this.quotes[index].showdetails = !this.quotes[index].showdetails;
  }
  completequote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
