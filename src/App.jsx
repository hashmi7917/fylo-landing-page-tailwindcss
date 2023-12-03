import { useState } from 'react';
import './App.css';
import Logo from './assets/images/logo.svg';
import FooterLogo from './assets/images/logo-footer.svg';
import HeroImage from './assets/images/illustration-1.svg';
import ContentImage from './assets/images/illustration-2.svg';
import CurveBackgroundMob from './assets/images/bg-curve-mobile.svg';
import CurveBackgroundDesktop from './assets/images/bg-curve-desktop.svg';
import QuoateIcon from './assets/images/icon-quotes.svg';
import Avatar from './assets/images/avatar-testimonial.jpg';

function App() {
  return (
    <div className="mx-auto max-w-sm bg-white md:max-w-md lg:max-w-lg xl:max-w-full">
      <header className="pb-8 xl:mb-28">
        <nav className="w-full flex justify-between items-center p-4 xl:p-8 xl:w-11/12 xl:mx-auto ">
          <img className="w-20" src={Logo} alt="logo" />
          <ul className="flex justify-evenly xl:justify-evenly xl:w-1/3 xl:items-center w-1/2 text-xs font-normal text-primary-DesaturatedBlue">
            <li>Features</li>
            <li>Team</li>
            <li>Sign In</li>
          </ul>
        </nav>
        <div className="flex flex-col xl:flex-row-reverse justify-around items-center pt-12 text-center xl:text-left px-4">
          <div className="w-full xl:w-5/12">
            <img className="mx-auto" src={HeroImage} alt="illustration" />
          </div>
          <div className="w-full xl:w-5/12 tracking-wider p-2">
            <h1 className="text-2xl xl:text-3xl xl:w-11/12 font-semibold py-6 leading-relaxed text-primary-VeryDarkBlue">
              All your files in one secure location, accessible anywhere.
            </h1>
            <p className="text-sm font-light leading-normal text-slate-600 pb-8 xl:w-10/12">
              Fylo stores your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends,
              family, and co-workers.
            </p>
            <form className="w-11/12 xl:w-9/12 mx-auto xl:mx-0 flex flex-col xl:flex-row p-1 xl:p-0 xl:items-center xl:justify-center justify-between pb-12">
              <input
                className="font-thin text-xs border-2 placeholder-neutral-LightGray border-neutral-LightGray px-4 py-2 rounded-sm shadow-sm xl:w-3/4"
                type="text"
                name="email"
                id=""
                placeholder="Enter your email"
                required
              />
              <button
                className="bg-primary-BirghtBlue text-neutral-LightGrayishBlue tracking-wider text-xs py-2.5 mt-4 xl:mt-0 xl:ml-2 rounded-sm shadow-xl font-raleway font-bold xl:w-1/2"
                type="submit"
              >
                Get Started
              </button>
            </form>
          </div>
        </div>
      </header>
      <div className="w-full px-4 xl:px-3 pt-8 pb-12 bg-neutral-LightGrayishBlue relative">
        <div className="xl:w-11/12 xl:mx-auto flex flex-col xl:flex-row-reverse justify-around items-center text-center xl:text-left">
          <div className="w-full xl:w-3/4">
            <img
              className="w-full absolute left-0 -top-8 xl:hidden"
              src={CurveBackgroundMob}
              alt="curve"
            />
            <img
              className="xl:block hidden w-full absolute left-0 -top-28 h-40"
              src={CurveBackgroundDesktop}
              alt="CurveBackgroundDesktop"
            />
            <div className="">
              <img className="mx-auto" src={ContentImage} alt="illustration" />
            </div>
          </div>
          <div className="w-full tracking-wider p-2 xl:flex xl:flex-col">
            <h4 className="text-sm xl:text-4xl font-bold py-6 leading-relaxed text-primary-VeryDarkBlue">
              Stay productive, wherever you are
            </h4>
            <p className="text-left text-xs xl:text-sm font-light leading-relaxed text-primary-DesaturatedBlue pb-6 xl:w-8/12">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className="text-left text-xs font-light leading-relaxed text-slate-600 pb-8 xl:pb-4 xl:w-8/12">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required!
            </p>
            <div className="pb-8">
              <button className="border-b-2 border-primary-ModerateCyan text-primary-ModerateCyan text-xs font-light py-2">
                See how Fylo works{' '}
                <i className="fa-solid fa-circle-arrow-right"></i>
              </button>
            </div>
            <div className="w-9/6 mx-auto xl:mx-0 xl:w-5/12 bg-white px-6 rounded-md shadow-xl ring-slate-200 ring-1">
              <img className="py-4" src={QuoateIcon} alt="quoateIcon" />
              <h6 className="text-left text-xxs font-bold text-slate-500 tracking-normal leading-relaxed">
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
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
      </div>
      <div className="flex flex-col xl:flex-row justify-between items-center w-full bg-primary-DesaturatedBlue text-center xl:text-left xl:items-center p-6 text-neutral-LightGrayishBlue xl:px-20">
        <div className="px-6 xl:px-0 py-4 xl:w-9/12">
          <h4 className="text-md xl:text-2xl font-bold">
            Get early access today
          </h4>
          <p className="text-xs pt-4 tracking-wider leading-relaxed px-3 xl:px-0 xl:w-6/12">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        <form className="w-3/4 flex flex-col p-1 justify-between py-6 xl:w-1/2">
          <input
            className="font-thin text-xs border-2 px-4 py-1.5 rounded-sm mb-2 shadow-md xl:w-11/12"
            type="text"
            name="email"
            id=""
            placeholder="email@example.com"
            required
          />
          <button
            className="bg-primary-BirghtBlue text-neutral-LightGrayishBlue text-xs py-2 xl:w-6/12"
            type="submit"
          >
            Get Started For Free
          </button>
        </form>
      </div>
      <div className="w-full flex flex-col xl:flex-row xl:items-end justify-between items-start bg-primary-VeryDarkBlue text-left text-neutral-LightGray px-8 py-8 font-opensans font-light xl:py-20 xl:px-16">
        <div className="py-4 xl:w-5/12 xl:pb-20">
          <img className="py-6" src={FooterLogo} alt="footer logo" />
          <p className="text-sm py-2">
            <i className="fa-solid fa-phone-volume mr-4 text-neutral-LightGrayishBlue cursor-pointer"></i>
            Phone: +1-543-123-4567
          </p>
          <p className="text-sm">
            <i className="fa-solid fa-square-envelope text-lg mr-4 text-neutral-LightGrayishBlue cursor-pointer"></i>
            example@fylo.com
          </p>
        </div>
        <ul className="py-4 text-sm flex flex-col justify-evenly h-40 xl:w-5/12">
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Jobs</li>
          <li className="cursor-pointer">Press</li>
          <li className="cursor-pointer">Blog</li>
        </ul>
        <ul className="py-4 text-sm flex flex-col justify-evenly h-40 xl:w-5/12">
          <li className="cursor-pointer">Contact Us</li>
          <li className="cursor-pointer">Terms</li>
          <li className="cursor-pointer">Privacy</li>
        </ul>
        <div className="flex justify-around w-1/2 self-center text-sm pt-4 pb-6 text-white xl:w-1/4">
          <i className="fa-brands fa-facebook-f hover:ring-primary-DesaturatedBlue w-7 h-7 text-center ring-white ring-2 rounded-full px-2.8 py-2 cursor-pointer "></i>
          <i className="fa-brands fa-twitter hover:ring-primary-DesaturatedBlue w-7 h-7 text-center ring-white ring-2 rounded-full px-2.8 py-2 cursor-pointer "></i>
          <i className="fa-brands fa-instagram hover:ring-primary-DesaturatedBlue w-7 h-7 text-center ring-white ring-2 rounded-full px-2.8 py-2 cursor-pointer "></i>
        </div>
      </div>
    </div>
  );
}

export default App;
