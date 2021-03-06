import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Link { routerLink: string; title: string; }

@Component({
  selector: 'ui-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  public readonly links: Link[] = [
    { routerLink: 'input', title: 'Input' },
  ];
}
