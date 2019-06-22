import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglepicComponent } from './singlepic.component';

describe('SinglepicComponent', () => {
  let component: SinglepicComponent;
  let fixture: ComponentFixture<SinglepicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglepicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglepicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
