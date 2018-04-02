import { Component, OnInit } from '@angular/core';
import * as feed from 'Instafeed.js';

// const feed = new Instafeed({
//   get: 'tagged',
//   tagName: 'awesome',
//   clientId: 'c621486d1dfb4b299528407259373731'
// });

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  title: string;
  feed: feed;

  constructor() {
      this.title = 'Tin Kitchen Social';
      this.feed = new feed({
        get: 'user',
        userId: '41374312',
        clientId: 'c621486d1dfb4b299528407259373731',
        accessToken: '41374312.c621486.00b30ef80f8947c98f02f8fc11107c72',
        limit: 21,
      });

      this.feed.run();
  }

}
