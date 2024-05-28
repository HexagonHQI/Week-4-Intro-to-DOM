// Retrieve the div and console.log it
const containerDiv = document.getElementById('container');
console.log(containerDiv);

// Change the name “Pete” to “Richard”
const peteLi = document.querySelector('ul.list:first-child li:nth-child(2)');
peteLi.textContent = 'Richard';

// Delete the <li> that contains the text node “Sarah”
const sarahLi = document.querySelector('ul.list:nth-child(2) li:nth-child(2)');
sarahLi.remove();

// Change each first name of the two <ul>'s to your name
const yourName = 'Your Name'; // Replace with your actual name
const uls = document.querySelectorAll('ul.list');
uls.forEach((ul) => {
    const firstLi = ul.firstElementChild;
    firstLi.textContent = yourName;
});

// Bonus: Add a class called student_list to both of the <ul>'s
uls.forEach((ul) => {
    ul.classList.add('student_list');
});

// Bonus: Add the classes university and attendance to the first <ul>
const firstUl = document.querySelector('ul.list:first-child');
firstUl.classList.add('university', 'attendance');