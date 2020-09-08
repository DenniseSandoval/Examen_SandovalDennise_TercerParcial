import { Component } from '@angular/core';
import { PeticionEnvio } from './Model/peticionEnvio';
import { ResponseG } from './Model/responseG';
import { PhttpService } from './phttp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  peticion = new PeticionEnvio();
  producto: PeticionEnvio;
  peticionPut = new PeticionEnvio();
  resultado: Array<ResponseG>;
  codigo: number = 1;
  constructor(private phttp: PhttpService) { this.getPeticion() }

  onSubmit(tipo: number) {
    switch (tipo) {
      case 1:
        this.postSentServices(this.peticion);
        break;
      case 2:
        if (this.peticionPut.descripcion == null && this.peticionPut.categoria == null && this.peticionPut.fecha_expiracion == null && this.peticionPut.precio == null) {
          alert("Llene todos los campos");

        } else {
          this.putSentServices(this.peticionPut, this.peticionPut.codigo);

        }
        break;
      case 3:
        this.deleteSentServices(this.codigo);

        break;
      case 4:
        this.getProduct(this.codigo);
        break;
    }
  }
  onchange($event) {
    this.codigo = $event.target.value;
    //alert("cambios");

  }
  onclick($event) {
    this.codigo = $event.target.value;

  }
  update(producto: PeticionEnvio) {
    this.peticionPut = producto;
    this.peticionPut.fecha_expiracion = this.peticionPut.fecha_expiracion.slice(0, -14);
  }
  getPeticion() {
    this.phttp.getRespuesta().subscribe(
      data => {
        this.resultado = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  getProduct(codigo: number) {
    this.phttp.getProduct(codigo).subscribe(data => {
      this.resultado = data;
      console.log(this.resultado);
    },
      err => {
        console.log(err);
      }
    );
  }

  postSentServices(body: PeticionEnvio) {
    this.phttp.postRespuesta(body).subscribe(
      data => {
        this.getPeticion()
        console.log(data);
      },
      err => { }
    );

  }
  putSentServices(body: PeticionEnvio, id: number) {
    this.phttp.putRespuesta(id, body).subscribe(
      data => {
        this.getPeticion()
      },
      err => { }
    );
  }
  deleteSentServices(id: number) {
    this.phttp.deleteRespuesta(id).subscribe(
      data => {
        this.getPeticion()
      },
      err => { }
    );
  }
}
