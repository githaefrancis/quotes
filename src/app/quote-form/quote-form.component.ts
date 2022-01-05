import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, NgForm,Validators } from '@angular/forms';
import { Quote } from '../quote';
import { Username } from '../username';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  
  quoteForm=new FormGroup(
    {
      'firstName':new FormControl('fname',Validators.required  ),
      'lastName':new FormControl(null,Validators.required  ),
      'quote':new FormControl(null,Validators.required  ),
      'author':new FormControl(null,Validators.required  )
    });
  
  newQuote=new Quote(0,"","",new Username("",""),new Date());

  @Output() addQuote=new EventEmitter<Quote>();
  submitQuote(){
    if(this.quoteForm.valid){
      let confirmSubmit=confirm("You are about to submit a Quote.Do you want to proceed?")
    if(confirmSubmit){
      let now:Date=new Date();
    console.log(now);
    console.log("emit submit");
    this.addQuote.emit(this.newQuote);
    this.newQuote=new Quote(0,"","",new Username("",""),new Date());
    
    }
    }
    else{
      alert("provide all values");
    }
    
  }
  constructor() { }

  ngOnInit(): void {
    
    
  }

}
