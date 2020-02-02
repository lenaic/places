import { Pipe, PipeTransform } from '@angular/core';
import { WeekDayInterval, Interval, DayOfWeek, ScheduleInterval } from './models';

@Pipe({
  name: 'weekSchedule'
})
export class WeekSchedulePipe implements PipeTransform {

  private static hashIntervals(intervals: Interval[]): string {
    return intervals.map(interval => `${interval.from}-${interval.to}`).join(',');
  }

  transform(weekDayIntervals: WeekDayInterval[], ...args: any[]): ScheduleInterval[] {
    const days = [
      DayOfWeek.Monday,
      DayOfWeek.Tuesday,
      DayOfWeek.Wednesday,
      DayOfWeek.Thursday,
      DayOfWeek.Friday,
      DayOfWeek.Saturday,
      DayOfWeek.Sunday
    ];

    const dayDescriptions = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ]

    const scheduleIntervals: ScheduleInterval[] = [];
    let currentIntervals = [];
    let currentIntervalsHash = WeekSchedulePipe.hashIntervals(currentIntervals);
    let lastOutputIdx = -1;
    let next = 0;

    for (let idx = 0; idx < days.length; idx++) {
      const referenceDay = days[idx];
      let intervals = [];
      if (next < weekDayIntervals.length && weekDayIntervals[next].dayOfWeek === referenceDay) {
        intervals = weekDayIntervals[next].intervals;
        next++;
      }

      const intervalsHash = WeekSchedulePipe.hashIntervals(intervals);

      if (intervalsHash !== currentIntervalsHash) {
        const length = (idx - 1) - lastOutputIdx;
        if (length > 0) {
          scheduleIntervals.push({
            period: length > 1 ? `${dayDescriptions[lastOutputIdx + 1]} - ${dayDescriptions[idx - 1]}` : dayDescriptions[lastOutputIdx + 1],
            intervals: currentIntervals
          });
        }

        lastOutputIdx = idx - 1;
        currentIntervals = intervals;
        currentIntervalsHash = intervalsHash;
      }
    }

    const length = (days.length - 1) - lastOutputIdx;
    if (length > 0) {
      scheduleIntervals.push({
        period: length > 1 ? `${dayDescriptions[lastOutputIdx + 1]} - ${dayDescriptions[days.length - 1]}` : dayDescriptions[days.length - 1],
        intervals: currentIntervals
      });
    }

    return scheduleIntervals;
  }

}
