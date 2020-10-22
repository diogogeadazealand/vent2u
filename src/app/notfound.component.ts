import { Component } from '@angular/core';

@Component({
  selector: 'app-notfound',
  template: `
<!--    Styling / CSS Part-->
    <style>
      .layout{
        height: 100%;
        text-align: center;
        align-content: center;
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
      }
      h3{
        font-size: 38pt;
      }
      button{
        width: 60%;
        height: 35px;
        margin-left: 20%;
      }
    </style>
<!--    Html Part -->
    <div class="layout">
      <div>
        <h3>Page Not Found</h3>
        <h3>404-101</h3>
      </div>
<!--        TODO Make this work with Material-->
      <button routerLink="">Goto Login</button>
    </div>
    `
})
export class PageNotFoundComponent {
}
