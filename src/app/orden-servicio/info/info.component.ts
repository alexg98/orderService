import { Component, OnInit } from '@angular/core';
import { ClienteComponent } from 'src/app/clientes/cliente/cliente.component';
import Utils from 'src/app/shared/utils';
import { MatDialog } from '@angular/material';
import { Subject } from 'rxjs';
import { Cliente } from 'src/app/models/business.model';
import { ClienteService } from 'src/app/clientes/cliente.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls:['./info.component.css']
})
export class InfoComponent implements OnInit {

  results : any;
  searchValue: string = "";

  constructor(private dialog : MatDialog, private serviceCli : ClienteService) { }

  ngOnInit() {
    
  }

  onCreate(){
    this.openDialog(null)
  }

  openDialog(data : any){
    this.dialog.open(ClienteComponent, Utils.getDialogConfig(data));
  }

  search() {
    this.results = this.serviceCli.getEntityByStart(this.searchValue,'id', 3);
  }
}
