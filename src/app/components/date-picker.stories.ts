import { Meta, Story } from '@storybook/angular/types-6-0';;
import { ComponentDatePickerComponent } from "projects/component-date-picker/src/public-api";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { MaterialExampleModule } from 'src/material.module';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { moduleMetadata } from '@storybook/angular';
export default {
  title: "DateRange-DatePicker",
  component: ComponentDatePickerComponent,
  argTypes: {

  },
  decorators: [
    moduleMetadata({
        declarations: [], // <--- 2. add component declarations
        imports: [
          BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
        ]
    })
]
} as Meta;

const Template: Story<ComponentDatePickerComponent> = (args: ComponentDatePickerComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  label: "Hello"
};
