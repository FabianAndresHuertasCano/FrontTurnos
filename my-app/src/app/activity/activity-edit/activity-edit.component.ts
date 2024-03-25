import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from 'src/models/Activity';

@Component({
  selector: 'app-activity-edit',
  templateUrl: './activity-edit.component.html',
  styleUrls: ['./activity-edit.component.scss']
})
export class ActivityEditComponent {
  id = 0;
  activity: Activity = new Activity();

  constructor(
    private router : Router,
    private route: ActivatedRoute,
    ) {
      this.id = Number(this.route.snapshot.paramMap.get('id')) ?? 0;
      console.log(this.id)
      if(!(this.id > 0)){
        this.router.navigate(["/home"]);
      }
      
    }
    ngOnInit(): void {
      //Info de prueba
      this.activity.id = this.id;
      this.activity.name = 'Actividad de prueba';
      this.activity.minutes = 60;
    }
    onSubmit(){
      console.log(this.activity)
      alert("Actividad: " + this.activity.name + " editada");
    }
}
