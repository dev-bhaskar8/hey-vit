import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { ContactPage } from '../contact/contact.page';
import { NewsPage } from '../news/news.page';
import { WeatherPage } from '../weather/weather.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full',
      },
      {
        path: '/weather',
        redirectTo: '/tabs/(weather:weather)',
        pathMatch: 'full',
      },
      {
        path: 'home',
        outlet: 'home',
        component: NewsPage
      },
      {
        path: 'weather',
        outlet: 'weather',
        component: WeatherPage
      },
      {
        path: 'contact',
        outlet: 'contact',
        component: ContactPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
