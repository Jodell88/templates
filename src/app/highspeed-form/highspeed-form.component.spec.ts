import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighspeedFormComponent } from './highspeed-form.component';

describe('HighspeedFormComponent', () => {
  let component: HighspeedFormComponent;
  let fixture: ComponentFixture<HighspeedFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighspeedFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighspeedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
