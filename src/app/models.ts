export enum DayOfWeek {
  Monday = 'MONDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY',
  Thursday = 'THURSDAY',
  Friday = 'FRIDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY'
}

export interface Place {
  id: string;
  name: string;
  address: string;
  open: boolean;
  openingHours: WeekDayInterval[];
}

export interface WeekDayInterval {
  dayOfWeek: DayOfWeek;
  intervals: Interval[];
}

export interface ScheduleInterval {
  period: string;
  intervals: Interval[];
}

export interface Interval {
  from: string;
  to: string;
}
