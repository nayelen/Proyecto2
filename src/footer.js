export const footer$$ = document.querySelector('footer');
export const about = document.createElement('div');
const aboutTitle = document.createElement('h1');
const aboutText = document.createElement('p');
export const contact = document.createElement('div');
const contactTitle = document.createElement('h2');
const contactText = document.createElement('p');

about.id = 'about';
aboutTitle.textContent = 'Sobre Nosotros';
aboutText.textContent = "Nonys transmite su esencia a través de un “concept store”, enfocado en diseñar, producir y crear productos originales";
contact.id = 'contact';
contactTitle.textContent = "Contacto";
contactText.textContent = "📩  pedidosnonys@nonys.com";


about.appendChild(aboutTitle)
about.appendChild(aboutText)
contact.appendChild(contactTitle)
contact.appendChild(contactText)