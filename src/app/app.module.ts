import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppRoutingModule, appRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { NameComponent } from './name/name.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { RouterModule } from '@angular/router';
import { setAppInjector } from './app-injector';
import { MaterialAppModule } from './ngmaterial.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';
import { ServicioService } from './servicio/servicio.service';
import { ServicioComponent } from './servicio/servicio.component';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicioListComponent } from './servicio/servicio-list.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteListComponent } from './cliente/cliente-list.component';
import { ClienteService } from './cliente/cliente.service';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    MyDashboardComponent,
    NameComponent,
    FirstPageComponent,
    NameComponent,
    ServicioComponent,
    ServicioListComponent,
    ClienteComponent,
    ClienteListComponent,
    MatConfirmDialogComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    RouterModule.forRoot(appRoutes),
    MaterialAppModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule
  ],
  providers: [ServicioService,ClienteService, DatePipe],
  bootstrap: [AppComponent],
  entryComponents:[MatConfirmDialogComponent,ServicioComponent,ClienteComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {
    setAppInjector(injector);
  }
}