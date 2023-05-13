export {defaultPage};

const defaultPage = (() => {

  const openDefault = () => {
    const content = document.querySelector('#content');
    const background = document.createElement('img');
    const header = document.createElement('div');
    const title = document.createElement('h1');
    const buttons = document.createElement('div');
    const home = document.createElement('button');
    const menu = document.createElement('button');
    const contact = document.createElement('button');
    const main = document.createElement('div');
    const logo = document.createElement('div');
    const logoImage = document.createElement('img');
    const text = document.createElement('div');
    const textOne = document.createElement('p');
    const footer = document.createElement('div');
    logoImage.src = '../src/images/earth.png';
    background.src = "../src/images/stars.jpg";
    content.appendChild(background);
    background.classList.add('bg');
    content.appendChild(header);
    header.classList.add('header');
    header.appendChild(title);
    title.classList.add('title');
    title.textContent = 'Pizza Planet';
    header.appendChild(buttons);
    buttons.classList.add('buttons');
    home.classList.add('button');
    home.textContent = 'Home';
    menu.classList.add('button');
    menu.textContent = 'Menu';
    contact.classList.add('button');
    contact.textContent = 'Contact';
    buttons.appendChild(home);
    buttons.appendChild(menu);
    buttons.appendChild(contact);
    home.id = 'home';
    menu.id = 'menu';
    contact.id = 'contact';
    content.appendChild(main);
    main.classList.add('main');
    main.appendChild(logo);
    logo.classList.add('logo');
    logoImage.classList.add('logo-image');
    logo.appendChild(logoImage);
    main.appendChild(text);
    text.appendChild(textOne);
    textOne.textContent = 'Come join us a pizza planet, we serve the best pizza in the solar system!'
    text.classList.add('text');
    content.appendChild(footer);
    footer.classList.add('footer');
    footer.textContent = 'Copyright © 2023 Reis VanderPol'
  }
  return {openDefault}
})();
