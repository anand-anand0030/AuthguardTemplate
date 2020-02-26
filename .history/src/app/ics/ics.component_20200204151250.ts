import { Component, OnInit ,AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-ics',
  templateUrl: './ics.component.html',
  styleUrls: ['./ics.component.css']
})
export class IcsComponent implements AfterViewInit {
  subtitle: string;
  constructor() {
    this.subtitle = 'This is some text within a card block. ICS';
  }

  ngAfterViewInit() {}
}

