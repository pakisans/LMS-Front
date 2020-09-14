import { Component, OnInit } from '@angular/core';
import { Notification } from '../models/notification';

const NOTIFICATIONS: Notification[] = [
  {
    description: 'The newest exam timetable has been uploaded to website',
    from: 'SII',
    time: '15:08 01.12.2019'
  },
  {
    description: 'Apply for exams now',
    from: 'General',
    time: '18:25 01.12.2019'
  },
  {
    description: 'Tell your friends about Skyline',
    from: 'General',
    time: '09:08 01.12.2019'
  },
  {
    description: 'You have unread messages in your inbox',
    from: 'Profile',
    time: '13:25 01.12.2019'
  }
];

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  notifications = NOTIFICATIONS

  constructor() { }

  ngOnInit(): void {
  }

}
