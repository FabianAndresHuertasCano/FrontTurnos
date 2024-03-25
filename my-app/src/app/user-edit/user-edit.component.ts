import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/models/User';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent {
  id = '';
  user: User = new User();
  constructor(
    private router : Router,
    private route: ActivatedRoute,
    ) {
      this.id = this.route.snapshot.paramMap.get('id') ?? '';
      if(!this.id){
        this.router.navigate(["/home"]);
      }
    }
  ngOnInit(): void {
    //Usuario de prueba para editar
    this.user = new User();
    this.user.id = Number(this.id);
    this.user.name = 'Prueba editar 1'
    this.user.document = '123'
    this.user.email = 'editar@editar.com'
  }
  onSubmit(){
    console.log(this.user)
    alert("Usuario: " + this.user.name + " editado");
  }
}
