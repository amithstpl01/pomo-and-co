import { Directive, HostListener } from '@angular/core';
import { Location } from '@angular/common';

@Directive({
  selector: '[appBack]',
})
export class BackDirective {
  constructor(private location: Location) {}

  @HostListener('click')
  onClick(): void {
    this.location.back();
  }
}
