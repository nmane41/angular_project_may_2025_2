import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { myStore } from './ngrx/store/store';
import { provideEffects } from '@ngrx/effects';
import { EmployeeEffects } from './ngrx/effects/employee.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore(myStore),
    provideEffects(EmployeeEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
