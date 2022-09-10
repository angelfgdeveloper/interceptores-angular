import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient,
  ) { }

  obtenerUsuarios() {
    // #1 (HttpParams)
    // const params = new HttpParams().append('page', '1');

    // #2 (HttpParams)
    //Manera para agregar los params ...?page=1&nombre=Luisito
    let params = new HttpParams().append('page', '1');
    params = params.append('nombre', 'Luisito');

    // #3 (HttpHeaders)
    // Opcion de uso de interceptores => cuando debo dejarlo
    // implicito el token en la petcion interceptamos
    // const headers = new HttpHeaders({
    //   'token-usuario': 'ABC-123'
    // });

    return this.http.get(`https://reqre12s.in/api/user`, {
      params,
      // headers // Ignorar para ponerlo en un interceptor
    }).pipe(
      // Manipular la respuesta de la petcion
      map( (resp: any) => resp.data),

      // Manejar los errores de una peticion
      // catchError(err => this.manejarError(err)),
    );
  }

  // Centralizar errores
  // manejarError(error: HttpErrorResponse) {
  //   console.log('Sucedio un error');
  //   console.log('Registrado en el log file');

  //   console.warn(error);
  //   return throwError(() => 'Error personalizado');
  // }

}
