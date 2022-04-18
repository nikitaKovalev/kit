import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'main-view',
  templateUrl: 'main.view.html',
  styleUrls: ['./main.view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainView {}