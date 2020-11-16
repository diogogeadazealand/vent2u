import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import { RoomsService } from 'src/app/shared/_services/rooms.service';
import { VentsService } from 'src/app/shared/_services/Vents/vents.service';

@Component({
  selector: 'claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  constructor(private _ventsService: VentsService, private _roomsService: RoomsService, private _location: Location) { }

  room;
  vents;
  userId;
  currentVent;

  @Output() claimEvent = new EventEmitter();

  ngOnInit(): void {

    this._roomsService.findOne(1).subscribe(room => {
      this.room = room[0];
      this.vents = this._ventsService.getFromRoom(this.room.ID).subscribe(vents => {
        this.vents = vents;
      });
    });
  }

  claimVent(vent){
    debugger;
    vent.user_id = this.userId;
    
    if(this.currentVent.ID) 
    {
      this.unclaimVent(() => {
        this._ventsService.update(vent).subscribe( data => {
          this._location.back();
        });

      });
    } else {
      this._ventsService.update(vent).subscribe( data => {
        this._location.back();
      });
    }
    

  }

  unclaimVent(callback){
    if(this.currentVent.user_id != this.userId) return;
    this.currentVent.user_id = null;
    if(this._ventsService.update(this.currentVent)) {
      if(callback) callback();
      else this._location.back();
    }

  }

}
