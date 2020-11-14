export class Vent{
    ID: Number;
    temperature: Number;
    humidity: Number;
    oxygenLevel: Number;
    user_id: Number;
    vent_group_id: Number;
    preset_id: Number;

    constructor() {}

    set(newVent){
        this.ID = newVent.ID;
        this.temperature = newVent.temperature;
        this.humidity = newVent.humidity;
        this.oxygenLevel = newVent.oxygenLevel;
        this.user_id = newVent.user_id;
        this.vent_group_id = newVent.vent_group_id;
        this.preset_id = newVent.preset_id;
    }

}