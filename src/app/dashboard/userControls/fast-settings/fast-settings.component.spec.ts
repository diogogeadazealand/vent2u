import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastSettingsComponent } from './fast-settings.component';

describe('FastSettingsComponent', () => {
  let component: FastSettingsComponent;
  let fixture: ComponentFixture<FastSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FastSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
