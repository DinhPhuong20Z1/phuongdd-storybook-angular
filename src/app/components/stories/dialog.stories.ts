
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { Component, Input } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomButtonComponent } from 'projects/custom-button/src/public-api';
import { ComponentDialogComponent } from 'projects/component-dialog/src/public-api';
import { NotificationComponent } from '../notification.component';



export default {
    title: 'Dialog',
    component: ComponentDialogComponent,
    decorators: [
        moduleMetadata({
            declarations: [CustomButtonComponent, NotificationComponent], // <--- 2. add component declarations
            imports: [MatDialogModule, BrowserAnimationsModule, MatButtonModule]
        })
    ]
} as Meta;

const Template: Story<ComponentDialogComponent> = (args: ComponentDialogComponent) => ({
    props: args,
});

export const Default = Template.bind({});
Default.args = {
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ex et tortor auctor fermentum. Curabitur tristique mauris sed mauris feugiat vestibulum. Quisque felis ex, auctor nec lobortis quis',
    width: '40vw'
};
