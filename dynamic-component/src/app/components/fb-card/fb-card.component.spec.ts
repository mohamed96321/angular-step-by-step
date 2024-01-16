import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbCardComponent } from './fb-card.component';

describe('FbCardComponent', () => {
  let component: FbCardComponent;
  let fixture: ComponentFixture<FbCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FbCardComponent]
    });
    fixture = TestBed.createComponent(FbCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
