import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalVoiceComponent } from './technical-voice.component';

describe('TechnicalVoiceComponent', () => {
  let component: TechnicalVoiceComponent;
  let fixture: ComponentFixture<TechnicalVoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalVoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalVoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
