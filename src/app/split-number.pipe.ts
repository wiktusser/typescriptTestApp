import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitNumber'
})
export class SplitNumberPipe implements PipeTransform {

  transform(value: number, start: number, end: number): any {
    
        var string = value.toString();
        var array = string.substring(start, end);
        return array;
    
  }

}
