import { useState } from 'react';
import './App.css';
import Logo from './assets/images/logo.svg';
import HeroImage from './assets/images/illustration-1.svg';

function App() {
  return (
    <div className="mx-auto max-w-sm">
      <header>
        <nav className="w-full flex justify-between items-center p-4">
          <img className="w-20" src={Logo} alt="logo" />
          <ul className="flex justify-evenly w-1/2 text-sm">
            <li>Features</li>
            <li className="px-2">Team</li>
            <li>Sign In</li>
          </ul>
        </nav>
        <div className="flex flex-col justify-around items-center pt-12 text-center">
          <div className="w-full">
            <img className=" mx-auto" src={HeroImage} alt="illustration" />
          </div>
          <div className="w-full tracking-wider p-2">
            <h1 className="text-2xl font-bold py-6 leading-relaxed">
              All your files in one secure location, accessible anywhere.
            </h1>
            <p className="text-sm font-light leading-relaxed">
              Fylo stores your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends,
              family, and co-workers.
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
