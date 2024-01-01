import {subDays,format} from 'date-fns';

const date =  new Date(2002,11,21)
const rta =  subDays(date,30); // subdays permite restar numero de dias
const str =  format(rta,'yyy//MM/dd');
console.log('str :', str);
