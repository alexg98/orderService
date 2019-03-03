import { Cliente } from '../models/business.model';
import { Component } from '@angular/core';
import { MatDialogConfig } from '@angular/material';
import { BaseListComponent } from '../base/components/base-list.component';
import { DialogConfig } from '../base/utilities/global';
import { ClienteService } from './cliente.service';
import { ClienteComponent } from './cliente.component';

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
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = DialogConfig.disableClose;
        dialogConfig.autoFocus = DialogConfig.autoFocus;
        dialogConfig.width = DialogConfig.width;
        if(data != null){
          dialogConfig.data = data;
        }      
        this.dialog.open(ClienteComponent,dialogConfig);
      }
}