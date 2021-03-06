import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataserviceService } from './dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  answer: string;

  constructor(private data: DataserviceService) {}

  ngOnInit() {
    this.data.currentAnswer.subscribe(answer => this.answer = answer);
  }
}
