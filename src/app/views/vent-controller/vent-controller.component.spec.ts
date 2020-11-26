import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentControllerComponent } from './vent-controller.component';

describe('VentControllerComponent', () => {
  let component: VentControllerComponent;
  let fixture: ComponentFixture<VentControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
