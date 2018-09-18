import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonePipe'
})
export class PhonePipePipe implements PipeTransform {

  transform(phoneNum: string, args?: any): string {
    return '***' + phoneNum + '***';
  }

}
