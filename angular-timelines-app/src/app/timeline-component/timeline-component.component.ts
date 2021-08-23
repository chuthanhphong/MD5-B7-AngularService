import {Component, OnChanges, OnInit} from '@angular/core';
import {DateUtilService} from '../service/date-util.service';

@Component({
  selector: 'app-timeline-component',
  templateUrl: './timeline-component.component.html',
  styleUrls: ['./timeline-component.component.css']
})
export class TimelineComponentComponent implements OnInit{
output = '';

  constructor(private dateUtilService : DateUtilService) {
  }

  ngOnInit() {
  }

  OnChange(value): void {
    this.output = this.dateUtilService.getDiffToNow(value);
  }


}
