import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { UsuariosPage } from '../usuarios/usuarios.page';
import { UsuarioPage } from '../usuario/usuario.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(usuarios:usuarios)',
        pathMatch: 'full',
      },
      {
        path: 'usuarios',
        outlet: 'usuarios',
        component: UsuariosPage
      },
      {
        path: 'usuario',
        outlet: 'usuario',
        component: UsuarioPage
      }, {
        path: 'editar/:id',
        outlet: 'usuario',
        component: UsuarioPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(usuarios:usuarios)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
