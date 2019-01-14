import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: any): number {
    let initial:Date =  new Date();
    let todayTime: any =  new Date(initial.getTime());
    let difference =Math.abs(value-todayTime )

    let seconds = today*0.001;
    var counter = seconds/86400;
    // if (counter >= 1 && value > todayTime){
    //      return counter;
    //  }else{
    //      return 0;
    //  }
    return counter;
  }

}
