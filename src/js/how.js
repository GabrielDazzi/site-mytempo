var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = "550px";
    } 
  });
}

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav ul');
const body = document.body;

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('toggle');
        navMenu.classList.toggle('nav-active');
    });
});

// She knows
// She knows (ayy)
// (Bad things happen to the people you love)
// (And you find yourself praying up to heaven above)
// (But honestly, I've never had much sympathy)
// ('Cause those bad things, I always saw them coming for me)
// (I'm gonna run, run away) oh, I (run, run away, run away), oh, I-I-I
// (Run away and never come back) well, alright
// (I'm gonna run, run away) oh, I (run, run away, run away), oh, I-I-I
// (Show 'em that your color is black) well, alright

// Damned if I do, damned if I don't
// You know I got a girl back home
// You got a man, what you want, what you want?
// What these bitches want from a nigga?
// On some DMX shit, huh
// I know them other niggas love tricking
// On some BMX shit, but not me
// Now I'm sure you done heard about me
// A black star, Mos Def, Kweli
// Good so them bad hoes try me, they try me
// This is Martin Luther King in the club, getting dubs
// With a bad bitch in his ear, sayin' that she down for whatever
// In the back of his mind is Coretta
