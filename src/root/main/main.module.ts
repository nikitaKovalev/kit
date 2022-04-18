import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiTextboxModule } from '@kit/components/textbox';

import { MainRoutingModule } from './main-routing.module';
import { MainView } from './main.view';
import { NavigationComponent } from './components';
import { InputView } from './views';

@NgModule({
  imports: [
    CommonModule,

    UiTextboxModule,

    MainRoutingModule,
  ],
  declarations: [
    MainView,
    InputView,

    NavigationComponent,
  ],
})
export class MainModule {}
