import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserMockService {

  constructor() { }

  public findOne(id): User{
      let user = new User();
      user.set({
        ID: 1,
        name: "Keith",
        email: "Proin@nullaanteiaculis.org",
        loggedIn: true,
        user_role: {
          ID: 3,
          name: "Teacher"
        }
      } );

      return user;

  }

}
