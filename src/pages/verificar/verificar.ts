import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import { ConexionProvider } from '../../providers/conexion/conexion';
import { NotificationsProvider } from '../../providers/notifications/notifications';




@IonicPage()
@Component({
  selector: 'page-verificar',
  templateUrl: 'verificar.html',
})
export class VerificarPage {

  constructor(public notificationsProv: NotificationsProvider, private conexion: ConexionProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public navCtrl: NavController,private barcodeScanner: BarcodeScanner, public navParams: NavParams) {
  }
  scannedCode: string = '';
  content: string;
  typeRequest: string;
  body: any = {};
  title: string;





  ionViewDidLoad() {
    console.log('ionViewDidLoad VerificarPage');
  }


  private scan() {
    this.barcodeScanner.scan(
      {
        "resultDisplayDuration": 0,
        "disableSuccessBeep": true,
        "disableAnimations": true
      }).then(barcodeData => {
      this.scannedCode = barcodeData.text;

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
