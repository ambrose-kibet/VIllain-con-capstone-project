const sidebar = document.querySelector('.sidebar-container');
const sidebarLinks = document.querySelectorAll('.link');
const closeBtn = document.querySelector('.close-btn');
const openBtn = document.querySelector('.togler');
const speakerContainer = document.querySelector('.speaker-container');
const speakers = [
  {
    name: 'Dr. Joseph Albert Nefario',
    image: './assets/drnefario.jpg',
    position: `	
Gru's gadget man,
Owner of Criminal Records (formerly)`,
    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus sed exercitationem nostrum, ipsum aut quidem?`,
  },
  {
    name: 'Scarlet OverKill',
    image: './assets/ScarletOverkillWallpaper.webp',
    position: `Supervillain,
Queen Of England (Formerly)`,
    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus sed exercitationem nostrum, ipsum aut quidem?`,
  },
  {
    name: 'El Macho',
    image: './assets/El_Macho..webp',
    position: `Owner of Salsa & Salsa
machoest Villain`,
    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus sed exercitationem nostrum, ipsum aut quidem?`,
  },
  {
    name: 'Vector',
    image: './assets/Vector.webp',
    position:
      "World's #1 most Slappin' Supervillain with both Direction and Magnitude",
    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus sed exercitationem nostrum, ipsum aut quidem?`,
  },
  {
    name: 'Mr. Perkins',
    image: './assets/Mister_Perkins.webp',
    position: 'President of the Bank of Evil',
    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus sed exercitationem nostrum, ipsum aut quidem?`,
  },
  {
    name: 'Wild Knuckles',
    image: './assets/wild_knuckles.jpg',
    position: 'Villain, Founder of the Vicious 6 (both formerly)',
    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus sed exercitationem nostrum, ipsum aut quidem?`,
  },
];
openBtn.addEventListener('click', () => sidebar.classList.add('show-sidebar'));
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
});
sidebarLinks.forEach((btn) => {
  btn.addEventListener('click', () => sidebar.classList.remove('show-sidebar'));
});
window.addEventListener('DOMContentLoaded', () => {
  speakers.map((speaker) => {
    const { name, image, position, info } = speaker;
    const article = document.createElement('article');
    article.className = 'card';
    article.innerHTML = ` <div class="card-header">
              <div class="decor">
                <img src="./assets/decor.png" alt="decoration" width="100%" />
              </div>
              <div class="card-image">
                <img
                  src="${image}"
                  alt="${name}"
                  height="100%"
                />
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-info">${position}</p>
              <p>
                ${info}
              </p>
            </div>`;
    return speakerContainer.appendChild(article);
  });
});
