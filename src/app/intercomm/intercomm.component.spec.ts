/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IntercommComponent } from './intercomm.component';

describe('IntercommComponent', () => {
  let component: IntercommComponent;
  let fixture: ComponentFixture<IntercommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntercommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntercommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
