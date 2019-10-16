import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";


/*
  Generated class for the ConexionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConexionProvider {
  private url: string = "http://192.168.1.12:8085";


  constructor(public http: HttpClient) {
    console.log('Hello ConexionProvider Provider');
  }
  postRequest(typeRequest: string, body: any): Observable<any> {
    let url = this.url + '/' + typeRequest;
    let postData = new FormData();
    postData = (body);
    return this.http.post(url, postData);
  }
  getRequest(typeRequest: string, body: any): Observable<any> {
    let url = this.url + '/' + typeRequest;
    return this.http.get(url);
  }



}
