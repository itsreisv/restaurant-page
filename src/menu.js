
export {menuPage};

const menuPage = (() => {

  const openMenu = () => {

      let items = ['Mercury Pizza', 'Venus Pizza', 'Earth Pizza', 'Mars Pizza', 'Jupiter Pizza', 'Saturn Pizza', 'Uranus Pizza', 'Neptune Pizza'];
      let description = ['Tomato sauce mixed with hot sauce, Mozarella, Jalapenos, and Ghost pepper seasoning', 'Tomato sauce, Mozzarella, Gorgonzola, Parmigiano Reggiano, and Goat cheese',
                          'Tomato sauce, Mozarella cheese, Red onions, Green peppers, Mushrooms, Cherry tomatoes, Artichoke, and Baby spinach','Tomato sauce, Mozarella cheese, and Pepperoni',
                        'Tomato sauce, Mozarella cheese, Red onions, Green and red peppers, Mushrooms, Cherry tomatoes, Chicken, Pepperoni, Sausage, Bacon, and Ham',
                        'Tomato sauce, Mozarella cheese, and Onion rings', 'Tomato sauce, Mozarella cheese, Grilled chicken, Bacon, Ham, and Italian Sausage',
                          'Tomato sauce, Fresh mozarella, Basil, Olive oil & Salt, and Baby Spinache' ]

      let images = ['../src/images/mercury.png', '../src/images/venus.png', '../src/images/earth.png', '../src/images/mars.png', '../src/images/jupiter.png', '../src/images/saturn.png', '../src/images/uranus.png', '../src/images/neptune.png']
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