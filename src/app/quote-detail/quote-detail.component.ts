import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';
import { faCaretDown, faCaretUp, faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})

export class QuoteDetailComponent implements OnInit {
  @Input() quote!:Quote; 
  @Output() upVote=new EventEmitter<boolean>() 
  faCaretUp=faCaretUp;
  faCaretDown=faCaretDown;

  like(){
    console.log("liked");
    this.upVote.emit(true);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
