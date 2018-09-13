import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activityFilter'
})
export class ActivityFilterPipe implements PipeTransform {

  // done: ���� ���������� ��� ��� activities
  transform(activities: IActivity[], filterCriteria: string): any {
    if (!filterCriteria) {
      return activities;
    }
    return activities.filter(a => a.actType === filterCriteria);
  }

}
