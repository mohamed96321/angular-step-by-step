import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationsService } from '../services/notifications.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-notifications-manager',
  templateUrl: './notifications-manager.component.html',
  styleUrls: ['./notifications-manager.component.css'],
})
export class NotificationsManagerComponent implements OnInit {
  notificationsCount$: Observable<number> = this.notificationsService.count$;
  constructor(private notificationsService: NotificationsService) {}

  ngOnInit(): void {
    this.notificationsCount$ = this.notificationsService.count$;
  }

  getCountValue(callback: any) {
    this.notificationsCount$.pipe(first()).subscribe(callback);
  }

  addNotification() {
    this.getCountValue((countVal: any) => {
      this.notificationsService.setCount(++countVal);
    });
  }

  removeNotification() {
    this.getCountValue((countVal: any) => {
      if (countVal === 0) {
        return;
      }
      this.notificationsService.setCount(--countVal);
    });
  }
  resetCount() {
    this.notificationsService.setCount(0);
  }
}

/*
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notifications-manager',
  templateUrl: './notifications-manager.component.html',
  styleUrls: ['./notifications-manager.component.css'],
})
export class NotificationsManagerComponent implements OnInit {
  @Input() count = 0;
  @Output() countChanged = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  addNotification() {
    this.count++;
    this.countChanged.emit(this.count);
  }

  removeNotification() {
    if (this.count == 0) {
      return;
    }
    this.count--;
    this.countChanged.emit(this.count);
  }

  resetCount() {
    this.count = 0;
    this.countChanged.emit(this.count);
  }
}
*/
