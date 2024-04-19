import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginComponent } from './login/login.component';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'matrimonyWeb';
  isLoginClicked: boolean = false;
  images = [
    { path: '../assets/images/img_1.png' },
    { path: '../assets/images/img_1.png' },
  ]


  constructor(public router: Router, private activeRoute: ActivatedRoute) {
  }

  

}
