
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../../environments/environment';
import { LocationStrategy, Location } from '@angular/common';
import { MessageRequest } from '../../app/data/messageRequest'
import { Message } from '../data/message';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient, private locationStrategy: LocationStrategy) { }


  getMessagesBySnapShotId(snapShotId: number) {


    let params: HttpParams = new HttpParams()
      .append("snapShotId", snapShotId.toString())

  let  baseUrl = environment.baseUrl;

    let apiUrl = baseUrl + 'message';
    return this.http.get<Message[]>(apiUrl, { params: params });
  }


  postBatchToPpocess(batchSize: number, messageSize: number) {

    let obj: MessageRequest = {
      batchSize: batchSize,
      numOfMessages: messageSize
    }

    let baseUrl = environment.baseUrl;

    let apiUrl = baseUrl + 'message';
    return this.http.post<number>(apiUrl, obj);
  }

  getAllMessages() {

    let baseUrl = environment.baseUrl;

    let apiUrl = baseUrl + 'message/all';
    return this.http.get<Message[]>(apiUrl);
  }


}
