import { Injectable } from "@angular/core";
import { Servicio, Cliente } from '../models/business.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { BaseService } from '../base/services/base.service';

@Injectable({
    providedIn: 'root'
  })
export class ClienteService extends BaseService<Cliente> {
    
    constructor(firebase: AngularFireDatabase){
        super(firebase, 'clientes');        
    }
}