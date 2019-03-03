import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicioComponent } from './servicio/servicio.component';
import { ServicioService } from './servicio.service';
import { ServicioListComponent } from './servicio-list.component';
import { MaterialAppModule } from '../ngmaterial.module';

@NgModule({
  declarations: [ServicioComponent,ServicioListComponent],
  imports: [
    MaterialAppModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ServicioService],
  entryComponents:[ServicioComponent]
})
export class ServiciosModule { }
