import { ImageZoomComponent } from "projects/image-zoom/src/public-api";
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { NzImageModule } from "ng-zorro-antd/image";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

export default {
  title: 'Image/basic',
  component: ImageZoomComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [NzImageModule, BrowserAnimationsModule],
    })
  ]
} as Meta

const Template: Story<ImageZoomComponent> = (args: ImageZoomComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  url: "https://cdn.volio.vn/Lien_he_c7ee3c844c.webp",
  disblePreview: false,

};
