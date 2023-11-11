import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedUiSharedUiComponent } from './shared-ui-shared-ui.component';

describe('SharedUiSharedUiComponent', () => {
  let component: SharedUiSharedUiComponent;
  let fixture: ComponentFixture<SharedUiSharedUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUiSharedUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedUiSharedUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
