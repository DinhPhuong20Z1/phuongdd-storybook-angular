
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

@NgModule({
 declarations: [AppComponent, InboxScreenComponent, PureInboxScreenComponent],
  imports: [


  BrowserModule,
    TaskModule,
    // NgxsModule.forRoot([], { developmentMode: !environment.production, }),
    // NgxsReduxDevtoolsPluginModule.forRoot(),
    // NgxsLoggerPluginModule.forRoot({ disabled: environment.production, }),
    CustomButtonModule,
    MyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
