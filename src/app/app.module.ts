import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';


import { CustomButtonModule } from './../../projects/custom-button/src/lib/custom-button.module';
import { MyLibModule } from 'projects/my-lib/src/public-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialExampleModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { ComponentDatePickerModule } from 'projects/component-date-picker/src/public-api';
import { NotificationComponent } from './components/notification.component';
import { ComponentDialogModule } from 'projects/component-dialog/src/public-api';
import en from '@angular/common/locales/en';

import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

import { registerLocaleData } from '@angular/common';
import { ImageZoomModule } from 'projects/image-zoom/src/public-api';
import { ZoroModuleModule } from './components/Ant-zoro/zoro-module.module';



registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  declarations: [AppComponent, NotificationComponent],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    BrowserModule,
    // NgxsModule.forRoot([], { developmentMode: !environment.production, }),
    // NgxsReduxDevtoolsPluginModule.forRoot(),
    // NgxsLoggerPluginModule.forRoot({ disabled: environment.production, }),
    CustomButtonModule,
    MyLibModule,
    ComponentDatePickerModule,
    ComponentDialogModule,
    ImageZoomModule,
    ZoroModuleModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons }],
  bootstrap: [AppComponent],
})
export class AppModule {}
