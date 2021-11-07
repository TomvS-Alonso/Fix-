import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ContainerComponent } from './components/container/container.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { RecuperarComponent } from './pages/recuperar/recuperar.component';
import { PerfilTComponent } from './pages/perfil-trabajador/perfilT.component'
import { BuscarComponent } from './pages/buscar/buscar.component';
import { VermasComponent } from './pages/ver-mas/ver-mas.component';
import { MaestrosServicioService } from './servicio/maestros-servicio.service';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ContainerComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    CategoriesComponent,
    RecuperarComponent,
    PerfilTComponent,
    BuscarComponent,
    VermasComponent
    ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy, }, MaestrosServicioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
