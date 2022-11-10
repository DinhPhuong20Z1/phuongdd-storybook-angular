import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationComponent } from 'src/app/components/notification.component';

@Component({
  selector: 'lib-component-dialog',
  template: `
    <button mat-raised-button color="primary" (click)="launch()"> Launch </button>
  `,
  styles: [
  ]
})
export class ComponentDialogComponent implements OnInit {

  @Input() title = '';
  @Input() description = '';
  @Input() width = '';
  constructor(private _dialog: MatDialog) { }

  ngOnInit(): void {
  }

  launch(): void {
    this._dialog.open(NotificationComponent, {
        autoFocus: false,
        width: this.width,
        data: {
            title: this.title,
            description: this.description
        }
    });
}

}
