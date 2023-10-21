


  // nav bar animation

let isToggled = false;
const menuButton = document.querySelector(".nav-menu");
const menuUl = document.querySelector(".menu-ul");
const menuItems = document.querySelectorAll(".menu-list");

menuButton.addEventListener("click", toggleMenu);

menuItems.forEach(item => {
  item.addEventListener("click", toggleMenu);
});

function toggleMenu() {
  if (!isToggled) {
    menuUl.style.animationName = "wipe-in-down";
    menuUl.style.animationDuration = "0.5s";
    menuUl.style.display = "block";
  } else {
    menuUl.style.animationName = "wipe-out-up";
    menuUl.style.animationDuration = "0.5s";


    setTimeout(() => {     // Delay hiding the menu to allow the animation to complete
      menuUl.style.display = "none";
    }, 500);
  }
  isToggled = !isToggled;
}


// auto typing text code
const textElement = document.getElementById("auto-typing-text");
const names = [
  "Web Developer.    ",
  "Web Designer.   ",    // Your list of names
  "Graphic Designer.   ",
];
const typingSpeed = 200; // Adjust the typing speed (milliseconds per character)
const deleteSpeed = 50; // Adjust the delete speed (milliseconds per character)

let nameIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const name = names[nameIndex];

  if (isDeleting) {
    textElement.innerHTML = name.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      nameIndex = (nameIndex + 1) % names.length; // Move to the next name
    }
  } else {
    textElement.innerHTML = name.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === name.length) {
      isDeleting = true;
    }
  }

  const speed = isDeleting ? deleteSpeed : typingSpeed;

  setTimeout(type, speed);
}


window.onload = type;  // Start the typing effect when the page loads

//gsap animation

const splitScreenAnimation = document.querySelector(".home-splitting")
const sectionTwoAnimation = document.querySelector(".section-2-pic-nd-about")


gsap.from(splitScreenAnimation, {
  y:100,
  opacity:0, 
  delay:0.5, 
  duration:0.9, 
  stagger:0.3
})
gsap.from(sectionTwoAnimation, {
  y:100,
  opacity:0, 
  delay:1, 
  duration:0.9, 
  stagger:0.3
})

// section - 3 left panel position sticky java script code


    // Get references to the sidebar links and the right panel
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const rightPanel = document.querySelector('.right-panel');

    // Scroll event listener to handle the scrolling effect
    rightPanel.addEventListener('scroll', () => {
        sidebarLinks.forEach(link => {
            const contentSection = document.getElementById(link.id.replace('-link', ''));
            const contentRect = contentSection.getBoundingClientRect();
            if (contentRect.top <= 150 && contentRect.bottom >= 150) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });


    // highlight a specific section on scroll

 
