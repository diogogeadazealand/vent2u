import { Component, Input } from '@angular/core';

@Component({
  selector: 'claim-grid',
  templateUrl: './claim-grid.component.html',
  styleUrls: ['./claim-grid.component.css']
})
export class ClaimGridComponent {

  @Input() classroom;

  public GetColumnsCount(ventGroup?): string{
    let count = "";
    //this equation makes squared groups (like 2x2, 3x3, ect...)
    let columnCount = ventGroup ? Math.ceil(Math.sqrt(ventGroup.vents.length)) : this.classroom.gridSize[0];

    for(let i = 0; i < columnCount; i++){
      count += '1fr ';
    }
    return count;
  }

}
