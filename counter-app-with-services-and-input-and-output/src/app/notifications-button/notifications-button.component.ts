import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../services/notifications.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-notifications-button',
  templateUrl: './notifications-button.component.html',
  styleUrls: ['./notifications-button.component.css'],
})
export class NotificationsButtonComponent implements OnInit {
  notificationsCount$: Observable<number> = this.notificationsService.count$;

  constructor(private notificationsService: NotificationsService) {}

  ngOnInit(): void {
    this.notificationsCount$ = this.notificationsService.count$;
  }
}

/*
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notifications-button',
  templateUrl: './notifications-button.component.html',
  styleUrls: ['./notifications-button.component.scss'],
})
export class NotificationsButtonComponent implements OnInit {
  @Input() count = 0;
  constructor() {}

  ngOnInit(): void {}
}
*/
