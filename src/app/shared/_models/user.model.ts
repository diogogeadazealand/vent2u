export class User{
    ID: Number;
    name: string;
    email: string;
    loggedIn: Boolean;
    user_role: {
        ID: Number;
        name: String;
    }

    constructor() {}

    set(newUser){
        this.ID = newUser.ID;
        this.name = newUser.name;
        this.email = newUser.email;
        this.loggedIn = newUser.loggedIn;
        this.user_role = newUser.user_role;
    }

}