import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMoreFundComponent } from './view-more-fund.component';

describe('ViewMoreFundComponent', () => {
  let component: ViewMoreFundComponent;
  let fixture: ComponentFixture<ViewMoreFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMoreFundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMoreFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
