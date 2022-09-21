import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.css']
})
export class ListClientesComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  txtValor:string="";
  
  clientes: any[] = [];
  
  constructor(private service:ClientesService) { }

  /*
  addCliente()
  {

    this.clientes.push({tipo:"PERSONA",numero_documento:"12345678",nombres:"Luis"});
    //this.clientes=this.clientes;

    console.log(this.clientes);
  
  }
  
  removeCliente()
  {

    this.clientes.splice(this.clientes.length-1,1);

  }
  */

  ngOnInit(): void {
    console.log("Hola mundo cruel")
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    }

   /* this.clientes=[{tipo:"PERSONA",numero_documento:"12345678",nombres:"Luis"}]
   */

   this.service.getClientes().subscribe((response:any)=>{

    console.log(response.data);
    this.clientes=response.data;
    this.dtTrigger.next(null);
    });

      
  }

}
