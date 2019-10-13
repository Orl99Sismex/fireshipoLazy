import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeriOneComponent } from './veri-one.component';

describe('VeriOneComponent', () => {
  let component: VeriOneComponent;
  let fixture: ComponentFixture<VeriOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeriOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeriOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
