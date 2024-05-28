// Change the value of the id attribute from navBar to socialNetworkNavigation
const navBarDiv = document.getElementById('navBar');
navBarDiv.setAttribute('id', 'ocialNetworkNavigation');

// Add a new <li> to the <ul>
const newLi = document.createElement('li');
const logoutTextNode = document.createTextNode('Logout');
newLi.appendChild(logoutTextNode);
const ul = navBarDiv.querySelector('ul');
ul.appendChild(newLi);

// Retrieve the first and last <li> elements and display the text of each link
const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;
console.log(`First link: ${firstLi.querySelector('a').textContent}`);
console.log(`Last link: ${lastLi.querySelector('a').textContent}`);