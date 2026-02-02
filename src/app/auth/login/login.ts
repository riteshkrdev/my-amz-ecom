import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AppServer } from 'src/app/services/app-server';

@Component({
  selector: 'shop-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  email: string;
  password: string;

  constructor(private apiService:AppServer, private router: Router) {
      this.email = 'donero';
      this.password = 'ewedon';
      this.apiService.getUsers().subscribe(users => {
          console.log('Fetched users:', users);
      });
  }

  login() {
      this.apiService.login({username: this.email, password: this.password}).subscribe({
  next: (response) => {
    // response will look like { token: "eyJhbGciOiJIUzI1Ni..." }
    localStorage.setItem('userToken', response.token);
    this.router.navigate(['/main']);
  },
  error: (err) => {
    alert('Login Failed! Check your username and password.');
  }
});
      console.log('Logging in with', this.email, this.password);
  }
}
