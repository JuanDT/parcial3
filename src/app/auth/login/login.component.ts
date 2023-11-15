import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthServiceService, private router: Router) {}

  login() {
   
    this.authService.login(this.email, this.password);

    this.router.navigate(['/dashboard']);
  }
}
