
export function displayHomePage(){
     const homePage = document.getElementById('content');
     const h1 = document.createElement('h1');
     const span = document.createElement('span');
     const img = document.createElement('img');
    //  img.src = 'https://img.taste.com.au/FKic8YM6/w1200-h630-cfill/taste/2024/03/5-ingredient-turbo-charged-spaghetti-recipe-196959-1.jpg';

     homePage.innerHTML = "";

     h1.innerHTML = "PURE ITALIAN";
     span.innerHTML = "Home to some of the best traditional italian recipes";
     

     homePage.appendChild(h1);
     homePage.appendChild(span);
    //  homePage.appendChild(img);

}