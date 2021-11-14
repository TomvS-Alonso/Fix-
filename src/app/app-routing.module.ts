import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { RecuperarComponent } from './pages/recuperar/recuperar.component';
import { PerfilTComponent } from './pages/perfil-trabajador/perfilT.component'
import { BuscarComponent } from './pages/buscar/buscar.component';
import { VermasComponent } from './pages/ver-mas/ver-mas.component';
import { PerfilUsuarioComponent } from './pages/perfil-usuario/perfilU.component';
import { FavoritoComponent } from './pages/favoritos/favorito.component';
import { RegistroMaestroComponent } from './pages/registerMaestro/registerM.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'buscar',
    component: BuscarComponent
  },
  {
    path: 'usuario',
    component: PerfilUsuarioComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'recuperar',
    component: RecuperarComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'MasterRegister',
    component: RegistroMaestroComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'perfilT',
    component: PerfilTComponent
  },
  {
    path: "favoritos",
    component: FavoritoComponent
  },
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'ver-mas',
    component: VermasComponent
  },

  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
