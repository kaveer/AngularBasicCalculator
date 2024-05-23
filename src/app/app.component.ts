import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {evaluate} from "mathjs";

@Component({
  selector: 'cal-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title:string = "Basic Calculator";
  result: string = "0";
  array: string[] = [];

  inputNumber(number: number) {
    if (this.result == "0")
      this.result = "";

    this.result = this.result.concat(number.toString());
    console.log(number);
  }

  inputDecimal(decimal: string)
  {
    if (this.result.indexOf(decimal) == -1){
      this.result = this.result.concat(decimal.toString());
    }
    console.log(decimal);
  }

  inputOperator(operator: string) {

    if (this.result.lastIndexOf(".") > -1)
      this.result = this.result.concat("00");

    if (this.result != "" ){
      this.array.push(this.result);
      this.array.push(operator);
      this.result = "";
    }

    let lastValue = this.array[this.array.length -1]
    console.log(lastValue);

    if (lastValue == "/")
      this.ReInputOperator(this.array, operator)
    if (lastValue == "+")
      this.ReInputOperator(this.array, operator)
    if (lastValue == "-")
      this.ReInputOperator(this.array, operator)
    if (lastValue == "*")
      this.ReInputOperator(this.array, operator)
    console.log(this.array);
  }

  private ReInputOperator(array: string[], operator: string) {
    this.array.pop();
    this.array.push(operator);
  }

  clear() {
    this.result = "0";
    this.array = [];
  }

  calculate() {
    if (this.result != "")
      this.array.push(this.result);
    console.log('calculate')
    console.log(this.array);


    console.log(this.array.join(" "))
    this.result = evaluate(this.array.join(" "));
  }
}
