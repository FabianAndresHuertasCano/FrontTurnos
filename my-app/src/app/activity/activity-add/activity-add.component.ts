import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from 'src/models/Activity';

@Component({
  selector: 'app-activity-add',
  templateUrl: './activity-add.component.html',
  styleUrls: ['./activity-add.component.scss']
})
export class ActivityAddComponent {
  id = 0;
  username = '';
  activity: Activity = new Activity();

  constructor(
    private router : Router,
    private route: ActivatedRoute,
    ) {
      this.id = Number(this.route.snapshot.paramMap.get('id')) ?? 0;
      this.username = this.route.snapshot.paramMap.get('username') ?? '';
      console.log(this.id)
      console.log(this.username)
      if(!(this.id > 0) || !this.username){
        this.router.navigate(["/home"]);
      }
      this.activity.idUser = this.id;
    }
    onSubmit(){
      console.log(this.activity)
      alert("Actividad: " + this.activity.name + " creada");
    }
}
