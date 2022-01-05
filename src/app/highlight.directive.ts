import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import { Quote } from './quote';
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight!: any;
  @Input() index!: any;

  constructor(private elem: ElementRef) {

  }
  @HostListener("change") onChanges() {
    this.highlight()
  }
  @HostListener("click") onClicks() {
    this.highlight()
  }
  private highlight() {

    if (this.elem.nativeElement.id == Quote.topQuote) {

      if (document.querySelector('.highlighted')) {
        document.querySelector('.highlighted')?.classList.remove("highlighted");
      }

      this.elem.nativeElement.classList.add('highlighted');

    }

  }


}
