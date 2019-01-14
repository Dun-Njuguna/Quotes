import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: any): number {
    let initial:Date =  new Date();
    let todayTime: any =  initial.getTime();
    let difference =Math.abs(todayTime)

    let seconds = difference*0.001;
    var counter = seconds/86400;
    var minutes = counter/60000;
    if (counter => 1 && value > todayTime){
         return minutes;
     }else{
         return 0;
     }
    // return counter;
  }

}
