import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PresetsService } from '../../_services/presets.service';

@Component({
    selector: 'presets',
    templateUrl: './presets.component.html',
    styleUrls: ['./presets.component.css']
})
export class PresetsComponent implements OnInit, AfterViewInit {
    
    presetsNodeList;
    adjustSelected;

    currentPreset = 0;
    presets;
    
    @Output() onPresetChanged = new EventEmitter();

    constructor(private _presetsService: PresetsService){}

    ngOnInit(): void{
        this._presetsService.findFromUser(1).subscribe(data => {
            this.presets = data;
        })
    }

    ngAfterViewInit(): void {
        let ul = document.querySelector(".presets ul");
        ul.addEventListener("scroll", () => {
            
            if(this.adjustSelected) clearTimeout(this.adjustSelected);
            this.adjustSelected = setTimeout(() => {
                this.getCenterButton(this.currentPreset);
            }, 250);
        });
        this.presetsNodeList = ul.children;
    }

    private getCenterButton(curPreset): void{

        let curElIndex = curPreset;

        while(true){

            let currentElement = this.presetsNodeList [curElIndex];

            let pos = {left: 0, right: 0};
            pos.left = currentElement.getBoundingClientRect().left;
            pos.right = currentElement.getBoundingClientRect().right;

            // width / 2 = center
            //center - offset; center + offset = center area
            let screenCenter = {left: (window.innerWidth/2) - 10, right: (window.innerWidth/2) + 10 }

            //if current element right side is lower than left side, it means that the list scrolled right
            if(pos.right < screenCenter.left){

                ++curElIndex;

                if(curElIndex < 0){
                    break;
                }

            } else if(pos.left > screenCenter.right){//if current element right side is lower than left side, it means that the list scrolled left
                
                --curElIndex;
                
                if(curElIndex > this.presetsNodeList.lenght){
                    break;
                }

            } else{
                this.presetsNodeList[this.currentPreset].classList.remove("selected");
                this.currentPreset = curElIndex;
                currentElement.classList.add("selected");
                this.changePreset();
                break;
            }
        }
    }

    changePreset(){
        this.onPresetChanged.emit(this.presets[this.currentPreset]);
    }

} 
