
export {menuPage};
import Icon1 from './images/mercury.png';
import Icon2 from './images/venus.png';
import Icon3 from './images/earth.png';
import Icon4 from './images/mars.png';
import Icon5 from './images/jupiter.png';
import Icon6 from './images/saturn.png';
import Icon7 from './images/uranus.png';
import Icon8 from './images/neptune.png';

const menuPage = (() => {

  const openMenu = () => {

      let items = ['Mercury Pizza', 'Venus Pizza', 'Earth Pizza', 'Mars Pizza', 'Jupiter Pizza', 'Saturn Pizza', 'Uranus Pizza', 'Neptune Pizza'];
      let description = ['Tomato sauce mixed with hot sauce, Mozarella, Jalapenos, and Ghost pepper seasoning', 'Tomato sauce, Mozzarella, Gorgonzola, Parmigiano Reggiano, and Goat cheese',
                          'Tomato sauce, Mozarella cheese, Red onions, Green peppers, Mushrooms, Cherry tomatoes, Artichoke, and Baby spinach','Tomato sauce, Mozarella cheese, and Pepperoni',
                        'Tomato sauce, Mozarella cheese, Red onions, Green and red peppers, Mushrooms, Cherry tomatoes, Chicken, Pepperoni, Sausage, Bacon, and Ham',
                        'Tomato sauce, Mozarella cheese, and Onion rings', 'Tomato sauce, Mozarella cheese, Grilled chicken, Bacon, Ham, and Italian Sausage',
                          'Tomato sauce, Fresh mozarella, Basil, Olive oil & Salt, and Baby Spinache' ]

      let images = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8]
    const main = document.querySelector('.main');
    const box = document.createElement('div');
    main.appendChild(box);
    main.classList.add('main-menu');
    box.classList.add('box-menu');


    for(let i = 0; i < items.length; i++) {
      const menuItem = document.createElement('div');
      const itemTitle = document.createElement('h3');
      const itemDescription = document.createElement('p');
      const itemImage = document.createElement('img');
      menuItem.classList.add('menu-item');
      box.appendChild(menuItem);
      menuItem.appendChild(itemTitle);
      itemTitle.classList.add('item-title');
      itemTitle.textContent = items[i];
      menuItem.appendChild(itemDescription);
      itemDescription.classList.add('item-description');
      itemDescription.textContent = description[i];
      menuItem.appendChild(itemImage);
      itemImage.classList.add('item-images');
      itemImage.src = images[i];


    }
    

  }
  return {openMenu}
})();