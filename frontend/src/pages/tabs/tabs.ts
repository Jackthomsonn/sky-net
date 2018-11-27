import { NavController, ActionSheetController } from 'ionic-angular';
import { RequestsPage } from './../requests/requests';
import { Component } from '@angular/core';
import { IssuesPage } from '../issues/issues';
import { SplashPage } from '../splash/splash';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
  public requests = RequestsPage;
  public issues = IssuesPage;

  constructor(
    private navCtrl: NavController,
    private actionSheetCtrl: ActionSheetController
  ) { }

  public logout = () => {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Are you sure you want to logout?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.navCtrl.setRoot(SplashPage);
          }
        }, {
          text: 'No'
        }
      ]
    });

    actionSheet.present();
  }
}
