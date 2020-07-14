import { NgModule } from '@angular/core';

import { CvRoutingModule } from './cv-routing.module';
import { CvComponent } from './cv.component';

@NgModule({
  imports: [CvRoutingModule],
  declarations: [CvComponent],
  exports: [CvComponent],
})
export class CvModule {}
