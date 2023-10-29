'use client'
{/* The following line can be included in your src/index.js or App.js file */ }
import 'bootstrap/dist/css/bootstrap.min.css';

import Menu from './Menu';
// import SignIn from './SignIn';

import React, { useState } from 'react';
import netlifyIdentity from 'netlify-identity-widget';
import { Button } from 'react-bootstrap';

export default function Home() {
  try {
    // You must run this once before trying to interact with the widget
    netlifyIdentity.init();
  } catch (e) {
    console.error("Error initializing netlify identity");
  }

  const handleAuth = (user: any) => {
    netlifyIdentity.open();
    netlifyIdentity.on('login', (user: any) => {
      console.log({user})
    });
  }

  return (
    <main>
      {!!netlifyIdentity.currentUser() && <Menu />}
      {!netlifyIdentity.currentUser() &&
        <div>
          <Button onClick={handleAuth}>Log in</Button>
        </div>
      }
      <pre>{JSON.stringify(netlifyIdentity.currentUser())}</pre>
    </main >
  );
}
