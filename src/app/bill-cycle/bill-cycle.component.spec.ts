import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillCycleComponent } from './bill-cycle.component';

describe('BillCycleComponent', () => {
  let component: BillCycleComponent;
  let fixture: ComponentFixture<BillCycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillCycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
