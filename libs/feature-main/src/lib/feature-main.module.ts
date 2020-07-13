import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UiModule } from '@happyorg/ui';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: MainComponent}
    ]),
  ],
  declarations: [MainComponent],
})
export class FeatureMainModule {}
