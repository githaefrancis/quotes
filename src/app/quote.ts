import { Username } from "./username";
export class Quote {
  upVote:number;
  downVote:number;
  public static topQuote=0;
  constructor(public id:number,public content:string,public author:string,public submittedBy:Username,public createdOn:Date){
  this.upVote=0;
  this.downVote=0;
  }
}
