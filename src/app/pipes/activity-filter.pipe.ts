import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activityFilter'
})
export class ActivityFilterPipe implements PipeTransform {
  //@Output() public filterEE: EventEmitter<IActivity> = new EventEmitter();
  transform(activities: IActivity[], filterCriteria: string): IActivity[] {
    if (!filterCriteria || filterCriteria === 'All') {
      return activities;
    }
    const filteredActivities: IActivity[] = activities.filter(a => a.actType === filterCriteria);
    // todo: спросить, можно ли где-нибудь поймать event, если его выкидывать отсюда
    // (то есть по событию срабатывания фильтрующего пайпа)
    //if (filteredActivities.length) {
    //  this.filterEE.emit(filteredActivities[0]);
    //}
    return filteredActivities;
  }

}
