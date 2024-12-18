import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRespComponent } from './manage-resp.component';

describe('ManageRespComponent', () => {
  let component: ManageRespComponent;
  let fixture: ComponentFixture<ManageRespComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageRespComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageRespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
