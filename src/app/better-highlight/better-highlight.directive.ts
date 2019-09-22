import { 
  Directive, 
  Renderer2, 
  OnInit, 
  ElementRef, 
  HostListener, 
  HostBinding} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string;

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
    // this.renderer.setStyle(this.elRef.nativeElement,
    //   'background-color', 'blue');
    // this.renderer.setStyle(this.elRef.nativeElement,
    //     'color', 'white');
    this.backgroundColor = 'blue';
    this.color = 'white';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement,
    //   'background-color', 'transparent');
    // this.renderer.setStyle(this.elRef.nativeElement,
    //     'color', this.originalColor);
    this.backgroundColor = 'transparent';
    this.color = this.originalColor;
  }
}
