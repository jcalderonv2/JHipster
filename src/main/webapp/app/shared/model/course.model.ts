import { Moment } from 'moment';

export interface ICourse {
  id?: number;
  name?: string;
  start?: Moment;
  end?: Moment;
  students?: number;
}

export class Course implements ICourse {
  constructor(public id?: number, public name?: string, public start?: Moment, public end?: Moment, public students?: number) {}
}
