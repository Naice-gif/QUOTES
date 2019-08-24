import { Component } from '@angular/core';
import {Quoty } from './quoty';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quote It';
  quotes:Quoty []= [
    {id:1, quotes:'Business quotes'},
    {id:2, quotes:'Spiritual quotes'},
   
  ];

}
