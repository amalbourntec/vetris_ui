import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfaloginComponent } from './mfalogin.component';

describe('MfaloginComponent', () => {
  let component: MfaloginComponent;
  let fixture: ComponentFixture<MfaloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfaloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MfaloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
