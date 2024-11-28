import { displayContactPage } from "./contactPage";
import { displayHomePage } from "./homePage";
import { displayMenuPage } from "./menuPage";
import "./styles.css";


displayHomePage();

const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn')
const contactBtn = document.getElementById('contactBtn');

homeBtn.addEventListener('click', ()=> {

    displayHomePage();
});


menuBtn.addEventListener('click', ()=> {

    displayMenuPage();
});


contactBtn.addEventListener('click', ()=> {

    displayContactPage();
});


