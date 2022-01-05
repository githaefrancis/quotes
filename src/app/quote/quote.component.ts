import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { Username } from '../username';
import { faCaretDown, faCaretUp, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { interval } from 'rxjs';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  // faCoffee=faCoffee;
  color='white';
  mostVotedQuote!:Quote;
  quotes:Quote[]=[
    new Quote(1,"It always seems impossible until it's done.","Nelson Mandela",new Username("Admin",""),new Date(2022,0,1,10,0,0,0)),
    new Quote(2,"Change will not come if we wait for some other person, or if we wait for some other time. We are the ones we've been waiting for. We are the change that we seek.","Barack Obama",new Username("Admin",""),new Date(2021,11,29,14,0,0,0)),
    new Quote(3,"We're here to put a dent in the universe. Otherwise why else even be here?","Steve Jobs",new Username("Admin",""),new Date(2021,11,10,12,0,0,0))
  ]

  
  
  
  upVoteQuote(index:number){
    this.quotes[index].upVote+=1;
    this.mostVotedQuote=this.getPopularQuote();
  }
  downVoteQuote(index:number){
    this.quotes[index].downVote+=1;
  }
  getPopularQuote():any{
    let highestVote:number=0;
    let topQuote!:Quote;
    for(let quote of this.quotes){
      if(quote.upVote>highestVote){
        highestVote=quote.upVote;
        topQuote=quote;
      }
      
    }
    Quote.topQuote=topQuote.id;
    return topQuote;
    
  }
  addNewQuote(quote:Quote){
    let quoteNumber=this.quotes.length;
    quote.createdOn=new Date;
    quote.id=quoteNumber + 1;
    this.quotes.push(quote);
    

  }
  
  deleteQuote(index:number){

    let confirmDelete=confirm("You are about to delete this quote.Would you like to proceed?");
    if (confirmDelete){
      this.quotes.splice(index,1);
    }
    
  }
  constructor() {
   

 
   }
  

  ngOnInit(): void {
  }

}

