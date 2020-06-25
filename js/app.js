/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

let sections = document.getElementsByTagName('section');
console.log(sections);


let navMenu = document.getElementById('navbar__list');

for(let x = 0; x < sections.length; x++){
    listItem = document.createElement('li');
    let sectionName = sections[x].dataset.nav;
    listItem.innerText = sectionName;
    listItem.className = 'menu__link';
    listItem.addEventListener('click', function(){ //should make this one generic function
        sections[x].scrollIntoView({behavior:'smooth'});
    })
    navMenu.appendChild(listItem);
}
let body = document.getElementsByTagName('body')[0];

document.addEventListener('scroll', function(el){
    for (section of sections){
        let height = window.innerHeight;
        let top= section.getBoundingClientRect().top;
        let bottom = section.getBoundingClientRect().bottom;
        let avg = (top + bottom) / 2;
        if(avg < height && top>0){
            setActiveClass(section.id);
        }
    }
})

function setActiveClass(id){
    for (section of sections){
        if (section.id == id){
            section.className = "your-active-class";
        }
        else {
            section.className = "";
        }
    }
}

for (section of sections){
    console.log(section.getBoundingClientRect());
}




// Add class 'active' to section when near top of viewport



// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
