export type Child = { id: string; name: string; color: string; };
export type Activity = {
  id: string; childId: string; name: string; cost: number;
  paymentDate: string; type: 'lesson' | 'subscription';
  remindDaysBefore?: number;
};
export type Event = {
  id: string; activityId: string; date: string; time: string;
  note?: string; isSpecialTask: boolean;
};
