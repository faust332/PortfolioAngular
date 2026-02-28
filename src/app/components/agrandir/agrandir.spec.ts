import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Agrandir } from './agrandir';

describe('Agrandir', () => {
  let component: Agrandir;
  let fixture: ComponentFixture<Agrandir>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Agrandir]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Agrandir);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

