'use client'
{/* The following line can be included in your src/index.js or App.js file */ }
import 'bootstrap/dist/css/bootstrap.min.css';

import Menu from './Menu';
// import SignIn from './SignIn';

import React from 'react';
import netlifyIdentity from 'netlify-identity-widget';
import { Button } from 'react-bootstrap';
 
try {
  console.log("window is available");
  // You must run this once before trying to interact with the widget
      netlifyIdentity.init({
        // container: '#netlify-modal', // defaults to document.body
      });
} catch (e) {
  debugger
}

   

const isLoggedIn = () => { return false; };

const netlifyAuth = {
  isAuthenticated: false,
  user: null,
  authenticate(callback: Function) {
    this.isAuthenticated = true;
    netlifyIdentity.open();
    netlifyIdentity.on('login', (user: any) => {
      this.user = user;
      callback(user);
    });
  },
  signout(callback: Function) {
    this.isAuthenticated = false;
    netlifyIdentity.logout();
    netlifyIdentity.on('logout', () => {
      this.user = null;
      callback();
    });
  }
};

const handleAuth = () => {
  netlifyAuth.authenticate(() => {
    console.log({ user: netlifyAuth.user });
  });
}
export default function Home() {
  return (
    <main>
      {netlifyAuth.isAuthenticated && <Menu/>}
      {!netlifyAuth.isAuthenticated &&
        <div>
          <Button onClick={handleAuth}>Log in</Button>
        </div>
      }
    </main>
  );
}
