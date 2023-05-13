import "./styles.css"
import {homePage} from '../src/home.js';
import {menuPage} from '../src/menu.js';
import {contactPage} from '../src/contact.js';
import {defaultPage} from '../src/default.js';

defaultPage.openDefault();


document.querySelector('#menu').addEventListener('click', () => {
  const main = document.querySelector('.main');
  main.textContent = '';
  main.classList.remove('main-contact');
  menuPage.openMenu();
})

document.querySelector('#home').addEventListener('click', () => {
  const main = document.querySelector('.main');
  main.textContent = '';
  main.classList.remove('main-contact');
  main.classList.remove('main-menu');
  main.classList.add('main');
  homePage.openHome();
})

document.querySelector('#contact').addEventListener('click', () => {
  const main = document.querySelector('.main');
  main.textContent = '';
  main.classList.remove('main-menu');
  contactPage.openContact();
})