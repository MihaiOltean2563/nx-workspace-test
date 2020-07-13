import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UiModule } from '@happyorg/ui';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: AboutComponent}
    ]),
  ],
  declarations: [AboutComponent],
})
export class FeatureAboutModule {}
