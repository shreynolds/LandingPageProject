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
const sections = document.getElementsByTagName('section');
const navMenu = document.getElementById('navbar__list');
const toTop = document.getElementsByClassName('to_top');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * Sets the class with the passed ID as active, and sets the others as inactive
 * @param {string} id The ID of the class that should be the active class
 */
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


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

/**
 * From the sections, builds the navigation bar and adds scrolling event listeners
 */
function buildNav(){
    for(let x = 0; x < sections.length; x++){
        listItem = document.createElement('li');
        let sectionName = sections[x].dataset.nav;
        listItem.innerText = sectionName;
        listItem.className = 'menu__link';
        listItem.id = 'nav_' + sections[x].id;
        listItem.addEventListener('click', function(){ 
            sections[x].scrollIntoView({behavior:'smooth'});
        })
        navMenu.appendChild(listItem);
    }
}

/**
 * On scroll, checks for the section that is within the pasge and sets it as the active class
 */
function scrollListener(){
    document.addEventListener('scroll', function(el){
        for (section of sections){
            let height = window.innerHeight;
            let top = section.getBoundingClientRect().top;
            let bottom = section.getBoundingClientRect().bottom;
            let avg = (top + bottom) / 2;
            if(avg < height && top>0){
                setActiveClass(section.id);
            }
        }
    })
}

/**
 * Adds an event listener to scroll to the top for the buttons
 */
function buttonListener(){
    for (button of toTop){
        button.addEventListener('click', function(){
            window.scrollTo({top: 0 , behavior: 'smooth'});
        })
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

buildNav();
scrollListener();
buttonListener();

