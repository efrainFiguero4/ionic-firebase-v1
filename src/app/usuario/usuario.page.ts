import { Component } from '@angular/core';
import { Usuario, UsuarioService } from '../services/firebaseservice.service';
import { NavController, NavParams } from '@ionic/angular';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
   selector: 'app-usuario',
   templateUrl: 'usuario.page.html',
   styleUrls: ['usuario.page.scss']
})

export class UsuarioPage {

   constructor(public _navcontrol: NavController, public _router: ActivatedRoute, private _usuarioservice: UsuarioService) {
   }

   usuario = new Usuario();

   guardar_usuario(usuario: Usuario) {
      usuario.id = Date.now();
      this._usuarioservice.add_usuario(usuario).then(resp => {
         this._navcontrol.goBack();
         this.usuario = new Usuario();
      })
   }
}
