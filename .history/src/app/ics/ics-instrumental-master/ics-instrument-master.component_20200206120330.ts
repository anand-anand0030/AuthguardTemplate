import { Component, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-ics',
  templateUrl: './ics-instrument-master.component.html',
  styleUrls: ['./ics-instrument-master.component.css']
})
export class IcsComponent implements AfterViewInit {
  subtitle: string;
  constructor() {
    this.subtitle = 'This is some text within a card block. ICS';
  }

  ngAfterViewInit() {}
}

