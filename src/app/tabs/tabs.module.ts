import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { ContactPageModule } from '../contact/contact.module';
import { NewsPageModule } from '../news/news.module';
import { NewsSinglePageModule } from '../news-single/news-single.module';
import { WeatherPageModule } from '../weather/weather.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    ContactPageModule,
    NewsPageModule,
    NewsSinglePageModule,
    WeatherPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
