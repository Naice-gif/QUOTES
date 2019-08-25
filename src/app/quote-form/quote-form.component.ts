import { Component, OnInit,  } from '@angular/core';
import { Quoty } from '../quoty';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {


  newQuote = new Quoty("","","",new Date());
  constructor() { }

  ngOnInit() {
  }

}
