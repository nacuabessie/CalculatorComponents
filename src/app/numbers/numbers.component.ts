import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  constructor() { }

  @Output() getvalue1 = new EventEmitter<string>();
  @Output() getvalue2 = new EventEmitter<string>();

  ngOnInit(): void {
  }

  getFirstVal(value:string){
    this.getvalue1.emit(value);
  }
  getSecondVal(value:string){
    this.getvalue1.emit(value);
  }
  
 
}
