import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: 'input.view.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputView {}