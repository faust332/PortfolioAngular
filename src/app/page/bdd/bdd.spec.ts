import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BddComponent } from './bdd';

describe('Bdd', () => {
  let component: BddComponent;
  let fixture: ComponentFixture<BddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
