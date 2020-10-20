import { Component } from '@angular/core'

@Component({
    selector: '<login>',
    template: `
    <mat-form-field appearance="outline">
        <mat-label>Type in your username</mat-label>
        <input matInput placeholder="Username">
        <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
    </mat-form-field>
    `,

    styleUrls: ['./login.component.css'],
    providers: []    
})
export class Login {
} 