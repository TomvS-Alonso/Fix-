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
import { PerfilUsuarioComponent } from './pages/perfil-usuario/perfilU.component';
import { SwiperModule } from 'swiper/angular';
import { FavoritoComponent } from './pages/favoritos/favorito.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioServicioService } from './servicio/usuario-servicio.service';
import { RegistroMaestroComponent } from './pages/registerMaestro/registerM.component';
import { MaestroServicioService } from './servicio/maestro-servicio.service';
import { EditarComponent } from './pages/editarUsuario/editarU.component';
import { TrabajoServicioService } from './servicio/trabajo-servicio.service';
import { LoginMaestroComponent } from './pages/loginMaestro/loginMaestro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ContainerComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    RegistroMaestroComponent,
    CategoriesComponent,
    RecuperarComponent,
    PerfilTComponent,
    BuscarComponent,
    VermasComponent,
    PerfilUsuarioComponent,
    FavoritoComponent,
    EditarComponent,
    LoginMaestroComponent,
  ],
  entryComponents: [],
  imports: [
    SwiperModule,
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
    UsuarioServicioService, 
    MaestroServicioService,
    TrabajoServicioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
