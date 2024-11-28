import { displayHomePage } from "./homePage";



export function displayContactPage(){
    const contactPage = document.getElementById('content');
    const h1 = document.createElement('h1');
    const form = document.createElement('form');
    const emailInput = document.createElement('div');
    const phoneInput = document.createElement('div');
    const addressInput =  document.createElement('div');
    const orderBtn = document.createElement('button');

    contactPage.innerHTML = '';
    contactPage.style.backgroundImage = '';
    contactPage.style.backgroundColor = 'white';


   h1.innerHTML = 'Enter contact information and address to recieve your order: ';
   h1.setAttribute('class','contact-header');


   emailInput.innerHTML= `
     <label for="exampleInputEmail1" class="form-label mt-4">Email Address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          <small id="emailHelp" class="form-text text-secondary" style="color: black;">We'll never share your email with anyone else.</small>`;

    phoneInput.innerHTML = ` <label for="exampleInputEmail1" class="form-label mt-4">Phone Number</label>
          <input type="tel" class="form-control"  placeholder="Enter Phone Number">`;

    addressInput.innerHTML = ` <label for="exampleInputEmail1" class="form-label mt-4">Home Address</label>
          <input type="text" class="form-control"  placeholder="Enter Home Address">
          <small id="emailHelp" class="form-text text-secondary" style="color: black;">This will only be used for the delivery of your order</small>`;

    orderBtn.innerHTML = 'Order';
    orderBtn.setAttribute('class','order-btn');
    orderBtn.addEventListener('click' , ()=>{
        displayHomePage();
    })
    form.setAttribute('class','form');


contactPage.appendChild(h1);
form.appendChild(emailInput);
form.appendChild(phoneInput);
form.appendChild(addressInput);
form.appendChild(orderBtn);
contactPage.appendChild(form);




   
}