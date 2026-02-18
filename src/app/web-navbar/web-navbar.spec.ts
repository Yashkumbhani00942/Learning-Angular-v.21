import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebNavbar } from './web-navbar';

describe('WebNavbar', () => {
  let component: WebNavbar;
  let fixture: ComponentFixture<WebNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebNavbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebNavbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
