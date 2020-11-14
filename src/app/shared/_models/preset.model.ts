export class Preset{
    ID: Number;
    name: string;
    temperature: Number;
    humidity: Number;
    user_id: Number;

    constructor() {}

    set(newPreset){
        this.ID = newPreset.ID;
        this.name = newPreset.name;
        this.temperature = newPreset.temperature;
        this.humidity = newPreset.temperature;
        this.user_id = newPreset.user_id;
    }

}