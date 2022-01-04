import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';
import { faCaretDown, faCaretUp, faCoffee,faTrashAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})

export class QuoteDetailComponent implements OnInit {
  @Input() quote!:Quote; 
  @Output() upVote=new EventEmitter<boolean>();
  @Output() downVote=new EventEmitter<boolean>();
  @Output() deleteQuote=new EventEmitter<boolean>();
  faCaretUp=faCaretUp;
  faCaretDown=faCaretDown;
  faTrashAlt=faTrashAlt;

  like(){
    console.log("liked");
    this.upVote.emit(true);
  }
  dislike(){
    this.downVote.emit(true);
  }
  delete(){
    this.deleteQuote.emit(true);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
