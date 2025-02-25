import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appProductDirective]',
  standalone: false
})
export class ProductDirective {

  @Input() defaultColor: string;
  @Input() leaveColor: string;

  // Make a custom attribute directive that make the product card background to be
  //   gray when over it and the return white when leave it.

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseover') Onmouseover() {
    this.element.nativeElement.style.backgroundColor = this.defaultColor;
    // this.Highlight(this.defaultColor);
  }


  @HostListener('mouseleave') Onmouseleave() {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', this.leaveColor);
  }

  // -Make a custom attribute directive that control the product card color
  //  You should pass the text color as input property to the directive.


}
