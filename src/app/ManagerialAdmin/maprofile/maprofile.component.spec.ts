import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaprofileComponent } from './maprofile.component';

describe('MaprofileComponent', () => {
  let component: MaprofileComponent;
  let fixture: ComponentFixture<MaprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaprofileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
