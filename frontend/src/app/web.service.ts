import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class WebService {
readonly ROOT_URL;
  constructor(private HttpClient: HttpClient) {
    this.ROOT_URL="http://localhost:3000";
   }
    get(uri:string){
     return this.HttpClient.get('${this.ROOT_URL}/${uri}');
   }
   post(uri:string, payload:Object){
    return this.HttpClient.post('${this.ROOT_URL}/${uri}',payload);
  }
  patch(uri:string, payload:Object){
    return this.HttpClient.patch('${this.ROOT_URL}/${uri}',payload);
  }
  delete(uri:string){
    return this.HttpClient.delete('${this.ROOT_URL}/${uri}');
  }

}
