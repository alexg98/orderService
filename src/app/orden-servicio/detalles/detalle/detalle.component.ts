import { Component, OnInit, Inject, Self } from '@angular/core';
import { BaseComponent } from 'src/app/base/components/base.component';
import { DetalleOrdenServicio, Servicio } from 'src/app/models/business.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DetalleService } from '../detalle.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServicioService } from 'src/app/servicios/servicio.service';
import { TipoPrenda } from 'src/environments/environment';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls:['./detalle.component.css']
})
export class DetalleComponent extends BaseComponent<DetalleOrdenServicio>  implements OnInit {

  listTipoServicios : Servicio[];
  tiposPrenda = TipoPrenda;
  keysTP = Object.keys;

  constructor(service: DetalleService,
    dialogRef: MatDialogRef<BaseComponent<DetalleOrdenServicio>>,
    @Inject(MAT_DIALOG_DATA) data,
    private servicioService : ServicioService ) {
    super(service,dialogRef,data);
  }

  ngOnInit() {
    super.ngOnInit();
    var list = this.servicioService.findAll();    

    this.servicioService.pipe(list).subscribe(val => {
      this.listTipoServicios = val;
    })

    this.form.get('servicio').valueChanges.subscribe( change => {      
      var value = this.listTipoServicios.find( ser => ser.$key === change);
      if(value != null){
        this.form.get('valor').setValue( value.precio );
      }      
    })
  }
  
  createForm() {
    this.form = new FormGroup({
      $key: new FormControl(null),
      id: new FormControl(null),
      id_orden: new FormControl(''),            
      servicio: new FormControl('', Validators.required),            
      valor: new FormControl(0, [
        Validators.required,
        Validators.pattern('[0-9]*'),
        Validators.minLength(4) ]),  
      tipoPrenda: new FormControl(null, Validators.required), 
      localization: new FormControl(''),
      estado: new FormControl(1)
    });
  }

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      id: null,
      id_orden: null,
      servicio: '',
      valor: null,
      tipoPrenda : null,
      localization : '',
      estado : '1' 
    });
  }
}