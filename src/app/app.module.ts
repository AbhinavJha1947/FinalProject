import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
