import { Injectable } from '@angular/core';
import { ResponseG } from './Model/responseG';
import { PeticionEnvio } from './Model/peticionEnvio';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PhttpService {
  private url: string = "http://localhost:4000/api/product";
  private ArrayG: Array<ResponseG>;
  constructor(private http: HttpClient) { }

  postRespuesta(_body: PeticionEnvio): Observable<ResponseG> {

    return this.http.post<ResponseG>(this.url, _body);
  }
  getRespuesta(): Observable<ResponseG[]> {
    return this.http.get<ResponseG[]>(this.url + "/");
  }
  getProduct(codigo: number): Observable<ResponseG[]> {
    return this.http.get<ResponseG[]>(this.url + '/' + codigo);
  }
  putRespuesta(_id: number, _body: PeticionEnvio): Observable<ResponseG> {
    let urlcom = this.url + "/" + _id;
    return this.http.put<ResponseG>(urlcom, _body);
  }
  /*putRespuesta(id: number, updatedBody: PeticionEnvio): Observable<any> {
    return this.http.put(`${this.url}/${id}`, updatedBody);
  }*/
  deleteRespuesta(_id: number): Observable<ResponseG> {
    let urlcom = this.url + "/" + _id;
    return this.http.delete<ResponseG>(urlcom);
  }
}
