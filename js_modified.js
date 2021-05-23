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
*/
//create fragment to append the created nav items to it in order to improve the performance 
const fragment=document.createDocumentFragment();
//getting my UL
const myNavUl=document.getElementById("navbar__list");

// finding all sections in my HTML page
let numberOfSections = document.querySelectorAll('section');

/**
 * End Global Variables
*/



// build the nav according to the number of sections in my HTML

// looping on my selected sections by for ..of loop
for(section of numberOfSections){
    //create list item inside my ul
    let myList = document.createElement('li');
    // creating anchor link to  attach it as a child to the list 
    let myLink = document.createElement('a');
    myLink.classList.add('menu__link');

    myList.appendChild(myLink);
    // attach my my list to fragment
   fragment.appendChild(myList);
   //get the value of the dataset attribute
   const myData = section.getAttribute('data-nav');
   //adding text to my links section name
   myLink.innerHTML=myData;
   //get the value of id of each section
   const valueOfId =section.getAttribute('id');
    // adding my href to link
   myLink.setAttribute("href",`#${ valueOfId}`);

  // adding event listener to my nav bar to make scrolling smooth
    myLink.addEventListener("click",function(event){
      event.preventDefault();   //prevent the default action of scrolling
      let selectedSection=document.getElementById(valueOfId); //the id of each section 
      // Scroll to anchor ID by scrollintoview method
      selectedSection.scrollIntoView({behavior:"smooth"});
  });
}
// here i am putting my list inside my UL first get (ul) and then append (li) to it 
myNavUl.appendChild(fragment);

// Add class 'active' to section when near top of viewport

// adding function to check for active section
function activeStateToSection(){
    for(section of numberOfSections){
        // here i use getBounding ClientRect () method in order to get the dimensions of my viewport 
        let rect=section.getBoundingClientRect();
          // i target here only the top of the viewport which can show me where is the section
        if(rect.top>=0 && rect.top<300){
            section.classList.add('your-active-class'); 
           let secDataNav= section.getAttribute('data-nav');
           let anchorLink=document.querySelectorAll('a');
           anchorLink.forEach(linkitem => {

            if(linkitem.innerHTML== secDataNav){
                linkitem.classList.add('nav_item_active_class');
            }
            else{
                linkitem.classList.remove('nav_item_active_class');
            }
               
           });
         }
           else {
           section.classList.remove('your-active-class'); 

                }      
    }
  }

// Scroll to section on link click

// Set sections as active this is event listener for scrolling the page

window.addEventListener("scroll", activeStateToSection);


/* Toggle between adding and removing the "responsive" class tonavbar_menu when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navbar__menu") {
    x.className += " responsive";
  } else {
    x.className = "navbar__menu";
  }
}