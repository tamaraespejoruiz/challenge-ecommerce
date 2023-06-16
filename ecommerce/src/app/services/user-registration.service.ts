import { Injectable } from '@angular/core';
import { NewUser } from '../models/new-user';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  users: NewUser[];
  constructor() {
    this.users = []
   }

  getNewUser() { //obtener usuarios
    if (localStorage.getItem('users') != null) {
      this.users = JSON.parse(localStorage.getItem('users') || '');
    }
      return this.users;
  }

  addNewUser(user: NewUser) { //agregar un nuevo usuario
    let users: NewUser[] = [];
    if (localStorage.getItem('user') != null) {
      users = JSON.parse(localStorage.getItem('user') || '{}');
    }
    users.push(user); 
    localStorage.setItem('user', JSON.stringify(users));
  }

  belongsNewUser(newUser: NewUser) {
    let users: NewUser[] = [];
    if (localStorage.getItem('user') != null) {
      users = JSON.parse(localStorage.getItem('user') || '{}');
    }
    const resultado = users.find(user => user.dni === newUser.dni);
    
    return resultado;
  }
  // validar que no se cree cuenta el mismo usurio
}
