import { useState } from 'react';
import './App.css';
import Logo from './assets/images/logo.svg';
import HeroImage from './assets/images/illustration-1.svg';
import ContentImage from './assets/images/illustration-2.svg';
import CurveBackgroundMob from './assets/images/bg-curve-mobile.svg';
import QuoateIcon from './assets/images/icon-quotes.svg';
import Avatar from './assets/images/avatar-testimonial.jpg';

function App() {
  return (
    <div className="mx-auto max-w-sm bg-white">
      <header className="pb-8">
        <nav className="w-full flex justify-between items-center p-4">
          <img className="w-20" src={Logo} alt="logo" />
          <ul className="flex justify-evenly w-1/2 text-sm font-light text-slate-500">
            <li>Features</li>
            <li className="px-2">Team</li>
            <li>Sign In</li>
          </ul>
        </nav>
        <div className="flex flex-col justify-around items-center pt-12 text-center px-4">
          <div className="w-full">
            <img className=" mx-auto" src={HeroImage} alt="illustration" />
          </div>
          <div className="w-full tracking-wider p-2">
            <h1 className="text-2xl font-bold py-6 leading-relaxed text-black">
              All your files in one secure location, accessible anywhere.
            </h1>
            <p className="text-sm font-light leading-relaxed text-slate-600 pb-8">
              Fylo stores your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends,
              family, and co-workers.
            </p>
            <form className="w-full flex flex-col p-1 justify-between h-24">
              <input
                className="font-thin text-sm border-2 px-4 py-1.5 rounded-sm"
                type="text"
                name="email"
                id=""
                placeholder="Enter your email"
              />
              <button
                className="bg-blue-500 text-white text-sm py-2"
                type="submit"
              >
                Get Started
              </button>
            </form>
          </div>
        </div>
      </header>
      <div
        style={{
          width: '100%',
          backgroundImage: `url(${CurveBackgroundMob})`,
          backgroundPosition: '51%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className="flex flex-col justify-around items-center text-center px-4 pt-8"
      >
        <div className="w-full">
          <img className=" mx-auto" src={ContentImage} alt="illustration" />
        </div>
        <div className="w-full tracking-wider p-2">
          <h4 className="font-bold py-6 leading-relaxed text-black">
            Stay productive, wherever you are
          </h4>
          <p className="text-left text-sm font-light leading-relaxed text-slate-600 pb-8">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="text-left text-sm font-light leading-relaxed text-slate-600 pb-8">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required!
          </p>
          <button className="border-b-2 border-green-500 text-green-500 text-sm font-light">
            See how Fylo works <i class="fa-solid fa-circle-arrow-right"></i>
          </button>
          <div className="w-full shadow-xl p-4 rounded-md ">
            <img className="py-4" src={QuoateIcon} alt="quoateIcon" />
            <h6 className="text-left text-xs text-slate-500">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </h6>
            <div className="flex py-4">
              <img className="w-10 rounded-full" src={Avatar} alt="avatar" />
              <div className="text-left px-2">
                <h6 className="text-sm font-bold">Kyle Burton</h6>
                <p className="text-xs font-light">Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
