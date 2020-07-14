import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { CvComponent } from '../cv/cv.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';

const routes: Routes = [{ path: '', component: WelcomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeRoutingModule {}
