import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ComprarPage } from '../comprar/comprar';
import { ConsultarPage } from '../consultar/consultar';
import { VerificarPage } from '../verificar/verificar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  comprar(){
    this.navCtrl.push(ComprarPage);
  }
  consultar(){
    this.navCtrl.push(ConsultarPage);
  }
  verificar(){
    this.navCtrl.push(VerificarPage);
  }
}

