import { Component, Inject } from '@angular/core';
import { Servicio } from '../../models/business.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BaseComponent } from '../../base/components/base.component';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html'
})
export class ServicioComponent extends BaseComponent<Servicio> {

    constructor(service: ServicioService,
        dialogRef: MatDialogRef<BaseComponent<Servicio>>,
        @Inject(MAT_DIALOG_DATA) data ) {
        super(service,dialogRef,data);
    }

    createForm() {
        this.form = new FormGroup({
            $key: new FormControl(null),
            nombre: new FormControl('', Validators.required),            
            precio: new FormControl(null, [
              Validators.required,
              Validators.pattern('[0-9]*'),
               Validators.minLength(4)]),            
            estado: new FormControl(true)
          });
    }

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      nombre: '',
      precio: null,
      estado: true
    });
  }
}   