import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppRoutingModule, appRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { RouterModule } from '@angular/router';
import { setAppInjector } from './app-injector';
import { MaterialAppModule } from './ngmaterial.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ClientesModule } from './clientes/clientes.module';
import { ServiciosModule } from './servicios/servicios.module';
import { SkillsModule } from './skills/skills.module';
import { OrdenServicioModule } from './orden-servicio/orden-servicio.module';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    MyDashboardComponent,    
    MatConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    RouterModule.forRoot(appRoutes),
    MaterialAppModule,
    AngularFireDatabaseModule,    
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ClientesModule,
    ServiciosModule,
    SkillsModule,
    OrdenServicioModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  entryComponents:[MatConfirmDialogComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {
    setAppInjector(injector);
  }
}