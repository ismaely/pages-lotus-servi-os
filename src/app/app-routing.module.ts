import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManComponent } from './man/man.component';
import { MenuComponent } from './menu/menu.component';
import { ServicoComponent } from './page/servico/servico.component';
import { GalleryComponent } from './page/gallery/gallery.component';
import { ContactoComponent } from './page/contacto/contacto.component';
import { DetalheComponent } from './page/detalhe/detalhe.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: ManComponent,
    data: {
      title: 'Index'
    }

  },
  {
    path: 'page',
    loadChildren: () =>
    import("./page/pages-routing.module").then((m) => m.PagesRoutingModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
