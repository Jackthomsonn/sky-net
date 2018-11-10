import { IssuesPageModule } from './../pages/issues/issues.module';
import { IssuesPage } from './../pages/issues/issues';
import { RequestsPageModule } from './../pages/requests/requests.module';
import { TabsPage } from './../pages/tabs/tabs';
import { LoginPageModule } from './../pages/login/login.module';
import { LoginPage } from './../pages/login/login';
import { Keyboard } from '@ionic-native/keyboard';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MessagesPage } from './../pages/messages/messages';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TestProvider } from '../providers/test/test';
import { HttpClientModule } from '@angular/common/http';
import { SplashPage } from '../pages/splash/splash';
import { SplashPageModule } from '../pages/splash/splash.module';
import { ComponentsModule } from '../components/components.module';
import { RequestsPage } from '../pages/requests/requests';

@NgModule({
  declarations: [
    MyApp,
    MessagesPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    SplashPageModule,
    LoginPageModule,
    RequestsPageModule,
    IssuesPageModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MessagesPage,
    SplashPage,
    LoginPage,
    RequestsPage,
    IssuesPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    TestProvider
  ]
})

export class AppModule { }
