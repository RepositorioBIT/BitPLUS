import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async () => await TestBed.configureTestingModule({
    declarations: [
      AppComponent, 
      UserComponent
    ],
    imports:[HttpClientModule]
  }).compileComponents());

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-unit-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-unit-testing');
  });
});
