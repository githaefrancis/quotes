import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';
import { Username } from '../username';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote=new Quote(0,"","",new Username("",""));
  @Output() addQuote=new EventEmitter<Quote>();
  submitQuote(){
    console.log("emit submit");
    this.addQuote.emit(this.newQuote);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
