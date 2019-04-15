import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  private answer = new BehaviorSubject('');
  currentAnswer = this.answer.asObservable();

  private a = new BehaviorSubject('');
  currentA = this.a.asObservable();

  private operation = new BehaviorSubject('');
  currentOperation = this.operation.asObservable();

  constructor() { }

  changeAnswer(newAnswer: string) {
    this.answer.next(newAnswer);
  }

  setA(value: string) {
    this.a.next(value);
  }

  setOperation(operator: string) {
    this.operation.next(operator);
  }
}
