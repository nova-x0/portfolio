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

    // Delay hiding the menu to allow the animation to complete
    setTimeout(() => {
      menuUl.style.display = "none";
    }, 500);
  }
  isToggled = !isToggled;
}


// auto typing text code
const textElement = document.getElementById("auto-typing-text");
const names = [
  "Web Developer.    ",
  "Web Designer.   ",
  "Graphic Designer.   ",
]; // Your list of names
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

// Start the typing effect when the page loads
window.onload = type;


