import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data :object) {}

  ngOnInit() {
  }

  onClose() {
    this.thisDialogRef.close(false);
  }

  onOk() {
    this.thisDialogRef.close(true);
  }

}
