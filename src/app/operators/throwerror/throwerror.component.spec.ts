import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrowerrorComponent } from './throwerror.component';

describe('ThrowerrorComponent', () => {
  let component: ThrowerrorComponent;
  let fixture: ComponentFixture<ThrowerrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThrowerrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThrowerrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
