import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-research-dialog-box',
  templateUrl: './research-dialog-box.component.html',
  styleUrls: ['./research-dialog-box.component.css']
})
export class ResearchDialogBoxComponent {
  showModal = true;
  inputText = '';

  constructor(private router: Router) { }

 

  closeModal(): void {
    this.showModal = false;

  }

  saveData(): void {
    // console.log('User entered:', this.inputText);
    this.closeModal();
    this.router.navigate(['/new-research']);
  }
}
