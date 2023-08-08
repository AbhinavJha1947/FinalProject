import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import {NewResearchComponent} from '../app/new-research/new-research.component'
const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
    { path: 'new-research', component: NewResearchComponent },
  // Add other routes as needed.
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

