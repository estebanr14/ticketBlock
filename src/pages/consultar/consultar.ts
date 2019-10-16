import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import { NotificationsProvider } from '../../providers/notifications/notifications';
import { ConexionProvider } from '../../providers/conexion/conexion';

/**
 * Generated class for the ConsultarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consultar',
  templateUrl: 'consultar.html',
})
export class ConsultarPage {

  constructor (public notificationsProv: NotificationsProvider, private conexion: ConexionProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public navCtrl: NavController,private barcodeScanner: BarcodeScanner,  public navParams: NavParams) {
  }
  
  scannedCode: string = '';
  content: string;
  typeRequest: string;
  body: any = {};
  title: string;



  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultarPage');
  }
  private scan() {
    this.barcodeScanner.scan(
      {
        "resultDisplayDuration": 0,
        "disableSuccessBeep": true,
        "disableAnimations": true
      }).then(barcodeData => {
      this.scannedCode = barcodeData.text;
      this.scanner();      

    }).catch(err => {
      console.error('Error', err);
      this.mostrarError('Error' + err);
    });
  }

  async load() {
    this.scan();
  }

  mostrarError(mensaje: string) {
    const toast = this.toastCtrl.create({
      message: mensaje,
      duration: 2500
    });
    toast.present();
  }
  scanner(){
    this.typeRequest = 'query-ticket'


    let loading = this.loadingCtrl.create({
      content: this.content
    });
    loading.present();
    this.conexion.postRequest(this.typeRequest, this.body).subscribe((data)=>{
        loading.dismiss()
        if (data.ok == true){
          console.log(data);
        } else {
          console.log('El producto no se creó');
        }
      },(error) => {
        loading.dismiss()
        console.log(error);
        this.notificationsProv.ctrlAlertNotification('Error', 'Se produjo un error de red desconocido', '', 'Cerrar');
      }
    )
  }
}
