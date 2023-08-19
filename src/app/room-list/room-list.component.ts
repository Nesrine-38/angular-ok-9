import { Component } from '@angular/core';
import { Room } from '../entities';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent {

  list:Room[] = [
    {id: 1, name: 'Living Room', surface: 15, opened: true},
    {id: 2, name: 'Bathroom', surface: 5, opened: false},
    {id: 3, name: 'Bedroom', surface: 10, opened: false}
  ];

  addRoom(room:Room) {
    this.list.push(room);
    //Si on veut remettre le formulaire à zéro
    // this.newRoom = {id: 0, name: '', opened: false, surface: 0};
  }

  deleteRoom(room:Room) {
    this.list = this.list.filter(item => item != room);
  }

}
