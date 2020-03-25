import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingEntryComponent } from './shopping-entry.component';

describe('ShoppingEntityComponent', () => {
  let component: ShoppingEntryComponent;
  let fixture: ComponentFixture<ShoppingEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingEntryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
