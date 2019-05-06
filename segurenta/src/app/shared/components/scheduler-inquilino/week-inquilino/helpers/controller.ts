import { CalendarEvent } from 'angular-calendar';
import * as moment from 'moment';
import { Colors } from './constants';

export class Controller {
    public floorToNearest(amount: number, precision: number) {
        return Math.floor(amount / precision) * precision;
    }

    public ceilToNearest(amount: number, precision: number) {
        return Math.ceil(amount / precision) * precision;
    }

    public builEvents(listDates: any): CalendarEvent[] {
        let events: CalendarEvent[] = [];

        listDates.forEach((e: any) => {
            if (e.estatus === 3) {
                const dragEvent: CalendarEvent = {
                    id: e.id,
                    title: 'OCUPADO',
                    start: moment(e.fecha_inicio, 'DD-MM-YYYY HH:mm:ss').toDate(),
                    end: moment(e.fecha_fin, 'DD-MM-YYYY HH:mm:ss').toDate(),
                    color: Colors.red
                };
                events = [...events, dragEvent];
            }
        });
        return events;
    }

    public builEventsDispo(listDisponibilidad: any): CalendarEvent[] {
        let events: CalendarEvent[] = [];
        listDisponibilidad.forEach((e: any) => {
            const dragEvent: CalendarEvent = {
                id: e.id,
                title: '',
                start: moment(e.fecha_inicio, 'DD-MM-YYYY HH:mm:ss').toDate(),
                end: moment(e.fecha_fin, 'DD-MM-YYYY HH:mm:ss').toDate(),
                color: Colors.yellow
            };
            events = [...events, dragEvent];
        });
        return events;
    }

    public generateEvent(ids: number): CalendarEvent {
        const dragToSelectEvent: CalendarEvent = {
            id: ids,
            title: 'Nueva Cita',
            start: new Date(),
            meta: {
                tmpEvent: true
            },
            resizable: {
                beforeStart: false,
                afterEnd: true
            }
        };
        return dragToSelectEvent;
    }
}
