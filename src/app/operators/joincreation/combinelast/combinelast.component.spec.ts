import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinelastComponent } from './combinelast.component';

describe('CombinelastComponent', () => {
  let component: CombinelastComponent;
  let fixture: ComponentFixture<CombinelastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombinelastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombinelastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
