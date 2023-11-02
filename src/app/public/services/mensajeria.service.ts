import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../shared/base.service";
import {Mensajeria} from "../model/mensajeria";

@Injectable({
  providedIn: 'root'
})
export class MensajeriaService extends BaseService<Mensajeria>{

  constructor(http:HttpClient) {
    super(http);
    this.resourceEndpoint = '/Mensajes';
  }
}
