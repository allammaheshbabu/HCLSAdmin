import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string='';
  password: string = '';
  
  constructor(private router: Router) {}

  onLogin() {
    // if (this.email === 'admin@gmail.com' && this.password === 'admin') {
    //   this.router.navigate(['/maprofile']);
    // } else {
    //   alert('Invalid credentials');
    // }
  }
}
