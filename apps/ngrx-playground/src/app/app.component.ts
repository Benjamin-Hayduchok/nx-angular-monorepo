import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SharedUiSharedUiComponent } from '@angular-monorepo/shared/ui/shared-ui';
import { IncreaseButtonComponent } from '@angular-monorepo/shared/ui/shared-ui';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, SharedUiSharedUiComponent, IncreaseButtonComponent],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ngrx-playground';
}
