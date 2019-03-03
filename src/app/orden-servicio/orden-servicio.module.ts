import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdenServicioComponent } from './orden-servicio.component';
import { MaterialAppModule } from '../ngmaterial.module';
import { ClientesModule } from '../clientes/clientes.module';
import { InfoComponent } from './info/info.component';
import { ResumenComponent } from './resumen/resumen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { DetallesComponent } from './detalles/detalles.component';
import { DetalleComponent } from './detalles/detalle/detalle.component';
import { MatStepperModule } from '@angular/material';

@NgModule({
  declarations: [OrdenServicioComponent, InfoComponent, DetalleComponent, ResumenComponent, DetallesComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    MaterialAppModule,
    MatStepperModule,
    CommonModule,
    ClientesModule
  ],
  entryComponents:[DetalleComponent]
})
export class OrdenServicioModule { }
