import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InterceptorService } from './interceptors/interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    // Para que podamos utilizar nuestros interceptores
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true // Para que este pendiente de todas las peticiones
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
