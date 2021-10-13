import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  constructor() { }

  @Output() add: EventEmitter<string> = new EventEmitter();
  @Output() subtract: EventEmitter<string> = new EventEmitter();
  @Output() multiply: EventEmitter<string> = new EventEmitter();
  @Output() divide: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
  }

  addition(){
    this.add.emit()
  }
  subtraction(){
    this.subtract.emit()
  }
  multiplication(){
    this.multiply.emit()
  }
  division(){
    this.divide.emit()
  }

}
