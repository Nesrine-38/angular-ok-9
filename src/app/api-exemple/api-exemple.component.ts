import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-api-exemple',
  templateUrl: './api-exemple.component.html',
  styleUrls: ['./api-exemple.component.css']
})
export class ApiExempleComponent {
  artworks:any[] = [];

  constructor(private http:HttpClient) {}

  fetch() {
    this.http.get<any>('https://api.artic.edu/api/v1/artworks')
    .subscribe(response => this.artworks = response.data)
  }

}
