import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  firstN=0;
  secondN=0;
  answer=0;

  fstInput(value: string){
    const num1 = parseInt(value);

    if (!isNaN(num1)) {
      this.firstN = num1;
      console.log(this.firstN)
    }
  }
  scndInput(value: string){
    const num2 = parseInt(value);

    if (!isNaN(num2)) {
    this.secondN = num2;
    console.log(this.secondN)
    }
  }

  oAddition(value: string){
    this.answer= this.firstN + this.secondN;
 
  }
  oSubtraction(value: string){
    this.answer= this.firstN - this.secondN;
  }
  oMultiplication(value: string){
    this.answer= this.firstN * this.secondN;
  }
  oDivision(value: string){
    this.answer= this.firstN / this.secondN;
  }
}
