import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CspFormComponent } from './csp-form.component';

describe('CspFormComponent', () => {
  let component: CspFormComponent;
  let fixture: ComponentFixture<CspFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CspFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CspFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
