import { PipeTransform, Pipe } from '@angular/core';


@Pipe({ name: 'convertTimestamp'})
export class TimestampPipe implements PipeTransform{
    transform(timeStamp) {
        return timeStamp.toDate();
    }
    
}