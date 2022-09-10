import { Component } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'interceptorApp';

  constructor(
    private usuarioService: UsuariosService
  ) {
    this.usuarioService.obtenerUsuarios().subscribe({
      next: (resp) => {
        console.warn(resp);
      },
      error: (err) => {
        // El error en el pipe es ignorado e imprime este
        console.log('Error en el appComponent');
      },
    });
  }
}
