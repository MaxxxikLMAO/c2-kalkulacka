import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kalkulacka';
  private num = "";

  number() {

  }

  plus() {
    this.num += "+";    
  }

  minus() {
    this.num += "-";
  }

  nasobeni() {
    this.num += "*";
  }

  deleni() {
    this.num += "/";
  }

  ac() {
    this.num = "";
  }

  equal() {
    this.num = eval(this.num);
  }

  addNumber(number) {
    this.num += number;
  }
}


 