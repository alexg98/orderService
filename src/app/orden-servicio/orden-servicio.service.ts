import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';
import { BaseService } from '../base/services/base.service';
import { OrdenServicio } from '../models/business.model';

@Injectable({
    providedIn: 'root'
  })
export class OrdenServicioService extends BaseService<OrdenServicio> {
    
    constructor(firebase: AngularFireDatabase){
        super(firebase, 'orderService');        
    }
}