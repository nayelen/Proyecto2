export const header$$ = document.querySelector('header')
export const navbar$$ = document.createElement('nav');
navbar$$.className = 'navbar';
const aLogo = document.createElement('a');
aLogo.href = 'https://www.instagram.com/nonysmoda/'
const logoImg = document.createElement('img');
logoImg.src = './assets/logononys.png';
export const menuNav = document.createElement('div');
menuNav.className = 'menu-nav';
const abrirMenu = document.createElement('img');
abrirMenu.src = './assets/menu-2.svg'
abrirMenu.alt = 'abrir-menu';
abrirMenu.className = 'abrir-menu';

export const navList$$ = document.createElement('ul');
navList$$.className = 'navlist';
navList$$.innerHTML = ` 
    <li><a class="link" href="#about">Quiénes somos</a></li>
    <li><a class="link" href="#products">Productos</a></li>
    <li><a class="link" href="#contact">Contacto</a></li>`;
header$$.appendChild(navbar$$);
navbar$$.appendChild(aLogo)
aLogo.appendChild(logoImg)
navbar$$.appendChild(menuNav)
menuNav.appendChild(abrirMenu)
navbar$$.appendChild(navList$$);


// menuNav.addEventListener("click", () => {
//     navList$$.classList.add("visible");
// })
// cerrarMenu.addEventListener("click", () => {
//     navList$$.classList.remove("visible");
// });