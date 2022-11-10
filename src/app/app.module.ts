import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TaskModule } from './components/task.module';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

import { InboxScreenComponent } from './components/inbox-screen.component';
import { PureInboxScreenComponent } from './components/pure-inbox-screen.component';
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

@NgModule({
  declarations: [AppComponent, InboxScreenComponent, PureInboxScreenComponent, NotificationComponent],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    BrowserModule,
    TaskModule,
    // NgxsModule.forRoot([], { developmentMode: !environment.production, }),
    // NgxsReduxDevtoolsPluginModule.forRoot(),
    // NgxsLoggerPluginModule.forRoot({ disabled: environment.production, }),
    CustomButtonModule,
    MyLibModule,
    ComponentDatePickerModule,
    ComponentDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
