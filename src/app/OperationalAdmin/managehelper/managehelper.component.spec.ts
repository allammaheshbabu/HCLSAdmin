import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagehelperComponent } from './managehelper.component';

describe('ManagehelperComponent', () => {
  let component: ManagehelperComponent;
  let fixture: ComponentFixture<ManagehelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagehelperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagehelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
