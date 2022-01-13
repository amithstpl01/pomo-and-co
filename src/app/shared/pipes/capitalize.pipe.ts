import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalize' })
export class Capitalize implements PipeTransform {
  transform(value: string): string {
    const capitalizedText: string =
      value && value.charAt(0).toUpperCase() + value.slice(1);
    return capitalizedText;
  }
}
