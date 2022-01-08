import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timeElapsed',
  pure:false
})
export class TimeElapsedPipe implements PipeTransform {

  transform(value: any): any {
    
    var refresh=function refresh(){
      var timeElapsed=moment(value).fromNow();
     return timeElapsed;

    }
    
    var timer=setInterval(refresh,50000);
    return refresh();
  }

}
