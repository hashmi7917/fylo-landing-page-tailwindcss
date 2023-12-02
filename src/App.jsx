import { useState } from 'react';
import './App.css';
import Logo from './assets/images/logo.svg';
import FooterLogo from './assets/images/logo-footer.svg';
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
          minHeight: '90vh',
          backgroundImage: `url(${CurveBackgroundMob})`,
          backgroundPosition: '51%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className="flex flex-col justify-around items-center text-center px-4 pt-8 pb-12"
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
          <div className="w-full shadow-xl py-4 px-6 rounded-md">
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
      <div className="flex flex-col justify-between items-center w-full bg-primary-DesaturatedBlue text-center p-6 text-neutral-LightGrayishBlue">
        <div className="px-6 py-4">
          <h4 className="text-md font-bold">Get early access today</h4>
          <p className="text-xs pt-4 tracking-wider leading-relaxed px-3">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        <form className="w-3/4 flex flex-col p-1 justify-between py-6">
          <input
            className="font-thin text-xs border-2 px-4 py-1.5 rounded-sm mb-2"
            type="text"
            name="email"
            id=""
            placeholder="Enter your email"
          />
          <button
            className="bg-blue-500 text-neutral-LightGrayishBlue text-sm py-2"
            type="submit"
          >
            Get Started
          </button>
        </form>
      </div>
      <div className="w-full flex flex-col justify-between items-start bg-primary-VeryDarkBlue text-left text-neutral-LightGrayishBlue px-8 py-8 font-opensans font-light">
        <div className="py-4">
          <img className="py-6" src={FooterLogo} alt="footer logo" />
          <p className="text-sm py-2">
            <i class="fa-solid fa-phone-volume mr-2"></i>
            Phone: +1-543-123-4567
          </p>
          <p className="text-sm">
            <i class="fa-solid fa-square-envelope text-lg mr-2"></i>
            example@fylo.com
          </p>
        </div>
        <ul className="py-4 text-sm flex flex-col justify-evenly h-40">
          <li>About Us</li>
          <li>Jobs</li>
          <li>Press</li>
          <li>Blog</li>
        </ul>
        <ul className="py-4 text-sm flex flex-col justify-evenly h-40">
          <li>Contact Us</li>
          <li>Terms</li>
          <li>Privacy</li>
        </ul>
        <div className="flex justify-around w-1/2 self-center text-sm pt-4 pb-6">
          <i className="fa-brands fa-facebook-f hover:ring-primary-DesaturatedBlue w-7 h-7 text-center ring-white ring-2 rounded-full px-2.8 py-2 cursor-pointer"></i>
          <i className="fa-brands fa-twitter hover:ring-primary-DesaturatedBlue w-7 h-7 text-center ring-white ring-2 rounded-full px-2.8 py-2 cursor-pointer"></i>
          <i className="fa-brands fa-instagram hover:ring-primary-DesaturatedBlue w-7 h-7 text-center ring-white ring-2 rounded-full px-2.8 py-2 cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
}

export default App;
