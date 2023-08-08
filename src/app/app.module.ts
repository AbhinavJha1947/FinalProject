import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResearchBookComponent } from './research-book/research-book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResearchDialogBoxComponent } from './research-dialog-box/research-dialog-box.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NewResearchComponent } from './new-research/new-research.component';


@NgModule({
  declarations: [
    AppComponent,
    ResearchBookComponent,
    ResearchDialogBoxComponent,
    NewResearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule
    WelcomeComponent,
    UserRegistrationComponent,
UserLoginComponent,
ResetPasswordComponent,
    ResearchBookComponent,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
