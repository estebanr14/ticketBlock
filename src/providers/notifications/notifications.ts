import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the NotificationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotificationsProvider {

  constructor( private ctrlalert: AlertController,public http: HttpClient) {
    console.log('Hello NotificationsProvider Provider');
  }
  ctrlAlertNotification(title: string, message: string, subTitle: string, button: string) {
    this.ctrlalert.create({
      title: title,
      subTitle: subTitle,
      message: message,
      buttons: [button]
    }).present();
  }

}
