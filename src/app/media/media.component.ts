import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  title : string;

  constructor() {
      this.title = "Tin Kitchen Media";
  }

  ngOnInit() {
  }

}
