import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappOrderDetailsPage } from './whatsapp-order-details.page';

describe('WhatsappOrderDetailsPage', () => {
  let component: WhatsappOrderDetailsPage;
  let fixture: ComponentFixture<WhatsappOrderDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatsappOrderDetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsappOrderDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
