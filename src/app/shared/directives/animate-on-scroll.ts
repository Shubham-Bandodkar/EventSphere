import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2
} from '@angular/core';
import { Input } from '@angular/core';
@Directive({
  selector: '[appAnimateOnScroll]',
})
export class AnimateOnScrollDirective implements OnInit  {
  @Input()
  delay = 0;
   constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {

    this.renderer.addClass(
      this.element.nativeElement,
      'animate-hidden'
    );

    const observer = new IntersectionObserver(

      entries => {

        entries.forEach(entry => {

          if(entry.isIntersecting){

            this.renderer.removeClass(
              this.element.nativeElement,
              'animate-hidden'
            );
            this.renderer.setStyle(
  this.element.nativeElement,
  'transitionDelay',
  `${this.delay}ms`
);
            this.renderer.addClass(
              this.element.nativeElement,
              'animate-visible'
            );

            observer.unobserve(
              this.element.nativeElement
            );

          }

        });

      },

      {
        threshold:0.15
      }

    );

    observer.observe(
      this.element.nativeElement
    );

  }

}
