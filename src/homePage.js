
export function displayHomePage(){
     const homePage = document.getElementById('content');
     const h1 = document.createElement('h1');
     const p = document.createElement('p');
    //  img.src = 'https://img.taste.com.au/FKic8YM6/w1200-h630-cfill/taste/2024/03/5-ingredient-turbo-charged-spaghetti-recipe-196959-1.jpg';

     homePage.innerHTML = "";

     h1.innerHTML = "Welcome";
     p.innerHTML = "Welcome to my Restaurant , Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quaerat veritatis vitae impedit fugit praesentium eum ab minima porro qui est quas deserunt, ratione dolores esse fugiat soluta harum placeat.";

     h1.setAttribute("id","home-header"); 
     p.setAttribute("id","home-pg")
     homePage.style.backgroundImage = "url('https://wallpapercat.com/w/full/2/2/2/585069-3840x2160-desktop-4k-hamburger-background.jpg')";

     homePage.appendChild(h1);
     homePage.appendChild(p);
    //  homePage.appendChild(img);

}