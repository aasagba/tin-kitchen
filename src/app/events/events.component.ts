import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  title : string;

  constructor() {
      this.title = "Tin Kitchen Events";
  }

  ngOnInit() {
  }

}
