import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrandirComponent } from './agrandir';

describe('Agrandir', () => {
  let component: AgrandirComponent;
  let fixture: ComponentFixture<AgrandirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgrandirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgrandirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});