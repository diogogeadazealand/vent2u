import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, AfterViewInit{

  constructor(private _router: Router){}

  list;
  page;

  @Input() user_role : number = 1;
  @Input() temperature : number;
  @Input() humidity : number;

  url;

  ngOnInit(): void {

    this._router.events.subscribe((e) => {
      this.SetSelected(e); 
    });

  }

  ngAfterViewInit(): void{
    this.SetSelected(this._router);
  }

  private SetSelected(event){
    if(event instanceof NavigationEnd || event instanceof Router){

      if(event.url == this.url) return;

      this.page = document.querySelector(".page");
      this.list = document.querySelector("nav ul");

      this.url = event.url;
      let selected = document.querySelector("nav .selected");
      if(selected) selected.classList.remove("selected");

      switch(event.url){
        case "/":
          this.list.children[0].classList.add("selected");
          this.removeSpecial();
          break;
        case "/humidity":
          this.list.children[1].classList.add("selected");
          this.removeSpecial();
          break;
        case "/classroom":
          this.list.children[2].classList.add("selected");
        case "/claim":
          this.setSpecial();
          break;
        default: break;
       
      }
    }
  }

  removeSpecial(){
    this.list.classList.remove("special");
    this.page.classList.remove("special");
  }

  setSpecial(){
    this.list.classList.add("special");
    this.page.classList.add("special");
  }

}
