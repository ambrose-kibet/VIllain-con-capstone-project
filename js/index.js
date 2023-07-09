const sidebar = document.querySelector('.sidebar-container');
const sidebarLinks = document.querySelectorAll('.link');
const closeBtn = document.querySelector('.close-btn');
const openBtn = document.querySelector('.togler');
const speakerContainer = document.querySelector('.speaker-container');
const toggler = document.querySelector('.more-togler');
const speakers = [
  {
    name: 'Dr. Joseph Albert Nefario',
    image: './assets/drnefario.jpg',
    position: "Gru's gadget man, Owner of Criminal Records (formerly)",
    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus `,
  },
  {
    name: 'Scarlet OverKill',
    image: './assets/ScarletOverkillWallpaper.webp',
    position: `Supervillain,
Queen Of England (Formerly)`,
    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus `,
  },
  {
    name: 'El Macho',
    image: './assets/elmacho.jpg',
    position: `Owner of Salsa & Salsa
machoest Villain`,
    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus `,
  },
  {
    name: 'Vector',
    image: './assets/Vector.webp',
    position:
      "World's #1 most Slappin' Supervillain with both Direction and Magnitude",
    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus `,
  },
  {
    name: 'Mr. Perkins',
    image: './assets/perkins.jpg',
    position: 'President of the Bank of Evil',
    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus `,
  },
  {
    name: 'Wild Knuckles',
    image: './assets/wild_knuckles.jpg',
    position: 'Villain, Founder of the Vicious 6 (both formerly)',
    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus `,
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
  speakers.map((speaker, i) => {
    const { name, image, position, info } = speaker;
    const article = document.createElement('article');
    if (i > 1) {
      article.className = 'card hide-card';
    } else {
      article.className = 'card';
    }
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
  toggler.addEventListener('click', (e) => {
    let content = e.target.innerHTML;
    const allCards = speakerContainer.querySelectorAll('.card');

    if (content.match(/Load/)) {
      e.target.innerHTML = `Show Less <i class="fa fa-angle-up" aria-hidden="true"></i>`;
      allCards.forEach((card) => {
        if (card.classList.contains('hide-card')) {
          card.classList.remove('hide-card');
        }
      });
    } else {
      e.target.innerHTML = `Load More <i class="fa fa-angle-down" aria-hidden="true"></i>`;
      allCards.forEach((card, i) => {
        if (i > 1) {
          card.classList.add('hide-card');
        }
      });
    }
  });
});
