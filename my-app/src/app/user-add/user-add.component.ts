import { Component } from '@angular/core';
import { User } from 'src/models/User';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent {
  user: User = new User();
  ngOnInit(): void {
    console.log("Entró a crear usuario")
  }
  onSubmit(){
    console.log(this.user)
    alert("Usuario " + this.user.name + " creado");
  }
}
