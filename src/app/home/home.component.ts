import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  welcome: string;

  constructor() {
    this.welcome = '<p>Purveyor of nice food to the (sub)urban masses. </p>' +
        '<p>High Wycombe and beyond.</p>' +
    '<p>Always free range, always sustainable, always tasty.</p>';
  }

  ngOnInit() {
  }

}
