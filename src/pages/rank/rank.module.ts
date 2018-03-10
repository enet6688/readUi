import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RankPage } from './rank';

@NgModule({
  declarations: [
    RankPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(RankPage),
  ],
})
export class RankPageModule {}
