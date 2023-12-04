# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

#Installation
clone repo and run npm install on vscode

#Challege Information

# Frontend Mentor - Fylo landing page with two column layout solution

This is a solution to the [Fylo landing page with two column layout challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-landing-page-with-two-column-layout-5ca5ef041e82137ec91a50f5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

#Desktop
![Screenshot 2023-12-04 at 11 54 37 AM](https://github.com/hashmi7917/fylo-landing-page-tailwindcss/assets/38833326/fe60a1a7-e131-4688-bdac-b57c63e47b58)

#Mobile
![Screenshot 2023-12-04 at 11 55 02 AM](https://github.com/hashmi7917/fylo-landing-page-tailwindcss/assets/38833326/5af2931f-6e92-4411-af72-07f1ac1abb05)

### Links

- Solution URL: [Github](https://github.com/hashmi7917/fylo-landing-page-tailwindcss)
- Live Site URL: [Netlify](https://fylo-landing-page-tailwindcss-hashmi.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library + Vite
- [Fontawesome](https://fontawesome.com/icons) - Icons
- [Tailwind CSS](https://tailwindcomponents.com/cheatsheet/) - Tailwind CSS Cheatsheet

### What I learned

Tailwind CSS , Flexbox, Layouts

```html
<nav
  className="w-full flex justify-between items-center p-4 xl:p-8 xl:w-11/12 xl:mx-auto "
>
  <img className="w-20" src="{Logo}" alt="logo" />
  <ul
    className="flex justify-evenly xl:justify-evenly xl:w-1/3 xl:items-center w-1/2 text-xs font-normal text-primary-DesaturatedBlue"
  >
    <li className="cursor-pointer">Features</li>
    <li className="cursor-pointer">Team</li>
    <li className="cursor-pointer">Sign In</li>
  </ul>
</nav>
```

```css
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Continued development

Tailwind CSS, CSS Grids, Flexbox, Layouts

### Useful resources

- [Tailwind CSS Cheatsheet](https://tailwindcomponents.com/cheatsheet/) - This helped me for easily access to tailwind css. I really liked this pattern and will use it going forward.

## Author

- Website - [Github-Profile](https://github.com/hashmi7917)
- Frontend Mentor - [@hashmi7917](https://www.frontendmentor.io/profile/hashmi7917)
- Instagram - [@hashmi.developer](https://www.instagram.com/hashmi.developer/)

## Acknowledgments

Thanks to Tailwind CSS Community and Frontend Mentor Community.
