import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTwoComponent } from './ver-two.component';

describe('VerTwoComponent', () => {
  let component: VerTwoComponent;
  let fixture: ComponentFixture<VerTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
