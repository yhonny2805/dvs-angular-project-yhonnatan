import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitenotfoundComponent } from './sitenotfound.component';

describe('SitenotfoundComponent', () => {
  let component: SitenotfoundComponent;
  let fixture: ComponentFixture<SitenotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SitenotfoundComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitenotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
