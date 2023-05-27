import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.css']
})
export class UnauthorizedComponent {
  imgUrl: string = "assets/not-found-vector.jpg"
  constructor(private router: Router) {

  }
  go() {
    this.router.navigate(['/products'])
  }

}
