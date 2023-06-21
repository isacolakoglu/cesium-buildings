import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Ion } from 'cesium';

//(window as Record<string, any>)['CESIUM_BASE_URL'] = '/assets/cesium/';



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
