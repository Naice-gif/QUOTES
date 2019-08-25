import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {
likes=0

upVotes(){
  this.likes=this.likes+1;
}

downVotes(){
  this.likes=this.likes+1;
}

  constructor() { }

  ngOnInit() {
  }

}
