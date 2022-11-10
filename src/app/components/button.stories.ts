

 // also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CustomButtonComponent } from '../../../projects/custom-button/src/lib/custom-button.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: CustomButtonComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {

  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<CustomButtonComponent> = (args: CustomButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button Hello',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button Hello',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button Hello',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button Hello',
};
