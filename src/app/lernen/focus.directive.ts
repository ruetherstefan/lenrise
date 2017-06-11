import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[lenriseFocus]'
})
export class FocusDirective {

    constructor(private elementRef: ElementRef) {}

    ngOnInit(): void {
      this.elementRef.nativeElement.focus();
    }    
    
}
