import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalCartComponent } from './rental-cart.component';

describe('RentalCartComponent', () => {
  let component: RentalCartComponent;
  let fixture: ComponentFixture<RentalCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
