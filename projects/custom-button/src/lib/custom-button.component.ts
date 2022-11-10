import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'lib-custom-button',
   template: `
    <button *ngIf="type === 'primary'" mat-raised-button color="primary">
    {{label}}
  </button>
  <button *ngIf="type === 'secondary'" mat-stroked-button color="primary">
    {{label}}
  </button>
 `,
  styleUrls: ['./button.css'],
})
export class CustomButtonComponent  {
  @Input() label = 'Button';
  @Input() type: 'primary' | 'secondary' = 'primary';
  constructor() { }

  ngOnInit(): void {
  }



}
