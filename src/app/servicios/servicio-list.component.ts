import { Servicio } from '../models/business.model';
import { Injector, Component } from '@angular/core';
import { MatDialogConfig } from '@angular/material';
import { ServicioComponent } from './servicio/servicio.component';
import { BaseListComponent } from '../base/components/base-list.component';
import { ServicioService } from './servicio.service';
import { DialogConfig } from '../base/utilities/global';
import Utils from '../shared/utils';

@Component({
    selector: 'app-servicio-list',
    templateUrl: './servicio-list.component.html'
  })
export class ServicioListComponent extends BaseListComponent<Servicio> {

    constructor(service: ServicioService){
        super(service,
            ['nombre', 'precio', 'estado','actions']);
    }

    openDialog(data : any){              
        this.dialog.open(ServicioComponent,Utils.getDialogConfig(data));
      }
}