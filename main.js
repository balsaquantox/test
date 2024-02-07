let allPromotions = [];

async function fetchPromotions() {
     try {
          const response = await fetch('data.json');
          const data = await response.json();
          return data;
     } 
     catch (error) {
          console.error('Error fetching promotions:', error);
     }
}

function renderPromotions(promotions) {
     const container = document.getElementById('promotions-container');
     container.innerHTML = ''; // Reset sadrzaja

     // Sadrzaj
     promotions.forEach(promotion => {
          const promotionCard = document.createElement('div');
          promotionCard.className = 'promotion-card';

          const promotionImage = document.createElement('img');
          promotionImage.src = promotion.heroImageUrl;
          promotionImage.alt = promotion.name;
          promotionImage.className = 'promotion-image';

          const promotionDetails = document.createElement('div');
          promotionDetails.className = 'promotion-details';

          const promotionTitle = document.createElement('div');
          promotionTitle.className = 'promotion-title';
          promotionTitle.textContent = promotion.name;

          const promotionDescription = document.createElement('div');
          promotionDescription.className = 'promotion-description';
          promotionDescription.textContent = promotion.description;

          const promotionButtons = document.createElement('div');
          promotionButtons.className = 'promotion-buttons';

          const termsButton = createButton(promotion.termsAndConditionsButtonText);
          const joinButton = createButton(promotion.joinNowButtonText);

          promotionButtons.appendChild(termsButton);
          promotionButtons.appendChild(joinButton);

          promotionDetails.appendChild(promotionTitle);
          promotionDetails.appendChild(promotionDescription);
          promotionDetails.appendChild(promotionButtons);

          promotionCard.appendChild(promotionImage);
          promotionCard.appendChild(promotionDetails);

          container.appendChild(promotionCard);
     });
}


function createButton(text) {
     const button = document.createElement('a');
     button.href = '#';
     button.className = 'btn' + (text === "Terms & Conditions" ? ' terms-btn' : text === "Join Now" ? ' join-btn' : '');
     button.textContent = text;
     return button;
}


async function init() {
     allPromotions = await fetchPromotions();

     // Sortiranje promocija
     allPromotions.sort((a, b) => a.sequence - b.sequence);

     // Prikaz svih promocija
     renderPromotions(allPromotions);
}


// Filtriranje promocija
function filterPromotions(type) {
     var buttons = document.querySelectorAll('.btn');
     buttons.forEach(function(button) {
          button.classList.remove('active');
     });

     // Dodavanje klase active kliknutom btn-u
     event.target.classList.add('active');

     const filteredPromotions = (type === 'new')
          ? allPromotions.filter(promo => promo.onlyNewCustomers)
          : allPromotions;

     // Sortiranje za filtrirane promocije
     filteredPromotions.sort((a, b) => a.sequence - b.sequence);

     // Prikaz filtriranih promocija
     renderPromotions(filteredPromotions);
}

// Inicijalizacija
init();