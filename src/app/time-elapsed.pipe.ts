import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timeElapsed',
  pure:false
})
export class TimeElapsedPipe implements PipeTransform {

  transform(value: any): any {
    let now:any=new Date();

    var timeDifference=Math.abs(now-value)
    var timeDifferenceInSeconds=timeDifference * 0.001;

    // var timeElapsed=moment(value).fromNow();

    // // return timeDifferenceInSeconds;
    // return timeElapsed;

    
    var refresh=function refresh(){
      var timeElapsed=moment(value).fromNow();
    // return timeDifferenceInSeconds;
     return timeElapsed;

    }
    // refresh();
    setInterval(refresh,1000);
    return refresh()
  }

}
