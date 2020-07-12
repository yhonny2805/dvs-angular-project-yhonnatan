import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmembersComponent } from './newmembers.component';

describe('NewmembersComponent', () => {
  let component: NewmembersComponent;
  let fixture: ComponentFixture<NewmembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewmembersComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
