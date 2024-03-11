import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuscleWikiComponent } from './muscle-wiki.component';

describe('MuscleWikiComponent', () => {
  let component: MuscleWikiComponent;
  let fixture: ComponentFixture<MuscleWikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MuscleWikiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MuscleWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
