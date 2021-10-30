import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTovarComponent } from './item-tovar.component';

describe('ItemTovarComponent', () => {
  let component: ItemTovarComponent;
  let fixture: ComponentFixture<ItemTovarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTovarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTovarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
