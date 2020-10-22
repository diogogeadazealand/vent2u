import { Component } from '@angular/core';

@Component({
  selector: 'app-notfound',
  template: `<h4>Page Not Found</h4><a routerLink="Login">Login
  </a>`
})
export class PageNotFoundComponent {
  title = 'Not Found';
}
