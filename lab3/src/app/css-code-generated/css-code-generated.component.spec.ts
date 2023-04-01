import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssCodeGeneratedComponent } from './css-code-generated.component';

describe('CssCodeGeneratedComponent', () => {
  let component: CssCodeGeneratedComponent;
  let fixture: ComponentFixture<CssCodeGeneratedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssCodeGeneratedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssCodeGeneratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
