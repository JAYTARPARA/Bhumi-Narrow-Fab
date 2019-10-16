import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMaterialsPage } from './all-materials.page';

describe('AllMaterialsPage', () => {
  let component: AllMaterialsPage;
  let fixture: ComponentFixture<AllMaterialsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllMaterialsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMaterialsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
