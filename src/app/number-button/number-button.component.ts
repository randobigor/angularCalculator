import { Component, OnInit, Input } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-number-button',
  templateUrl: './number-button.component.html',
  styleUrls: ['./number-button.component.css']
})
export class NumberButtonComponent implements OnInit {

  @Input() digit: string;
  private answer: string;

  constructor(private data: DataserviceService) { }

  ngOnInit() {
    this.data.currentAnswer.subscribe(answer => this.answer = answer);
  }

  setDigit() {
    this.data.changeAnswer(this.answer += this.digit);
  }

}
