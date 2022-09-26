import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-custom-button',
  template: `
    <p>
      <button [style.color]='color' >Hello</button>
    </p>
  `,
  styles: [
  ]
})
export class CustomButtonComponent implements OnInit {
  @Input() color: string = '#000'

  constructor() { }

  ngOnInit(): void {
  }

}
