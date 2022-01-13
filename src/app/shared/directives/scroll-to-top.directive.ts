import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollToTop]',
})
export class ScrollToTopDirective {
  // constructor() { }
  @HostListener('click')
  public onClick() {
    if (window && window.pageYOffset) {
      window.scroll(0, 0);
    }
  }
}
