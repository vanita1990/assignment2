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

  onUpdateUsername(event) {
    this.isEmptyUsername = true;
  }

  onAddUsername(event) {
    this.username = "";
  }
}
