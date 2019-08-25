import { Component, OnInit,Output, EventEmitter  } from '@angular/core';
import { Quoty } from '../quoty';
// import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {


  newQuoty = new Quoty("","","",new Date());
  @Output() addQuoty = new EventEmitter<Quoty>();

  submitQuoty(){
this.addQuoty.emit(this.newQuoty);
  }
  constructor() { }

  ngOnInit() {
  }

}

