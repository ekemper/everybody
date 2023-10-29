'use client'
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Menu from './Menu';
import SignIn from './SignIn';
// import Image from 'next/image'

const isLoggedIn = () => { return false; };

export default function Home() {
  
  return (
    <main>
      {isLoggedIn() && <Menu/>}
      {!isLoggedIn() && <SignIn/>}
      
    </main>
  );
}

