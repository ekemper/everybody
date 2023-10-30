'use client'



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
    <main className=' font-mono '>


      {/*   TODO: figure out the auth callbacks */ }
      
     
      {/* {!netlifyIdentity.currentUser() &&
        <div className=''>
          <Button onClick={handleAuth}>Log in</Button>
        </div>
      } */}
      {/* <pre>{JSON.stringify(netlifyIdentity.currentUser())}</pre> */}
    </main >
  );
}
