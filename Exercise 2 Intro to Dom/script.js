// Add a “light blue” background color and some padding to the <div>
const div = document.querySelector('div');
div.style.backgroundColor = 'light blue';
div.style.padding = '10px';

// Do not display the <li> that contains the text node “John”
const johnLi = document.querySelector('ul li:first-child');
johnLi.style.display = 'none';

// Add a border to the <li> that contains the text node “Pete”
const peteLi = document.querySelector('ul li:nth-child(2)');
peteLi.style.border = '1px solid black';

// Change the font size of the whole body
document.body.style.fontSize = '18px';

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y”
if (div.style.backgroundColor === 'light blue') {
    const users = [...document.querySelectorAll('ul li')].map((li) => li.textContent).join(' and ');
    alert(`Hello ${users}`);
}