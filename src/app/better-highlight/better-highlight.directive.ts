import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  originalColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement,
    //   'background-color', 'blue', );
    // this.renderer.setStyle(this.elRef.nativeElement,
    //     'color', 'white', )
    this.originalColor = this.elRef.nativeElement.style.color;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement,
      'background-color', 'blue');
    this.renderer.setStyle(this.elRef.nativeElement,
        'color', 'white')
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement,
      'background-color', 'transparent');
    this.renderer.setStyle(this.elRef.nativeElement,
        'color', this.originalColor);
  }
}
