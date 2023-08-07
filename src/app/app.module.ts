import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { UserRegistrationComponent } from './user-registration/user-registration.component';
=======
import { ResearchBookComponent } from './research-book/research-book.component';
>>>>>>> dc0c8c73240728957638f430c0b05a27268a6d85

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    UserRegistrationComponent
=======
    ResearchBookComponent
>>>>>>> dc0c8c73240728957638f430c0b05a27268a6d85
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
