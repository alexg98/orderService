import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from 'src/app/base/components/base-list.component';
import { DetalleOrdenServicio } from 'src/app/models/business.model';
import { DetalleService } from './detalle.service';
import Utils from 'src/app/shared/utils';
import { DetalleComponent } from './detalle/detalle.component';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html'
})
export class DetallesComponent extends BaseListComponent<DetalleOrdenServicio> implements OnInit {

  constructor(service : DetalleService) { 
    super(service, ['id','servicio', 'valor','tipoPrenda','localization','estado','actions']);
  }

  ngOnInit() {
  }

  openDialog(data : any){             
    this.dialog.open(DetalleComponent,Utils.getDialogConfig(data));
  }

}
