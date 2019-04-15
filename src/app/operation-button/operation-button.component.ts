import { Component, OnInit, Input } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-operation-button',
  templateUrl: './operation-button.component.html',
  styleUrls: ['./operation-button.component.css']
})
export class OperationButtonComponent implements OnInit {
  @Input() operator: string;
  answer: string;
  a: string;
  operation: string;

  constructor(private data: DataserviceService) { }

  ngOnInit() {
    this.data.currentAnswer.subscribe(answer => this.answer = answer);
    this.data.currentA.subscribe(value => this.a = value);
    this.data.currentOperation.subscribe(operator => this.operation = operator);
  }

  setOperation() {
    switch (this.operator) {
      case '+': this.refresh(); this.data.setOperation('+'); break;
      case '-': this.refresh(); this.data.setOperation('-'); break;
      case '*': this.refresh(); this.data.setOperation('*'); break;
      case '/': this.refresh(); this.data.setOperation('/'); break;
      case '=': this.calculate(); break;
      case 'C': this.data.changeAnswer(''); break;
      case '<-': this.data.changeAnswer(this.answer.slice(0, -1));
    }
  }

  refresh() {
    this.data.setA(this.answer); this.data.changeAnswer('');
  }

  calculate() {
    switch (this.operation) {
      case '+': this.data.changeAnswer(String(parseFloat(this.a) + parseFloat(this.answer))); break;
      case '-': this.data.changeAnswer(String(parseFloat(this.a) - parseFloat(this.answer))); break;
      case '*': this.data.changeAnswer(String(parseFloat(this.a) * parseFloat(this.answer))); break;
      case '/': this.data.changeAnswer(String(parseFloat(this.a) / parseFloat(this.answer))); break;
    }
  }
}
