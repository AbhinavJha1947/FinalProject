import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  user = { email: '' };

  constructor(private userService: UserService) {}

  resetPassword() {
    this.userService.resetPassword(this.user.email).subscribe(
      (response) => {
        console.log('Password reset link sent successfully');
      },
      (error) => {
        console.error('Password reset request failed:', error);
      }
    );
  }
}
