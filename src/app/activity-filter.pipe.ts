import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activityFilter'
})
export class ActivityFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
