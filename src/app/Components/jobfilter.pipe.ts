import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jobfilter'
})
export class JobfilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
