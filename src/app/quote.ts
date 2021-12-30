export class Quote {
  upVote:number;
  downVote:number;
  
  constructor(public id:number,public content:string,public author:string){
  this.upVote=0;
  this.downVote=0;
  }
}
