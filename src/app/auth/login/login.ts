import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'shop-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  email: string;
  password: string;

  constructor() {
      this.email = '';
      this.password = '';
  }

  login() {
      // Implement login logic here
      console.log('Logging in with', this.email, this.password);
  }
}
