import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quote } from '../quote';
import { Username } from '../username';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote=new Quote(0,"","",new Username("",""),new Date());

  @Output() addQuote=new EventEmitter<Quote>();
  submitQuote(form:NgForm){
    let confirmSubmit=confirm("You are about to submit a Quote.Do you want to proceed?")
    if(confirmSubmit){
      let now:Date=new Date();
    console.log(now);
    console.log("emit submit");
    this.addQuote.emit(this.newQuote);
    this.newQuote=new Quote(0,"","",new Username("",""),new Date());
    form.resetForm();
    }
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
