import { Component, ViewChild } from '@angular/core';
import { UsuarioService, Usuario } from '../services/firebaseservice.service';
import { NavController, } from '@ionic/angular';

@Component({
  selector: 'app-usuarios',
  templateUrl: 'usuarios.page.html',
  styleUrls: ['usuarios.page.scss']
})

export class UsuariosPage {

  usuarios: Usuario[];
  constructor(public _navcontrol: NavController, public _usuarioservice: UsuarioService) {
    this.get_usuarios();
  }

  get_usuarios() {
    this._usuarioservice.get_usuarios().valueChanges().subscribe(resp => this.usuarios = resp)
  }

  go_eliminarusuario(usuario: Usuario) {

    this._usuarioservice.delete_usuario(usuario).then(resp => {
      console.log("usuario eliminado");
    })
  }
}
