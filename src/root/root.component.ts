import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-root',
  template: `<router-outlet></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RootComponent {}
