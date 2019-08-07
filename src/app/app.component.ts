import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isEmptyUsername = false;
  username = "";
  title = 'assignment2';
  value1 = 0;
  value2 = 0;
  result = 0;
  onUpdateUsername(event) {
    this.isEmptyUsername = true;
  }

  onAddUsername(event) {
    this.username = "";
  }
  onAddition(event) {
    var x = document.getElementById("value1") as HTMLInputElement;
    var y = document.getElementById("value2") as HTMLInputElement;
    
    this.result = +x.value + +y.value;
    console.log(this.result);
  }
}
