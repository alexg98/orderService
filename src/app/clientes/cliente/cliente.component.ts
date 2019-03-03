import { Component, Inject } from '@angular/core';
import { Cliente } from '../../models/business.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BaseComponent } from '../../base/components/base.component';
import { ClienteService } from '../cliente.service';
import { map } from 'rxjs/operators';

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

   /**
   * Validate before save or update Cliente
   */
  onSubmit(){
    let subcription = this.service.getEntityByField(this.form.value.id,'id')
    .pipe(map(changes =>
      changes.map(value => {
          if (value.payload.val().id === this.form.value.id && !this.form.get('$key').value) {
            throw new Error('Ya existe un cliente con ese numero de Identificación')
          }
          if (this.form.get('$key').value !== value.payload.key ) {
            throw new Error('El numero de identificación esta asignado a ' 
              + value.payload.val().name + " " +value.payload.val().lastName)
          }          
          return null;
      })))      
    .subscribe(res => {
      this.merge(); subcription.unsubscribe();
    }, error => this.notificationService.warn(error));
    
  }
}   