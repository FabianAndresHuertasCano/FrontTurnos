import { Component } from '@angular/core';
import { User } from 'src/models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  users: User[] = [];
  ngOnInit(): void {
    //Usuarios de prueba
    let user = new User();
    user.id = 1;
    user.name = 'Usuario de prueba 1'
    user.document = '123'
    user.email = 'prueba1@prueba1.com'
    this.users.push(user)
    user = new User();
    user.id = 2
    user.name = 'Usuario de prueba 2'
    user.document = '456'
    user.email = 'prueba2@prueba2.com'
    this.users.push(user)
  }
}
