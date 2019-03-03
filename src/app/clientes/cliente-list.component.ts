import { Cliente } from '../models/business.model';
import { Component } from '@angular/core';
import { MatDialogConfig } from '@angular/material';
import { BaseListComponent } from '../base/components/base-list.component';
import { DialogConfig } from '../base/utilities/global';
import { ClienteService } from './cliente.service';
import { ClienteComponent } from './cliente/cliente.component';
import Utils from '../shared/utils';

@Component({
    selector: 'app-cliente-list',
    templateUrl: './cliente-list.component.html'
  })
export class ClienteListComponent extends BaseListComponent<Cliente> {

    constructor(service: ClienteService ){
        super(service,
            ['id', 'name', 'lastName','phone','address','gender','email','actions']);
    }

    openDialog(data : any){             
        this.dialog.open(ClienteComponent,Utils.getDialogConfig(data));
      }     
}