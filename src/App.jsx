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
          <ul className="flex justify-evenly w-1/2 text-xs font-normal text-primary-DesaturatedBlue">
            <li>Features</li>
            <li>Team</li>
            <li>Sign In</li>
          </ul>
        </nav>
        <div className="flex flex-col justify-around items-center pt-12 text-center px-4">
          <div className="w-full">
            <img className=" mx-auto" src={HeroImage} alt="illustration" />
          </div>
          <div className="w-full tracking-wider p-2">
            <h1 className="text-2xl font-semibold py-6 leading-relaxed text-primary-VeryDarkBlue">
              All your files in one secure location, accessible anywhere.
            </h1>
            <p className="text-sm font-light leading-normal text-slate-600 pb-8">
              Fylo stores your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends,
              family, and co-workers.
            </p>
            <form className="w-11/12 mx-auto flex flex-col p-1 justify-between pb-12">
              <input
                className="font-thin text-xs border-2 placeholder-neutral-LightGray border-neutral-LightGray px-4 py-2 rounded-sm shadow-sm"
                type="text"
                name="email"
                id=""
                placeholder="Enter your email"
                required
              />
              <button
                className="bg-primary-BirghtBlue text-neutral-LightGrayishBlue tracking-wider text-xs py-2.5 mt-4 rounded-sm shadow-xl font-raleway font-bold"
                type="submit"
              >
                Get Started
              </button>
            </form>
          </div>
        </div>
      </header>
      <div className="w-full flex flex-col justify-around items-center text-center px-4 pt-8 pb-12 bg-neutral-LightGrayishBlue relative">
        <div className="w-full">
          <img
            className="w-ful absolute left-0 -top-8"
            src={CurveBackgroundMob}
            alt="curve"
          />
          <img className=" mx-auto" src={ContentImage} alt="illustration" />
        </div>
        <div className="w-full tracking-wider p-2">
          <h4 className="text-sm font-bold py-6 leading-relaxed text-primary-VeryDarkBlue">
            Stay productive, wherever you are
          </h4>
          <p className="text-left text-xs font-light leading-relaxed text-primary-DesaturatedBlue pb-6">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="text-left text-xs font-light leading-relaxed text-slate-600 pb-8">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required!
          </p>
          <div className="pb-8">
            <button className="border-b-2 border-primary-ModerateCyan text-primary-ModerateCyan text-xs font-light py-2">
              See how Fylo works{' '}
              <i className="fa-solid fa-circle-arrow-right"></i>
            </button>
          </div>
          <div className="w-5/6 mx-auto bg-white px-6 rounded-md shadow-xl ring-slate-200 ring-1">
            <img className="py-4" src={QuoateIcon} alt="quoateIcon" />
            <h6 className="text-left text-xxs font-bold text-slate-500 tracking-normal leading-relaxed">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </h6>
            <div className="flex py-4">
              <img className="h-8 rounded-full" src={Avatar} alt="avatar" />
              <div className="text-left px-2">
                <p className="text-xs font-bold">Kyle Burton</p>
                <p className="text-xxs text-neutral-LightGray -mt-1">
                  Founder & CEO, Huddle
                </p>
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
            className="font-thin text-xs border-2 px-4 py-1.5 rounded-sm mb-2 shadow-md"
            type="text"
            name="email"
            id=""
            placeholder="email@example.com"
            required
          />
          <button
            className="bg-primary-BirghtBlue text-neutral-LightGrayishBlue text-xs py-2"
            type="submit"
          >
            Get Started For Free
          </button>
        </form>
      </div>
      <div className="w-full flex flex-col justify-between items-start bg-primary-VeryDarkBlue text-left text-neutral-LightGray px-8 py-8 font-opensans font-light">
        <div className="py-4">
          <img className="py-6" src={FooterLogo} alt="footer logo" />
          <p className="text-sm py-2">
            <i className="fa-solid fa-phone-volume mr-4 text-neutral-LightGrayishBlue"></i>
            Phone: +1-543-123-4567
          </p>
          <p className="text-sm">
            <i className="fa-solid fa-square-envelope text-lg mr-4 text-neutral-LightGrayishBlue"></i>
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
        <div className="flex justify-around w-1/2 self-center text-sm pt-4 pb-6 text-white">
          <i className="fa-brands fa-facebook-f hover:ring-primary-DesaturatedBlue w-7 h-7 text-center ring-white ring-2 rounded-full px-2.8 py-2 cursor-pointer"></i>
          <i className="fa-brands fa-twitter hover:ring-primary-DesaturatedBlue w-7 h-7 text-center ring-white ring-2 rounded-full px-2.8 py-2 cursor-pointer"></i>
          <i className="fa-brands fa-instagram hover:ring-primary-DesaturatedBlue w-7 h-7 text-center ring-white ring-2 rounded-full px-2.8 py-2 cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
}

export default App;
