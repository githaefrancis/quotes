export class Quote {
  upvote:number=0;
  downvote:number=0;
  
  constructor(public id:number,public content:string,public author:string){
  
  }
}
