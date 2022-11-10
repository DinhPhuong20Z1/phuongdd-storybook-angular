import { NgModule } from '@angular/core';
import { ComponentDatePickerComponent } from './component-date-picker.component';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// import {MaterialExampleModule} from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { MaterialExampleModule } from 'src/material.module';


@NgModule({
  declarations: [
    ComponentDatePickerComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ],
  exports: [
    ComponentDatePickerComponent
  ],
  bootstrap: [ComponentDatePickerComponent],
})
export class ComponentDatePickerModule { }

// import { Meta, Story } from '@storybook/angular/types-6-0';;
// import { ComponentDatePickerComponent } from "projects/component-date-picker/src/public-api";
// export default {
//   title: "DateRange-DatePicker",
//   component: ComponentDatePickerComponent,
//   argTypes: {

//   },
// } as Meta;

// const Template: Story<ComponentDatePickerComponent> = (args: ComponentDatePickerComponent) => ({
//   props: args,
// });

// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/angular/writing-stories/args
// Primary.args = {
//   label: "Hello"
// };

