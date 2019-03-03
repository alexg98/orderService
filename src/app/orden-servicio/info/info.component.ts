import { Component, OnInit } from '@angular/core';
import { ClienteComponent } from 'src/app/clientes/cliente/cliente.component';
import Utils from 'src/app/shared/utils';
import { MatDialog } from '@angular/material';
import { ClienteService } from 'src/app/clientes/cliente.service';
import { FormControl } from '@angular/forms';
import { Cliente } from 'src/app/models/business.model';
import { Observable } from 'rxjs';
import { OrdenServicioComponent } from '../orden-servicio.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls:['./info.component.css']
})
export class InfoComponent implements OnInit {

  results : Observable<Cliente[]>;
  clientCtrl: FormControl;
  clienteSelect : Cliente;
  clientes : Cliente[];
  keyClienteCtrl : FormControl;
  
  constructor(private dialog : MatDialog, private serviceCli : ClienteService, 
    ) { 
    this.clientCtrl = new FormControl();
    this.keyClienteCtrl = new FormControl();

    this.clientCtrl.valueChanges.subscribe(val => {      
      this.results = this.serviceCli.getEntityByStart(val,'id', 3);
      
      if(this.results != null){
        this.results.subscribe( val => {
          this.keyClienteCtrl.setValue("");
          if(val != null && val.length > 0){
            this.clientes = val;
          }
          if(this.clientCtrl.touched){   
            this.clienteSelect = this.clientes.find( v => v.id === this.clientCtrl.value); 
            this.keyClienteCtrl.setValue(this.clienteSelect.$key);
          }          
        }) 
      }
      
    });    
  }

  ngOnInit() {
    
  }

  onCreate(){      
    var data = null;  
    if(this.clientCtrl.value && this.clienteSelect != null){
      console.log(this.clienteSelect);
      data = this.clienteSelect;
    }else if(this.clientCtrl.value && !this.clienteSelect != null){
      data = Utils.getDummyClienteWithID(this.clientCtrl.value);
    }
    this.openDialog(data)
  }

  openDialog(data : any){
    this.dialog.open(ClienteComponent, Utils.getDialogConfig(data));
  }  
}
