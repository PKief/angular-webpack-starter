import { TranslationService, TRANSLATION_PROVIDERS } from './translation';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('App', () => {
  beforeEach(() => {
    // https://github.com/AngularClass/angular2-webpack-starter/issues/1004#issuecomment-247703415
    TestBed.configureTestingModule({
      providers: [
        // AppComponent,
        // AppState,
        // Renderer,
        // {provide: Router,  useClass: MockRouter }
        TRANSLATION_PROVIDERS,
        TranslationService
      ],
      declarations: [AppComponent],
      imports: [RouterTestingModule]
    });
  });
  it('should work', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });
});
