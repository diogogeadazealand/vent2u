import { AfterViewInit, Component, Input } from '@angular/core';
@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent{

  @Input() user_role : number = 1;
  @Input() temperature : number;
  @Input() humidity : number;

}
