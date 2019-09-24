import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomButtonMapPage } from './custom-button-map.page';

describe('CustomButtonMapPage', () => {
  let component: CustomButtonMapPage;
  let fixture: ComponentFixture<CustomButtonMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomButtonMapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomButtonMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
