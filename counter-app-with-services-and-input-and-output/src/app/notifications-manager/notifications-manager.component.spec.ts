import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsManagerComponent } from './notifications-manager.component';

describe('NotificationsManagerComponent', () => {
  let component: NotificationsManagerComponent;
  let fixture: ComponentFixture<NotificationsManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationsManagerComponent]
    });
    fixture = TestBed.createComponent(NotificationsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
