import { Component, OnInit } from '@angular/core';
import {Quoty } from '../quoty';
@Component({
  selector: 'app-sayings',
  templateUrl: './sayings.component.html',
  styleUrls: ['./sayings.component.css']
})
export class SayingsComponent implements OnInit {
  quotes:Quoty []= [
    {author:'Les Brown', quotes:'Accept responsibility for your life. Know that it is you who will get you where you want to go, no one else', details:'I do not know'},
    {author:'Yann Martel', quotes:'You must take life the way it comes at you and make the best of it', details:'I do not know'},
    {author:'State of Affairs', quotes:'There comes a point in time that you got to takecontrol of your own life', details:'I do not know'},
    {author:'Disney World Studios', quotes:'When i marry i want it to be because i choose to spend the rest of my life with someone i love', details:'I do not know'},
    {author:'Billy Cox', quotes:'The two things in life you are in total control over are your attitude and your effort', details:'I do not know'},
 
  ];

  constructor() { }

  ngOnInit() {
  }

}
