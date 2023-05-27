import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-commerce-project';
  topic: string = 'E - COMMERCE - PROJECT';
  viewMode:string='home';
  isActive:boolean=true;
}
