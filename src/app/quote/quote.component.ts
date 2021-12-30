import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { faCaretDown, faCaretUp, faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  // faCoffee=faCoffee;
  faCaretUp=faCaretUp;
  faCaretDown=faCaretDown;
  quotes:Quote[]=[
    new Quote(1,"It always seems impossible until it's done.","Nelson Mandela"),
    new Quote(2,"Change will not come if we wait for some other person, or if we wait for some other time. We are the ones we've been waiting for. We are the change that we seek.","Barack Obama"),
    new Quote(3,"We're here to put a dent in the universe. Otherwise why else even be here?","Steve Jobs")
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

