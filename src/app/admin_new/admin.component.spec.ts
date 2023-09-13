import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppAdminComponent } from './admin.component';

describe('AppDepartmentComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppAdminComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppAdminComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'kpad-service'`, () => {
    const fixture = TestBed.createComponent(AppAdminComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('kpad-service');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppAdminComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('kpad-service app is running!');
  });
});
