
export function displayMenuPage(){
    const menuPage = document.getElementById('content');
    menuPage.innerHTML = '';
    menuPage.style.backgroundImage = '';
    menuPage.style.backgroundColor = 'black';


    let h1 = document.createElement('h1'); 
    let cards = document.createElement('div');
    let card1 = document.createElement('div');
    let card2 = document.createElement('div');
    let card3 = document.createElement('div');
    let card4 = document.createElement('div');
    let card5 = document.createElement('div');
    let card6 = document.createElement('div');


    h1.innerHTML = 'Burgers';
    card1.innerHTML = ` 
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRGUb7FCCL4dbZzC_D95cofTjknxolgS47FQ&s" alt="">
    <p class="item-name">Cheese Burger <span class="item-price">2.00$</span></p>`;
    card2.innerHTML = ` 
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRGUb7FCCL4dbZzC_D95cofTjknxolgS47FQ&s" alt="">
   <p class="item-name">Cheese Burger <span class="item-price">2.00$</span></p>`;
   card3.innerHTML = ` 
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRGUb7FCCL4dbZzC_D95cofTjknxolgS47FQ&s" alt="">
  <p class="item-name">Cheese Burger <span class="item-price">2.00$</span></p>`;
  card4.innerHTML = ` 
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRGUb7FCCL4dbZzC_D95cofTjknxolgS47FQ&s" alt="">
 <p class="item-name">Cheese Burger <span class="item-price">2.00$</span></p>`;
 card5.innerHTML = ` 
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRGUb7FCCL4dbZzC_D95cofTjknxolgS47FQ&s" alt="">
    <p class="item-name">Cheese Burger <span class="item-price">2.00$</span></p>`;
    card6.innerHTML = ` 
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRGUb7FCCL4dbZzC_D95cofTjknxolgS47FQ&s" alt="">
   <p class="item-name">Cheese Burger <span class="item-price">2.00$</span></p>`;

    h1.setAttribute('class','menu-header');
    cards.setAttribute('class','cards');
    card1.setAttribute('class','card');
    card2.setAttribute('class','card');
    card3.setAttribute('class','card');
    card4.setAttribute('class','card');
    card5.setAttribute('class','card');
    card6.setAttribute('class','card');



    menuPage.appendChild(h1);
    menuPage.appendChild(cards);
    cards.appendChild(card1);
    cards.appendChild(card2);
    cards.appendChild(card3);
    cards.appendChild(card4);
    cards.appendChild(card5);
    cards.appendChild(card6);


}

