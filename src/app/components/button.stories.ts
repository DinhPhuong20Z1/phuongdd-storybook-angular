import { MatButtonModule } from '@angular/material/button';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CustomButtonComponent } from 'projects/custom-button/src/public-api';

export default {
  title: 'Button',
  component: CustomButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [MatButtonModule],
    })
  ]
} as Meta;

const Template: Story<CustomButtonComponent> = (args: CustomButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  type: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  type: 'secondary'
};
