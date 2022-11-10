import { NgModule } from '@angular/core';
import { NzImageModule } from 'ng-zorro-antd/image';
import { ImageZoomComponent } from './image-zoom.component';



@NgModule({
  declarations: [
    ImageZoomComponent
  ],
  imports: [
    NzImageModule
  ],
  exports: [
    ImageZoomComponent
  ]
})
export class ImageZoomModule { }
