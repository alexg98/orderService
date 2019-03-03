import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteListComponent } from './cliente-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClienteService } from './cliente.service';
import { MaterialAppModule } from '../ngmaterial.module';

@NgModule({
  declarations: [ClienteComponent,ClienteListComponent],
  imports: [
    MaterialAppModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [ClienteComponent],
  providers: [ClienteService],
  entryComponents:[ClienteComponent]
  
})
export class ClientesModule { }
