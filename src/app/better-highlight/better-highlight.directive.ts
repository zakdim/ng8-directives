import { 
  Directive, 
  Renderer2, 
  OnInit, 
  ElementRef, 
  HostListener, 
  HostBinding,
  Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultBackgroundColor: string = 'transparent';
  @Input('appBetterHighlight') highlightBackgroundColor: string = 'blue';
  @Input() defaultColor: string;
  @Input() hightlightColor: string = 'white';

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
    this.defaultColor = this.defaultColor || this.originalColor;

    this.backgroundColor = this.defaultBackgroundColor;
    this.color = this.defaultColor
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement,
    //   'background-color', 'blue');
    // this.renderer.setStyle(this.elRef.nativeElement,
    //     'color', 'white');
    this.backgroundColor = this.highlightBackgroundColor;
    this.color = this.hightlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement,
    //   'background-color', 'transparent');
    // this.renderer.setStyle(this.elRef.nativeElement,
    //     'color', this.originalColor);
    this.backgroundColor = this.defaultBackgroundColor;
    this.color = this.defaultColor;
  }
}
