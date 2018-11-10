import { LoginPage } from './../login/login';
import { MessagesPage } from './../messages/messages';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})

export class SplashPage {

  constructor(public navCtrl: NavController) {
  }

  public goToPassengerPage = () => {
    this.navCtrl.push(MessagesPage);
  }

  public goToLogin = () => {
    this.navCtrl.push(LoginPage);
  }
}
