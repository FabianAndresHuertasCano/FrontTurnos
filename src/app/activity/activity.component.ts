import { Component, Input } from '@angular/core';
import { Activity } from 'src/models/Activity';
import { User } from 'src/models/User';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent {
  @Input() user: User = new User();
  activities: Activity[] = [];
  userName = '';
  ngOnInit(): void {
    this.userName = this.user.name;
    //Actividad de prueba
    let activity = new Activity();
    activity.id = 1;
    activity.name = 'Primera Actividad'
    activity.minutes = 30
    this.activities.push(activity)
    activity = new Activity();
    activity.id = 2;
    activity.name = 'Segunda Actividad'
    activity.minutes = 45
    this.activities.push(activity)
  }
}
