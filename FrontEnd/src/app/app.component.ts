import { Component } from '@angular/core';
import { Subcategoria } from './Model/subcategoria';
import { Categoria } from './Model/categoria';
import { PeticionEnvio } from './Model/peticionEnvio';
import { PhttpService } from './phttp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  peticion = new PeticionEnvio();
  producto: Subcategoria;
  peticionPut = new Subcategoria();
  resultado: Array<Subcategoria>;
  resultadoCategoria: Array<Categoria>;
  codigo: String;
  constructor(private phttp: PhttpService) { this.getCategory(); this.getPeticion(this.codigo); }

  onSubmit(tipo: number) {
    switch (tipo) {
      case 1:
        this.peticion.COD_CATEGORIA = this.codigo;
        alert("dfn: " + this.peticion.COD_CATEGORIA + "m" + this.peticion.COD_SUB_CATEGORIA + "m" + this.peticion.DESCRIPCION + "m" + this.peticion.FECHA_CREACION + "m" + this.peticion.NOMBRE);
        this.postSentServices(this.peticion);
        break;
      case 2:
        this.deleteSentServices(this.codigo);
        break;
    }
  }
  onchange($event) {
    this.codigo = $event.target.value;
    this.getPeticion(this.codigo);

  }
  onclick($event) {
    this.codigo = $event.target.value;

  }
  update(producto: Subcategoria) {
    this.peticionPut = producto;
    this.peticionPut.FECHA_CREACION = this.peticionPut.FECHA_CREACION.slice(0, -14);
    this.getCategory()
    this.getPeticion(this.codigo)
  }
  getPeticion(codigo) {
    this.phttp.getRespuesta(codigo).subscribe(
      data => {
        this.resultado = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  getCategory() {
    this.phttp.getCategory().subscribe(
      data => {
        this.resultadoCategoria = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  postSentServices(body: Subcategoria) {
    this.phttp.postRespuesta(body).subscribe(
      data => {
        this.getCategory()
        this.getPeticion(this.codigo)
        console.log(data);
      },
      err => { }
    );

  }
  deleteSentServices(id: String) {
    this.phttp.deleteRespuesta(id).subscribe(
      data => {
        this.getPeticion(this.codigo)
      },
      err => { }
    );
  }
}
