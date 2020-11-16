import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import { RoomsService } from 'src/app/shared/_services/rooms.service';
import { VentsService } from 'src/app/shared/_services/Vents/vents.service';
import { Vent } from 'src/app/shared/_models/vent.model';

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

  vent;

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
    vent.user_id = this.userId;
    
    this.vent = vent;

    if(this.currentVent.ID) 
    {
      debugger;
      this.unclaimVent(() => {
        this.currentVent.ID = this.vent.ID;
        this.currentVent.user_id = this.userId;
        debugger;
        this._ventsService.update(this.currentVent).subscribe( data => {
          debugger;

          this.claimEvent.emit(this.vent);
          this._location.back();
        });

      });
    } else {

      this.currentVent.ID = this.vent.ID;
      this.currentVent.user_id = this.userId;

      this._ventsService.update(this.currentVent).subscribe( data => {
          this.claimEvent.emit(this.vent);
          this._location.back();
  
      });
    }
    

  }

  unclaimVent(callback){

    this.currentVent.user_id = null;
    this.currentVent.preset_id = null;

    this._ventsService.update(this.currentVent).subscribe( data => {
      
      this.claimEvent.emit(this.currentVent);//update dashboard
      this.vents.find(vent => vent.ID == this.currentVent.ID).isClaimed = 0;
      this.currentVent = new Vent();

      if(callback) callback();

    });

  }

}
