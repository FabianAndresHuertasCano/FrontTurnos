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
}
