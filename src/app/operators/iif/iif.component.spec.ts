import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IifComponent } from './iif.component';

describe('IifComponent', () => {
  let component: IifComponent;
  let fixture: ComponentFixture<IifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
