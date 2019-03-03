import { Injectable } from "@angular/core";
import { Cliente } from '../models/business.model';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { BaseService } from '../base/services/base.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class ClienteService extends BaseService<Cliente> {
    
    clients: AngularFireList<Cliente>;

    constructor(firebase: AngularFireDatabase){
        super(firebase, 'clientes');        
    }    

    
}