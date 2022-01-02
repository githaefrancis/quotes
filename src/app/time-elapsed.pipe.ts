import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeElapsed'
})
export class TimeElapsedPipe implements PipeTransform {

  transform(value: any): any {
    let now:any=new Date();

    var timeDifference=Math.abs(now-value)
    var timeDifferenceInSeconds=timeDifference * 0.001;
    return timeDifferenceInSeconds;
  }

}
