import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  user = { email: '', password: '' };

  constructor(private userService: UserService) {}

  loginUser() {
    this.userService.loginUser(this.user).subscribe(
      (response) => {
        console.log('User logged in successfully');
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }
}
