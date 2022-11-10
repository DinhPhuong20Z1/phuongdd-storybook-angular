import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-image-zoom',
  template: `
    <img
      nz-image
      width="200px"
      height="200px"
      nzSrc="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      alt=""
    />
  `,
  styles: [
  ]
})
export class ImageZoomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
