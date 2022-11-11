
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { NzImageModule } from "ng-zorro-antd/image";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MultipleImageComponent } from '../Ant-zoro/image/multiple-image/multiple-image.component';

export default {
  title: 'Image/multiple',
  component: MultipleImageComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [NzImageModule, BrowserAnimationsModule],
    })
  ]
} as Meta

const Template: Story<MultipleImageComponent> = (args: MultipleImageComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  // url: "https://cdn.volio.vn/Lien_he_c7ee3c844c.webp",
  // disblePreview: false,
  data: [
    {url: "https://cdn.volio.vn/Lien_he_c7ee3c844c.webp", disblePreview: true},
    {url: "https://cdn.volio.vn/z3759273038395_1ecb730f9ef5af7bd566ae13d52bcee2_a4d2bdcc35.webp", disblePreview: false},
    {url: "", disblePreview: false,
  },
  ]
};
