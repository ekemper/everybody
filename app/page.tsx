'use client'
{/* The following line can be included in your src/index.js or App.js file */ }
import 'bootstrap/dist/css/bootstrap.min.css';

import Menu from './Menu';
// import SignIn from './SignIn';

import React from 'react';
import netlifyIdentity from 'netlify-identity-widget';
import { Button } from 'react-bootstrap';

try {
  // You must run this once before trying to interact with the widget
  netlifyIdentity.init();
} catch (e) {
  console.error("Error initializing netlify identity");
}

const netlifyAuth = {
  user: null,
  authenticate(callback: Function) {
    netlifyIdentity.open();
    netlifyIdentity.on('login', (user: any) => {
      this.user = user;
      callback(user);
    });
  },
  signout(callback: Function) {
    netlifyIdentity.logout();
    netlifyIdentity.on('logout', () => {
      this.user = null;
      callback();
    });
  }
};

const handleAuth = (user: any) => {
  netlifyAuth.authenticate(() => {
    console.log({ user });
  });
}

export default function Home() {
  return (
    <main>
      {!!netlifyAuth.user && <Menu/>}
      {!netlifyAuth.user &&
        <div>
          <Button onClick={handleAuth}>Log in</Button>
        </div>
      }
      <pre>{netlifyAuth.user}</pre>
    </main>
  );
}
