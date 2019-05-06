// import { CalendarEventAction, CalendarEvent } from 'angular-calendar';

// const actionsEvents: CalendarEventAction[] = [
//   {
//     label: '<i class="fa fa-fw fa-pencil-alt"></i>',
//     onClick: ({ event }: { event: CalendarEvent }): void => {
//       this.handleEvent('Edited', event);
//     }
//   },
//   {
//     label: '<i class="fa fa-fw fa-times"></i>',
//     onClick: ({ event }: { event: CalendarEvent }): void => {
//       this.events = this.events.filter((iEvent: any) => iEvent !== event);
//       this.handleEvent('Deleted', event);
//     }
//   }
// ];

// const actionsNewEvent: CalendarEventAction[] = [
//   {
//     label: '<i class="fa fa-fw fa-times"></i>',
//     onClick: ({ event }: { event: CalendarEvent }): void => {
//       this.events = this.events.filter((iEvent: any) => iEvent !== event);
//       this.handleEvent('Deleted', event);
//     }
//   }
// ];

export const Colors: any = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3'
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF'
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA'
    }
};
