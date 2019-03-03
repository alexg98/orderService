import { Injectable } from "@angular/core";
import { Servicio } from '../models/business.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { BaseService } from '../base/services/base.service';

@Injectable({
    providedIn: 'root'
  })
export class ServicioService extends BaseService<Servicio> {
    
    constructor(firebase: AngularFireDatabase){
        super(firebase, 'servicios');        
    }
}