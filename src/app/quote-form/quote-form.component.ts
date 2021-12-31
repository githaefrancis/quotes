import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { Username } from '../username';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote=new Quote(0,"","",new Username("",""));
  constructor() { }

  ngOnInit(): void {
  }

}
