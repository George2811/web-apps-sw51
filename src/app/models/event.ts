export interface Event {
  id: number;
  title: string;
  description: string;
  dateStart: string; //DatePipe
  dateEnd: string; //DatePipe
  cost: number;
  //type is enum
}
