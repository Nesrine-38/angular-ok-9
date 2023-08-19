import { Component } from '@angular/core';


@Component({
  selector: 'app-boucle',
  templateUrl: './boucle.component.html',
  styleUrls: ['./boucle.component.css']
})

export class BoucleComponent {
  public list= ['mdr','lool'];
  message="";

  addItem(text:string){
    this.list.push(text);
  }

}
