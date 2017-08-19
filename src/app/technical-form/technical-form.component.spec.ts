import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalFormComponent } from './technical-form.component';

describe('TechnicalFormComponent', () => {
  let component: TechnicalFormComponent;
  let fixture: ComponentFixture<TechnicalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
