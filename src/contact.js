export {contactPage};

const contactPage = (() => {

  const openContact = () => {
  

    const main = document.querySelector('.main');
    const box = document.createElement('div');
    const location = document.createElement('div');
    const locationMap = document.createElement('iframe');
    const info = document.createElement('div');
    const owner = document.createElement('h2');
    const ownerName = document.createElement('h3');
    const ownerInfo = document.createElement('p');
    const ownerNumber = document.createElement('p');
    const rest = document.createElement('h3');
    const restLocation = document.createElement('p');
    const restNumber = document.createElement('p');
    const infoOne = document.createElement('div');
    const infoTwo = document.createElement('div');
    const infoHead = document.createElement('div');
    locationMap.src = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9621959.309814518!2d-82.49214040982399!3d37.95480777718193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1683820178359!5m2!1sen!2sus"
    location.appendChild(locationMap);
    locationMap.classList.add('location');
    box.appendChild(location);
    box.appendChild(info);
    main.classList.add('main-contact');
    main.appendChild(box);
    box.classList.add('box');
    info.classList.add('info');
    infoOne.classList.add('info-one');
    infoTwo.classList.add('info-two');
    info.appendChild(infoHead);
    info.appendChild(infoOne);
    info.appendChild(infoTwo);
    infoHead.appendChild(owner);
    infoOne.appendChild(ownerName);
    infoOne.appendChild(ownerInfo);
    infoOne.appendChild(ownerNumber);
    infoTwo.appendChild(rest);
    infoTwo.appendChild(restLocation);
    infoTwo.appendChild(restNumber);
    ownerName.textContent = 'Owner';
    owner.textContent = 'Contact Information';
    ownerInfo.textContent ='Reis VanderPol ';
    ownerNumber.textContent = '123-456-7890';
    rest.textContent = 'Pizza Planet';
    restLocation.textContent = '42 Wallaby Way, Sydney';
    restNumber.textContent = '098-765-4321';


  }
  return {openContact};
})();