import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcLogsComponent } from './vc-logs.component';

describe('VcLogsComponent', () => {
  let component: VcLogsComponent;
  let fixture: ComponentFixture<VcLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VcLogsComponent]
    });
    fixture = TestBed.createComponent(VcLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
