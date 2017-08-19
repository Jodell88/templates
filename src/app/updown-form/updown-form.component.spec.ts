import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdownFormComponent } from './updown-form.component';

describe('UpdownFormComponent', () => {
  let component: UpdownFormComponent;
  let fixture: ComponentFixture<UpdownFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdownFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdownFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
