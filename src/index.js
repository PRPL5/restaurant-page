import { displayHomePage } from "./homePage";
import "./styles.css";

alert("Running");

const homeBtn = document.getElementById('homeBtn');

homeBtn.addEventListener('click', ()=> {

    displayHomePage();
});
