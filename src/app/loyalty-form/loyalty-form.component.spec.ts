import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyaltyFormComponent } from './loyalty-form.component';

describe('LoyaltyFormComponent', () => {
  let component: LoyaltyFormComponent;
  let fixture: ComponentFixture<LoyaltyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoyaltyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyaltyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
