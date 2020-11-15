import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentControllComponent } from './vent-controll.component';

describe('VentControllComponent', () => {
  let component: VentControllComponent;
  let fixture: ComponentFixture<VentControllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentControllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentControllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
