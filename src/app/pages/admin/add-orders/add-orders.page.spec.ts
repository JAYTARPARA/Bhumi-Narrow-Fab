import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrdersPage } from './add-orders.page';

describe('AddOrdersPage', () => {
  let component: AddOrdersPage;
  let fixture: ComponentFixture<AddOrdersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrdersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrdersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
