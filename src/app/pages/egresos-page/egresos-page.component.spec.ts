import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgresosPageComponent } from './egresos-page.component';

describe('EgresosPageComponent', () => {
  let component: EgresosPageComponent;
  let fixture: ComponentFixture<EgresosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EgresosPageComponent]
    });
    fixture = TestBed.createComponent(EgresosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
