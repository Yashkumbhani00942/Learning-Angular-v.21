import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimText'
})
export class TrimTextPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.substring(0, 10);
  }

}
