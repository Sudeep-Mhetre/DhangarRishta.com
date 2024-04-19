import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoginFormVisible: boolean = true;


  constructor( private router : Router) { }

  ngOnInit(): void {
  }

  login(){

  }
  register(){

  }
  closeLogin(){
    this.router.navigate(['/']);
  }
}
