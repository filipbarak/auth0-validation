//YOU CAN COPY THIS SERVICE FROM Auth0.com

import { Injectable } from '@angular/core';
//looks at storage, finds jwt, decodes and look expiry
//if not expired returns true;
import { tokenNotExpired } from 'angular2-jwt';

declare var Auth0Lock: any;
@Injectable()
export class AuthService {
  userProfile;
  //client key, client domain, and empty object
  //for providing aditional config
  lock = new Auth0Lock('bcuv15WrWre2NAnNI4SmaAWvu4TWCAmO', 'filipbarak.eu.auth0.com', {
    auth: {
      params: {
        scope: 'openid profile',
        audience: 'https://api.barak.com'
      }
    }
  });

  constructor() {
    this.userProfile = JSON.parse(localStorage.getItem('profile'))
    //subscribe and raising the event when user logs in
    this.lock.on('authenticated', authResult => {
        //setting the token to local storage
        localStorage.setItem('id_token', authResult.accessToken);
        this.lock.getUserInfo(authResult.accessToken, (error, profile)=> {
          if(error) {
            console.log('error!', error);
            return;
          }
          localStorage.setItem('profile', JSON.stringify(profile))
          this.userProfile = profile;
        })
      });
  }
  public login(){
    this.lock.show();
  }

  //call this to see if user is logged in
  //or not and act upon it
  public isAuthenticated(){

    return tokenNotExpired();

  }

  public logout(){
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.userProfile = null;
  }


}
