import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  user = {
    email: '',
    password: '',
    firstName: '',         // Add the firstName property
    lastName: '',          // Add the lastName property
    organization: '',      // Add the organization property
    contactDetails: ''     // Add the contactDetails property
  };
  constructor(private userService: UserService) {}

  registerUser() {
    this.userService.registerUser(this.user).subscribe(
      (response) => {
        console.log('User registered successfully');
      },
      (error) => {
        console.error('Registration failed:', error);
      }
    );
  }
}
