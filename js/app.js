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
let sections = document.getElementsByTagName('section');
let navMenu = document.getElementById('navbar__list');
let toTop = document.getElementsByClassName('to_top');

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



for(let x = 0; x < sections.length; x++){
    listItem = document.createElement('li');
    let sectionName = sections[x].dataset.nav;
    listItem.innerText = sectionName;
    listItem.className = 'menu__link';
    listItem.id = 'nav_' + sections[x].id;
    console.log(listItem);
    listItem.addEventListener('click', function(){ 
        sections[x].scrollIntoView({behavior:'smooth'});
    })
    navMenu.appendChild(listItem);
}

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


for (button of toTop){
    button.addEventListener('click', function(){
        window.scrollTo({top: 0 , behavior: 'smooth'});
    })
}

navMenu.addEventListener('click', function(el){
    idClicked = el.target.id;
    sectionClicked = document.getElementById(idClicked);
    console.log(el.target.id);
    console.log(sectionClicked);
})


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
