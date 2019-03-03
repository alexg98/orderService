import { Component, Inject } from '@angular/core';
import { Cliente } from '../models/business.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BaseComponent } from '../base/components/base.component';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html'
})
export class ClienteComponent extends BaseComponent<Cliente> {

    constructor(service: ClienteService,
        dialogRef: MatDialogRef<BaseComponent<Cliente>>,
        @Inject(MAT_DIALOG_DATA) data ) {
        super(service,dialogRef,data);
    }

    createForm() {
        this.form = new FormGroup({
            $key: new FormControl(null),
            id: new FormControl(null, [
              Validators.required,
              Validators.pattern('[0-9]*'),
              Validators.minLength(8) ]),  
            name: new FormControl('', Validators.required),            
            lastName: new FormControl('', Validators.required),  
            phone: new FormControl(null, Validators.required), 
            address: new FormControl(''),
            gender: new FormControl('1'),    
            email: new FormControl('', Validators.email)
          });
    }

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      id: null,
      name: '',
      lastName: '',
      phone : null,
      address : '',
      gender : '1',
      email : ''
    });
  }
}   