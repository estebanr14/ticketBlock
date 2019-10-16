import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ComprarPage } from '../pages/comprar/comprar';
import { ConsultarPage } from '../pages/consultar/consultar';
import { VerificarPage } from '../pages/verificar/verificar';
import { ConexionProvider } from '../providers/conexion/conexion';
import { NotificationsProvider } from '../providers/notifications/notifications';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ComprarPage,
    ConsultarPage,
    VerificarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ComprarPage,
    ConsultarPage,
    VerificarPage
  ],
  providers: [
    StatusBar,
    BarcodeScanner,
    NotificationsProvider,
    ConexionProvider,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConexionProvider,
    NotificationsProvider
  ]
})
export class AppModule {}
