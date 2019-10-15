import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMaterialsPage } from './upload-materials.page';

describe('UploadMaterialsPage', () => {
  let component: UploadMaterialsPage;
  let fixture: ComponentFixture<UploadMaterialsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadMaterialsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadMaterialsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
