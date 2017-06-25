import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber'
})
export class FormatNumberPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    if(value.toString().length < 7){
      let num = value.toFixed(5);
      return num;
    }
    else return value;
  }

}



