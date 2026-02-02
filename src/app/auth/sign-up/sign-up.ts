import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppServer } from 'src/app/services/app-server';
import { Router } from '@angular/router';

@Component({
  selector: 'shop-sign-up',
  imports: [FormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss'
})
export class SignUp {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';

  constructor(private apiService:AppServer, private router: Router){}

  signup(){
    const credentials = {
      username: this.firstName + this.lastName[0],  
      email: this.email,
      password: this.password
    };
    this.apiService.signup(credentials).subscribe({
      next: (response) => {
        console.log('Signup successful:', response);
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Signup failed:', error);
      }
    });
  }
}
