import { Component, AfterViewInit } from '@angular/core';
@Component({
  templateUrl: './eqs.component.html'
})
export class EqsComponent implements AfterViewInit {
  subtitle: string;
  constructor() {
    this.subtitle = 'This is some text within a card block. EQS works!';
  }

  ngAfterViewInit() {}
}
