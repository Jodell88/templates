import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardingFormComponent } from './forwarding-form.component';

describe('ForwardingFormComponent', () => {
  let component: ForwardingFormComponent;
  let fixture: ComponentFixture<ForwardingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForwardingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForwardingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
