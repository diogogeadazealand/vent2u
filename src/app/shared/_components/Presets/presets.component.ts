import { AfterViewInit, Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { PresetsService } from '../../_services/presets.service';

@Component({
    selector: 'presets',
    templateUrl: './presets.component.html',
    styleUrls: ['./presets.component.css'],
})
export class PresetsComponent implements OnInit, AfterViewInit {
    
    list;
    presetsNodeList;
    adjustSelected;

    currentPreset = 0;
    presets;

    @Output() onPresetChanged = new EventEmitter();

    constructor(private _presetsService: PresetsService, private _router: Router){}

    ngOnInit(): void{
        this._presetsService.findAllFromUser(1).subscribe(data => {
            this.presets = data;

            setTimeout(() => {
                this.presetsNodeList = this.list.children;
                this.scrollToCurrent(false);
            }, 500)

        });

        this._router.events.subscribe(event => {
            if(event instanceof NavigationStart && event.url != "/Dashboard/Temperature"){
                this.removeListener();
            }
        })
    }

    ngAfterViewInit(): void {
        this.list = document.querySelector(".presets ul");
        this.presetsNodeList = this.list.children;
    }

    onScroll(): void{
        clearTimeout(this.adjustSelected);
        this.adjustSelected = setTimeout(() => {
            this.getCenterButton(this.currentPreset);
        }, 200);
    }


    getCenterButton(curPreset): void{

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

            } else {
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

    removeListener(){

        if(!this.list) this.list = document.querySelector(".presets ul");

        if(!this.list) return;
        this.list.removeEventListener("scroll", () => { this.onScroll();});
    }

    addListener()
    {
        if(!this.list) this.list = document.querySelector(".presets ul");
        this.list.addEventListener("scroll", () => { 
            this.onScroll();
        });
    }

    scrollToCurrent(setActive = true){

        this.removeListener();

        let curElNode = this.presetsNodeList[this.currentPreset];
        curElNode.scrollIntoView({inline: "center"});

        if(setActive) {
            let selected = document.querySelectorAll(".presets .selected");
            selected.forEach(el => el.classList.remove("selected") );
            curElNode.classList.add("selected");
        }

        this.addListener();

    }

} 
