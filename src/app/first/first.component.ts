import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  name = 'Jean';
  display = false;

  message = '';

  changeName() {
    this.name += ' autre chose';
    console.log(this.name);

  }

  toggleDisplay() {
    this.display =!this.display;
  }

}
