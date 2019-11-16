import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  userState: any;
  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userState = user;
        localStorage.setItem('user', JSON.stringify(this.userState));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  // Auth provider
  async autLogin(provider: any) {
    try {
      const res = await this.afAuth.auth.signInWithPopup(provider);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  // Login with Google
  googleAuth() {
    return this.autLogin(new auth.GoogleAuthProvider());
  }

  facebookAuth() {
    return this.autLogin(new auth.FacebookAuthProvider());
  }
  // Signin with email/password
  async signIn(email: string, password: string) {
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  // Sign out
  async signOut() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
  }

}
