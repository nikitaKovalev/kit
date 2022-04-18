import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTextboxComponent {}
