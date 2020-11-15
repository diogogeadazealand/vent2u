import { Room } from './room.model';

export class Classroom{
    ID: Number;
    name: Number;
    room: Room;

    constructor() {
        this.room = new Room();
    }

    set(newClass){
        this.ID = newClass.ID;
        this.name = newClass.name;
        this.room = newClass.room;
    }

}