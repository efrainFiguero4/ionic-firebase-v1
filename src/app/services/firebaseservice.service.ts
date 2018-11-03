import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

export class Usuario {
    id: number;
    nombre: string;
    apellidos: string;
}

@Injectable()
export class UsuarioService {

    items: Observable<any[]>;

    constructor(public _firebase: AngularFireDatabase) { }

    get_usuarios() {
        return this._firebase.list<Usuario>("usuarios/")
    }

    add_usuario(usuario: Usuario) {
        return this._firebase.database.ref("usuarios/" + usuario.id).set(usuario);
    }

    edit_usuario(usuario: Usuario) {
        return this._firebase.database.ref("usuarios/" + usuario.id).set(usuario);
    }

    delete_usuario(usuario: Usuario) {
        return this._firebase.database.ref("usuarios/" + usuario.id).remove();
    }
}