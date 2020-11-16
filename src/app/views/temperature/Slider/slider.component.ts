import { Component, Output, EventEmitter, Input, OnInit, OnChanges, AfterViewInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
    selector: 'temp-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css']
})
export class DashboardSlider implements AfterViewInit, OnInit{

    @Input() temperature : number;
    @Output() temperatureEvent = new EventEmitter<number>();
    @Output() onLoaded = new EventEmitter();

    tempRange = [];
    ul;
    @Input() ventId;
    tempNodeList: any;
    
    sendChanges;
    eventListener;

    minTemp = 15;
    maxTemp = 26;

    centerDimentions;

    constructor(private _router: Router){
        for(let i = this.minTemp; i <= this.maxTemp; i++) this.tempRange.push(i);
    }

    ngOnInit(): void{
        this._router.events.subscribe( event => {
            if(event instanceof NavigationStart && event.url != "/"){
                this.removeListener();
            }
        });
    }

    ngAfterViewInit(): void{
        this.ul = document.querySelector(".temperature");
        this.tempNodeList = this.ul.children;

        this.onLoaded.emit();

        this.addListener();

        if(this.temperature) {
            this.scrollToTemperature();
        }
    }
    
    onTempChanged(value : number) {
        this.temperatureEvent.emit(value);
    }

    public scrollToTemperature(){

        if(!this.temperature || !this.ul) return;

        this.removeListener();

        if(this.temperature < this.tempRange[0]) this.temperature = this.tempRange[0];
        else if (this.temperature > this.tempRange[this.tempRange.length-1]) this.temperature = this.tempRange[this.tempRange.length-1];

        if(!this.tempNodeList) this.tempNodeList = this.ul.children;

        let curElNode = this.tempNodeList[this.temperature+1-this.minTemp];
        curElNode.scrollIntoView({block: "center"});
        let selected = document.querySelectorAll(".temperature .selected");
        selected.forEach(el => el.classList.remove("selected") );
        curElNode.classList.add("selected");
        this.addListener();
    }

    onScroll(): void {
        clearTimeout(this.sendChanges);
        this.sendChanges = setTimeout(() => {
            this.getCenterElement(this.temperature);
        }, 200);
    }

    getCenterElement(temperature){

        if(!temperature) return;

        let curElIndex = (temperature-this.minTemp) +1;
        this.updateValues();

        while(true){

            let currentElement = this.tempNodeList[curElIndex];

            let pos = {top: 0, bottom: 0};
            pos.top = currentElement.getBoundingClientRect().top;
            pos.bottom = currentElement.getBoundingClientRect().bottom;

            //if current element bottom is higher than top side, it means that the list scrolled down
            if(pos.top >= this.centerDimentions.top && pos.bottom <= this.centerDimentions.bottom){
                let selected = document.querySelectorAll(".temperature .selected");
                selected.forEach(el => el.classList.remove("selected") );
                this.temperature = curElIndex+this.minTemp-1;
                currentElement.classList.add("selected");
                break;
            }else if(pos.bottom <= this.centerDimentions.top){

                ++curElIndex;
                if(curElIndex < 1){
                    break;
                }

            } else if(pos.top >= this.centerDimentions.bottom){//if current element top is lower than bottom, it means that the list scrolled down
                
                --curElIndex;
                if(curElIndex > this.tempNodeList.lenght-2){
                    break;
                }

            }else break;
        }

        this.onTempChanged(this.temperature);
    }

    addListener(){
        this.ul.addEventListener("scroll", () => {
            this.onScroll();
        });
    }

    removeListener(){

        this.ul.removeEventListener("scroll", () => {
            this.onScroll();
        });
    }

    updateValues(){
        let size = this.ul.getBoundingClientRect().height;
        this.centerDimentions = {
            top: this.ul.getBoundingClientRect().bottom - ( size / 2 ) -30,
            bottom: this.ul.getBoundingClientRect().top + ( size / 2 ) + 30
        }
    }
}
