import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragtablecolumnComponent } from './dragtablecolumn.component';

describe('DragtablecolumnComponent', () => {
  let component: DragtablecolumnComponent;
  let fixture: ComponentFixture<DragtablecolumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragtablecolumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragtablecolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
