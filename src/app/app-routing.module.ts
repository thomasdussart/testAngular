import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: 'cv',
    loadChildren: () => import('./pages/cv/cv.module').then((m) => m.CvModule),
  },
  {
    path: 'portfolio',
    loadChildren: () =>
      import('./pages/portfolio/portfolio.module').then(
        (m) => m.PortfolioModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
