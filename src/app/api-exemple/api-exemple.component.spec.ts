import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiExempleComponent } from './api-exemple.component';

describe('ApiExempleComponent', () => {
  let component: ApiExempleComponent;
  let fixture: ComponentFixture<ApiExempleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiExempleComponent]
    });
    fixture = TestBed.createComponent(ApiExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
