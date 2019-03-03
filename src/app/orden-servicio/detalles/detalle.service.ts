import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';
import { DetalleOrdenServicio } from 'src/app/models/business.model';
import { BaseService } from 'src/app/base/services/base.service';
import { OrdenServicioService } from '../orden-servicio.service';

@Injectable({
    providedIn: 'root'
  })
export class DetalleService extends BaseService<DetalleOrdenServicio> {
    
    constructor(firebase: AngularFireDatabase){
        super(firebase, 'detalleOrdenServicio');        
    }    
}