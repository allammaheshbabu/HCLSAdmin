import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRespComponent } from './add-resp.component';

describe('AddRespComponent', () => {
  let component: AddRespComponent;
  let fixture: ComponentFixture<AddRespComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddRespComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddRespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
