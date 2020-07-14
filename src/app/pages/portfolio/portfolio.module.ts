import { NgModule } from '@angular/core';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';

@NgModule({
  imports: [PortfolioRoutingModule],
  declarations: [PortfolioComponent],
  exports: [PortfolioComponent],
})
export class PortfolioModule {}
