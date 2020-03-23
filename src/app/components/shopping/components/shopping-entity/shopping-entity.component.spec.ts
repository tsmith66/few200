import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingEntityComponent } from './shopping-entity.component';

describe('ShoppingEntityComponent', () => {
  let component: ShoppingEntityComponent;
  let fixture: ComponentFixture<ShoppingEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
