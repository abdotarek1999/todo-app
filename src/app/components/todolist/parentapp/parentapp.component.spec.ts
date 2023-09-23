import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentappComponent } from './parentapp.component';

describe('ParentappComponent', () => {
  let component: ParentappComponent;
  let fixture: ComponentFixture<ParentappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentappComponent]
    });
    fixture = TestBed.createComponent(ParentappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
