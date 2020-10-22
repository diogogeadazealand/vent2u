import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimaViewComponent } from './clima-view.component';

describe('ClimaViewComponent', () => {
  let component: ClimaViewComponent;
  let fixture: ComponentFixture<ClimaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClimaViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
