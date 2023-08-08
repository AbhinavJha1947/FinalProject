import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResearchDialogBoxComponent } from '../research-dialog-box/research-dialog-box.component';

@Component({
  selector: 'app-research-book',
  templateUrl: './research-book.component.html',
  styleUrls: ['./research-book.component.css']
})
export class ResearchBookComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ResearchDialogBoxComponent, {
      width: '400px',
      data: { title: 'Dialog Box', text: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('You wrote:', result);
      }
    });
  }
}
