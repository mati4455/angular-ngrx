import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';

import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { environment } from './../../../environments/environment.prod';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ routerReducer }),
    StoreRouterConnectingModule.forRoot(),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ]
})
export class StateModule {
  constructor(@Optional() @SkipSelf() parentModule: StateModule) {
    if (parentModule) {
      throw new Error('StateModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StateModule,
      providers: []
    };
  }
}
