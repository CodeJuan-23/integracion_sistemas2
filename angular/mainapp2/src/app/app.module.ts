import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FooterComponent } from './footer/footer.component';
import { ListClientesComponent } from './clientes/list-clientes/list-clientes.component';
import { NewClienteComponent } from './clientes/new-cliente/new-cliente.component';
import { ListProductosComponent } from './productos/list-productos/list-productos.component';
import { NewProductoComponent } from './productos/new-producto/new-producto.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListVentasComponent } from './ventas/list-ventas/list-ventas.component';
import { NewVentaComponent } from './ventas/new-venta/new-venta.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import { ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavMenuComponent,
    FooterComponent,
    ListClientesComponent,
    NewClienteComponent,
    ListProductosComponent,
    NewProductoComponent,
    ListVentasComponent,
    NewVentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    FormsModule, 
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
