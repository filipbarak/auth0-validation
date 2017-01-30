import { Component } from '@angular/core';
import {AuthService} from './auth.service';
//knows about the existence of a json webtoken.
import { AuthHttp } from 'angular2-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private auth:AuthService, private authHttp: AuthHttp){

  }
  showProfile(){
    console.log(this.auth.userProfile)
  }
  updateProfile(){
    var url = 'https://' + 'filipbarak.eu.auth0.com' + '/api/v2/users/' + this.auth.userProfile.user_id;
    var data = {
      user_metadata: {
        location: 'Ohrid'
      }
    }
    this.authHttp.patch(url, data)
        .subscribe(res => {
          console.log(res.json())
        })

  }
  callApi(){
    this.authHttp.get('http://localhost:8080/authorize')
        .subscribe(res => console.log(res))
  }

}

