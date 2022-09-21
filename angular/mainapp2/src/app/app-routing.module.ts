import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClientesComponent } from './clientes/list-clientes/list-clientes.component';
import { ListProductosComponent } from './productos/list-productos/list-productos.component';

const routes: Routes = [

  {path:"clientes", component: ListClientesComponent }, 
  {path:"productos", component: ListProductosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
