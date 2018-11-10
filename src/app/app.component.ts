import { Component, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SplashPage } from '../pages/splash/splash';

@Component({
  templateUrl: 'app.html'
})

export class MyApp implements OnInit {
  rootPage: any = SplashPage;

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen) { }

  async ngOnInit() {
    await this.platform.ready();

    this.statusBar.styleDefault();
    this.splashScreen.hide();
  }
}
