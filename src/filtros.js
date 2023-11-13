
export const pintarFiltros = () => {
  const filters$$ = document.querySelector('#filter');
  const inputSearch = document.createElement('input');
  const inputPrice = document.createElement('input');
  const selectSeller = document.createElement('select');
  const buttonSearch = document.createElement('button');
  const buttonClean = document.createElement('button');

  inputSearch.className = 'search';
  inputSearch.placeholder = '🔍 Buscar';
  inputPrice.className = 'price';
  inputPrice.type = 'number';
  inputPrice.placeholder = 'Precio';
  selectSeller.innerHTML = `
      <label class="seller" for="seller">Vendedores</label>
      <select name="seller" id="seller">
        <option value="All">Filtrar por tienda</option>
        <option value="tiendaonline">Tienda Online</option>
        <option value="nonyshop">Nony Shop</option>
        <option value="onlineshop">Online Shop</option>
        <option value="tiendanony">Tienda Nony</option>`
  selectSeller.className = 'seller';
  buttonSearch.className = 'btn-search';
  buttonSearch.textContent = 'Buscar';
  buttonClean.className = 'btn-clean';
  buttonClean.textContent = 'Limpiar';

  filters$$.appendChild(inputSearch);
  filters$$.appendChild(inputPrice);
  filters$$.appendChild(buttonSearch);
  filters$$.appendChild(selectSeller);
  filters$$.appendChild(buttonClean);

};
