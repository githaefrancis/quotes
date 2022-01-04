import { Directive, ElementRef, Input,HostListener } from '@angular/core';
import { Quote } from './quote';
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight!:any;
  @Input() index!:any;
  
  constructor(private elem:ElementRef) { 
    // this.elem.nativeElement.style.background="blue";
    // console.log(this.index);
  }
  @HostListener("change") onChanges(){
    this.highlight()
  }
  @HostListener("click") onClicks(){
    this.highlight()
  }
  private highlight(){
    
    if(this.elem.nativeElement.id==Quote.topQuote){
      this.elem.nativeElement.style.background="blue";
      
    }
    else{
      this.elem.nativeElement.style.background="white";
    }
    
    if(this.appHighlight){
      console.log(this.elem.nativeElement)
      console.log(this.appHighlight);
    }

  }
  

}
