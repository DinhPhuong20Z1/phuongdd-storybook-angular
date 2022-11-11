import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NzImageModule } from 'ng-zorro-antd/image';
import { MultipleImageComponent } from './image/multiple-image/multiple-image.component';
import { MenuZoroComponent } from './menu/menu-zoro/menu-zoro.component';



@NgModule({
  declarations: [MultipleImageComponent, MenuZoroComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ScrollingModule,
    DragDropModule,
    NzImageModule
  ],
  bootstrap: [ MultipleImageComponent ],
})
export class ZoroModuleModule { }
