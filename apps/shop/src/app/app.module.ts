import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiModule } from '@happyorg/ui';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UiModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () =>
          import('@happyorg/feature-main').then(
            (module) => module.FeatureMainModule
          ),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('@happyorg/feature-about').then(
            (module) => module.FeatureAboutModule
          ),
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
