import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title: string;
  map: any = {
    lat: 51.6311379,
    lng: -0.725792,
    zoom: 12,
    title: 'Tin Kitchen',
    label: 'Tin Kitchen',
  };

  constructor() {
      this.title = "Contact Us";
  }

  ngOnInit() {
  }

}
