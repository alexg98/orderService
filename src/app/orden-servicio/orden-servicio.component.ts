import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { OrdenServicioService } from './orden-servicio.service';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InfoComponent } from './info/info.component';

@Component({
  selector: 'app-orden-servicio',
  templateUrl: './orden-servicio.component.html',
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class OrdenServicioComponent implements OnInit, OnDestroy,AfterViewInit  {
   
  @ViewChild(InfoComponent) infoComponent: InfoComponent;
  
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  
  constructor(private service : OrdenServicioService,private _formBuilder: FormBuilder) {

  }

  ngAfterViewInit () {
    //this.infoComponent.clientCtrl.setValue(16843325);
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({});
    this.firstFormGroup.registerControl("keyClienteCtrl",this.infoComponent.keyClienteCtrl);    
    this.firstFormGroup.get("keyClienteCtrl").setValidators(Validators.required);

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }  

  ngOnDestroy(){
    
  }
}
