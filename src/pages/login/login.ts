import { AuthenticationProvider } from './../../providers/authentication/authentication';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage()

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage implements OnInit {
  public user: any;

  constructor(
    private navCtrl: NavController,
    private authenticationProvider: AuthenticationProvider,
    private alertCtrl: AlertController) {
  }

  public login = () => {
    this.authenticationProvider.login(this.user).subscribe((data: any) => {
      if (data.status === 'fail') {
        this.alertCtrl.create({
          title: 'Error logging you in',
          subTitle: 'Please check your details and try again',
          buttons: [{
            text: 'Try again'
          }]
        }).present()
      } else {
        this.navCtrl.setRoot(TabsPage)
        window.localStorage.setItem('roomId', data.room_id);
      }
    })
  }

  ngOnInit() {
    this.user = {
      email: 'trainstaff@example.com',
      password: 'trainstaff'
    }
  }
}
