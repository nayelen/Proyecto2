export const PRODUCTOS = [
  {
    name: 'Nony impermeable negra',
    price: 35,
    category: 'impermeable',
    seller: 'tiendaonline',
    description: 'Chaqueta en tela impermeable en color negro',
    image: './assets/nony-1.jpg',
  },
  {
    name: 'Nony polar azul',
    price: 40,
    category: 'polar',
    seller: 'nonyshop',
    description: 'Chaqueta de tela polar en color azul',
    image: './assets/Nonyazul-5.jpg',
  },
  {
    name: 'Nony paño beige',
    price: 36,
    category: 'paño',
    seller: 'onlineshop',
    description: 'Chaqueta en paño de lana de color beige',
    image: './assets/Nonybeige.jpg',
  },
  {
    name: 'Nony paño burdeos',
    price: 36,
    category: 'paño',
    seller: 'onlineshop',
    description: 'Chaqueta en paño de lana de color burdeos',
    image: './assets/Nonyburdeos.jpg',
  },
  {
    name: 'Nony negra algodón',
    price: 30,
    category: 'algodon',
    seller: 'nonyshop',
    description: 'Chaqueta de algodón en color negro',
    image: './assets/Nonynegra.jpg',
  },
  {
    name: 'Nony verde algodón',
    price: 30,
    category: 'algodon',
    seller: 'tiendaonline',
    description: 'Chaqueta de sarga de algodón en color verde',
    image: './assets/Nonyverde.jpg',
  },
  {
    name: 'Traje beige lino',
    price: 65,
    category: 'traje',
    seller: 'nonyshop',
    description: 'Traje completo con chaqueta Nony y pantalón hecho en tela de lino de color beige',
    image: './assets/Nonytraje.jpg',
  },
  {
    name: 'Traje verde de algodón',
    price: 60,
    category: 'traje',
    seller: 'nonyshop',
    description: 'Traje completo con chaqueta Nony y pantalón hecho en tela de sarga de algdón de color verde',
    image: './assets/Trajeverde.jpg',
  },
  {
    name: 'Pantalones',
    price: 25,
    category: 'pantalon',
    seller: 'tiendanony',
    description: 'Pantalones de diversos colores, se pueden hacer con la misma tela que elijas la chaqueta',
    image: './assets/pantalones.jpg',
  },
  {
    name: 'Pantalón verde algodón',
    price: 25,
    category: 'pantalon',
    seller: 'tiendanony',
    description: 'Pantalón verde de tela de sarga de algodón de color verde',
    image: './assets/Pantalonverde.jpg',
  },
];
export const pintarProductos = (productos) => {
  const products$$ = document.querySelector("#products");
  products$$.innerHTML = "";

  if (productos.length === 0) {
    const mensaje = document.createElement('h2');
    mensaje.textContent = 'Lo siento, este producto no está disponible.';
    products$$.appendChild(mensaje);
  }

  productos.forEach((product) => {
    const divProd = document.createElement('div');
    divProd.className = 'divContainer';
    const imgProd = document.createElement('img');
    const divText = document.createElement('div');
    divText.className = 'divText';
    const name = document.createElement('h3');
    const seller = document.createElement('p');
    const price = document.createElement('p');

    imgProd.src = product.image;
    name.textContent = product.name;
    seller.textContent = 'Enviado por ' + product.seller;
    price.textContent = product.price + ' €';


    products$$.appendChild(divProd);
    divProd.appendChild(imgProd)
    divProd.appendChild(divText);
    divText.appendChild(name)
    divText.appendChild(seller)
    divText.appendChild(price)


  });
};



