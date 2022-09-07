let listeoeuvres = ['http://www.artsaintlaurent.ca/images/eids2sm%20.jpg', 'images/DSC_0517.JPG', 'images/DSC_0992.JPG', 'images/DSC00042.JPG']
const oeuvreCourante = document.querySelector('#oeuvres');
let index = 0;

oeuvreCourante.onclick = () => {
  index = index + 1;
  oeuvreCourante.setAttribute('src',listeoeuvres[index&3]);
}

let myButton = document.querySelector('button');
let salutations = document.querySelector('#salutations');

if (localStorage.getItem('name')) {
    const storedName = localStorage.getItem('name');
    salutations.textContent = `Salut cher ${storedName}`;
  }  

function setUserName() {
    const myName = prompt('Votre nom?');
    if (myName) {
      localStorage.setItem('name', myName);
      salutations.textContent = `Salut cher ${storedName}`;
    }
    else {
      salutations.textContent = `Salut cher visiteur`;
    }

  }

  myButton.onclick = () => {
    setUserName();
  }
  
  
