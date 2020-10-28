import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrafiltroComponent } from './barrafiltro.component';

describe('BarrafiltroComponent', () => {
  let component: BarrafiltroComponent;
  let fixture: ComponentFixture<BarrafiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarrafiltroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarrafiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
