import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaisseauxSpatiauxComponent } from './Vaisseaux-spatiaux';

describe('VaisseauxSpatiauxComponent', () => {
  let component: VaisseauxSpatiauxComponent;
  let fixture: ComponentFixture<VaisseauxSpatiauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VaisseauxSpatiauxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VaisseauxSpatiauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
