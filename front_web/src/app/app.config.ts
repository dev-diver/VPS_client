import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ko_KR, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ko from '@angular/common/locales/ko';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

registerLocaleData(ko);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideNzI18n(ko_KR), importProvidersFrom(FormsModule), provideAnimationsAsync(), provideHttpClient()]
};
