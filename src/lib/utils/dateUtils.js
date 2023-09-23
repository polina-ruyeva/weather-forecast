import { format } from 'date-fns';

export function calcDate(date) {
    return format(new Date(date * 1000), 'dd.MM.yyyy');
}