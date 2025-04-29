// Navbar solid background on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('solid', window.scrollY > 100);
});

// Intro animation remove
window.addEventListener('load', () => {
  setTimeout(() => {
    const intro = document.getElementById('intro-animation');
    if (intro) {
      intro.style.display = 'none';
    }
  }, 2500);
});

// Fade-in sections on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = { threshold: 0.3 };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Scroll to About section on scroll-indicator click
const scrollIndicator = document.querySelector('.scroll-indicator');

if (scrollIndicator) {
  scrollIndicator.addEventListener('click', () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Typewriter effect
const typedText = document.getElementById('typed-text');
const phrases = ["Driven by Passion.", "Powered by Innovation.", "Detailing Excellence."];

let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const erasingSpeed = 50;
const nextPhraseDelay = 1500;

function type() {
  if (!typedText) return; // Protect if not found

  const currentPhrase = phrases[phraseIndex] || '';

  if (!isDeleting) {
    typedText.textContent = currentPhrase.substring(0, letterIndex + 1);
    letterIndex++;
    if (letterIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(type, nextPhraseDelay);
    } else {
      setTimeout(type, typingSpeed);
    }
  } else {
    typedText.textContent = currentPhrase.substring(0, letterIndex - 1);
    letterIndex--;
    if (letterIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
    setTimeout(type, erasingSpeed);
  }
}

document.addEventListener('DOMContentLoaded', type);
