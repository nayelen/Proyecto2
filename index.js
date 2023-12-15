import { pintarProductos, PRODUCTOS } from "./src/products.js";
import { header$$, menuNav, navbar$$, navList$$ } from "./src/header.js";
import { pintarFiltros } from "./src/filtros.js";
import { about, contact, footer$$ } from "./src/footer.js";


const main$$ = document.querySelector('main')
header$$.appendChild(navbar$$);
pintarProductos(PRODUCTOS);
pintarFiltros();
footer$$.appendChild(about);
footer$$.appendChild(contact);

menuNav.addEventListener('click', () => {
  navList$$.classList.toggle('activo')
})
let filtered = [...PRODUCTOS]

const inputSearch$$ = document.querySelector('.search');
const filterByName = (e) => {
  filtered = filtered.filter((product) => product.name.toLowerCase().includes(e.target.value.toLowerCase()));
  console.log(e.target.value)
  pintarProductos(filtered)

};

const filterSeller$$ = document.querySelector('.seller');
const filterSeller = (e) => {
  filtered = filtered.filter((product) => {
    if (e.target.value === "All") {
      return product;
    } else if (product.seller === e.target.value) {
      return product;
    }
  });
  pintarProductos(filtered)
};

const filterByPrice$$ = document.querySelector('.btn-search');
const inputPrice$$ = document.querySelector('.price');
const getElementByPrice = (e) => {
  e.preventDefault()
  filtered = filtered.filter((product) => {
    if (inputPrice$$.value >= product.price) {
      return product;
    }
  })
  console.log(filtered)
  pintarProductos(filtered);
  inputPrice$$.value = '';
};
const button$$ = document.querySelector(".btn-clean");
const limpiarFiltros = () => {
  filtered = [...PRODUCTOS];
  pintarProductos(filtered)
  inputSearch$$.value = '';
  inputPrice$$.value = '';
  filterSeller$$.value = "All";
};
inputSearch$$.addEventListener("input", filterByName);
filterSeller$$.addEventListener("change", filterSeller);
button$$.addEventListener("click", limpiarFiltros);
filterByPrice$$.addEventListener("click", getElementByPrice);