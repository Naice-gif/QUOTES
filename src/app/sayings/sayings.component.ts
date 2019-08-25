import { Component, OnInit } from '@angular/core';
import {Quoty } from '../quoty';
@Component({
  selector: 'app-sayings',
  templateUrl: './sayings.component.html',
  styleUrls: ['./sayings.component.css']
})
export class SayingsComponent implements OnInit {
  quotes:Quoty []= [
    new Quoty('Les Brown','Accept responsibility for your life. Know that it is you who will get you where you want to go, no one else', 'I do not know',new Date(2019,3,14 )),
    new Quoty('Yann Martel','You must take life the way it comes at you and make the best of it','I do not know', new Date(2019,3,14 )),
    new Quoty('State of Affairs','There comes a point in time that you got to takecontrol of your own life','I do not know', new Date(2019,3,14)),
    new Quoty('Disney World Studios','When i marry i want it to be because i choose to spend the rest of my life with someone i love', 'I do not know', new Date(2019,3,14)),
    new Quoty('Billy Cox','The two things in life you are in total control over are your attitude and your effort', 'I do not know', new Date(2019,3,14)),
 
  ];
  toggleDetails(index){
    this.quotes[index].showdetails = !this.quotes[index].showdetails;
  }
  deletequote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quotes}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuoty(sayings){
    let sayingsLength = this.quotes.length;
    sayings.id = sayingsLength+1;
    sayings.completeDate = new Date(sayings.completeDate)
    this.quotes.push(sayings)
  }
  constructor() { }

  ngOnInit() {
  }

}
