import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ComponentDialogComponent } from './component-dialog.component';



@NgModule({
  declarations: [
    ComponentDialogComponent
  ],
  imports: [
    MatButtonModule
  ],
  exports: [
    ComponentDialogComponent
  ]
})
export class ComponentDialogModule { }
