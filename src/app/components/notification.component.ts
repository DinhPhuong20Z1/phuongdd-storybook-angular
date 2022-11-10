import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
  title: string;
  description: string;
}

@Component({
  selector: 'app-notification',
  template: `
  <h1>{{data.title}}</h1>
  <p>{{data.description}}</p>
  <lib-custom-button label="Okay"></lib-custom-button>
  `,
})
export class NotificationComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  ngOnInit(): void {
  }

}
