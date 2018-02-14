import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceFeaturesComponent } from './voice-features.component';

describe('VoiceFeaturesComponent', () => {
  let component: VoiceFeaturesComponent;
  let fixture: ComponentFixture<VoiceFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoiceFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
