import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './security/login/login.component';
import { CadastroComponent } from './security/cadastro/cadastro.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './security/auth.guard';
import { TituloComponent } from './pages/titulo/titulo.component';
import { TituloCadastroComponent } from './pages/titulo-cadastro/titulo-cadastro.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'titulo/:id', component: TituloComponent },
      { path: 'titulo-cadastro', component: TituloCadastroComponent, canActivate: [AuthGuard] },
      { path: 'usuarios', loadChildren: () => import('./pages/usuarios/usuarios.module').then(module => module.UsuariosModule), canActivate: [AuthGuard] }
    ]
  },
  { path: 'cadastro', component: CadastroComponent },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
