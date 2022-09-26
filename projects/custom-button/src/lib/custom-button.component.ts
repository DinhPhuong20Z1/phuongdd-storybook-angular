import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'lib-custom-button',
   template: ` <button
   type="button"
   (click)="onClick.emit($event)"
   [ngClass]="classes"
   [style.color]='color'
 >
   {{ label }}
 </button>`,
  styleUrls: ['./button.css'],
})
export class CustomButtonComponent  {
  @Input() color: string = '#000';
  label = 'Button';
  @Input()
  primary = false;
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';

    return ['storybook-button', `storybook-button--${this.size}`, mode];
  }



}
