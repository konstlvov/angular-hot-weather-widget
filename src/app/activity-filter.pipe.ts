import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activityFilter'
})
export class ActivityFilterPipe implements PipeTransform {

  transform(activities: IActivity[], filterCriteria: string): IActivity[] {
    if (!filterCriteria || filterCriteria === 'All') {
      return activities;
    }
    return activities.filter(a => a.actType === filterCriteria);
  }

}
