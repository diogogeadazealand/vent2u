import { Component } from '@angular/core'


@Component({
    selector: '<login>',
    template: `
    <p>
    <mat-form-field appearance="legacy">
      <mat-label>Legacy form field</mat-label>
      <input matInput placeholder="Placeholder">
      <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
      <mat-hint>Hint</mat-hint>
    </mat-form-field>
  </p>
    `,

    styleUrls: ['./login.component.css'],
    providers: []    
})
export class Login {
} 