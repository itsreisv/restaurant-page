export {homePage};
import Icon from './images/earth.png';

const homePage = (() => {

  const openHome = () => {

    const main = document.querySelector('.main');
    const logo = document.createElement('div');
    const logoImage = document.createElement('img');
    const text = document.createElement('div');
    const textOne = document.createElement('p');
    logoImage.src = Icon;
    main.appendChild(logo);
    logo.classList.add('logo');
    logoImage.classList.add('logo-image');
    logo.appendChild(logoImage);
    main.appendChild(text);
    text.appendChild(textOne);
    textOne.textContent = 'Come join us a pizza planet, we serve the best pizza in the solar system!'
    text.classList.add('text');
  }
  return {openHome}
})();