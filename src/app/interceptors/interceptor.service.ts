import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('Paso por el interceptor');

    const headers = new HttpHeaders({
      'token-usuario': 'ABC-123'
    });

    // clonar req
    const reqClone = req.clone({ headers });

    // Dejar pasar el interceptor
    // return next.handle(req);
    return next.handle(reqClone).pipe(
      catchError(err => this.manejarError(err)),
    );
  }

  // Centralizando errores
  manejarError(error: HttpErrorResponse) {
    console.log('Sucedio un error');
    console.log('Registrado en el log file');

    console.warn(error);
    return throwError(() => 'Error personalizado');
  }
}
