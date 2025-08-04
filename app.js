window.addEventListener('load', () => {
  document.querySelector('.home-content h1').classList.add('show');
});
window.addEventListener('load', () => {
  document.querySelector('.home-content .b1').classList.add('show');
});
window.addEventListener('load', () => {
  document.querySelector('.home-content .b2').classList.add('show');
});



document.getElementById("scrollBtn").addEventListener("click", function () {
  document.getElementById("courses").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("contactBtn").addEventListener("click", function () {
  document.getElementById("applynow").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("back-to-top").addEventListener("click", function () {
  document.getElementById("home").scrollIntoView({ behavior: "smooth" });
});


 const backToTopButton = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    const firstSectionHeight = document.querySelector("#home").offsetHeight;

    if (window.scrollY > firstSectionHeight) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

const hamburger = document.getElementById('hamburger');
const icon = document.getElementById('menu-icon');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        icon.classList.toggle('bx-menu');
         icon.classList.toggle('bx-x'); // Cross icon
    });

const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // ⛔ Prevents page reload or default submission
  console.log("Form submitted, but not reloaded!");
  
  // You can add form validation or send data with fetch/AJAX here
});
const applyform = document.getElementById('apply-form');

applyform.addEventListener('submit', function(event) {
  event.preventDefault(); // ⛔ Prevents page reload or default submission
  console.log("Form submitted, but not reloaded!");
  
  // You can add form validation or send data with fetch/AJAX here
});







const observer = new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('visible');

            // Animate all headings inside it
      const headings = entry.target.querySelectorAll('.show-heading');
      headings.forEach(h => h.classList.add('show'));

        
        }
    });
}, {
  threshold: 0.05 // means 5% of the element must be visible
});
document.querySelectorAll('section').forEach(section=>{
    observer.observe(section);
});


const aboutContentObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      
    }
  });
}, {
  threshold: 0.1
});

const aboutContent = document.querySelector('.about-content');
if (aboutContent) {
  aboutContentObserver.observe(aboutContent);
}


const aboutImgObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      
    }
  });
}, {
  threshold: 0.1
});

const aboutImg = document.querySelector('.about-img img');
if (aboutImg) {
  aboutImgObserver.observe(aboutImg);
}




// Observer for .course cards (to trigger individually with delay)
const courseCards = document.querySelectorAll('.course');

courseCards.forEach((card, index) => {
  card.style.setProperty('--delay', `${index * 0.15}s`);

  const cardObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // Remove observer once shown
      }
    });
  }, {
    threshold: 0.05
  });

  cardObserver.observe(card);
});



const highlightObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      
    }
  });
}, {
  threshold: 0.08
});

document.querySelectorAll('.highlight').forEach(highlight=>{
    highlightObserver.observe(highlight);
});



const highlightImgObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      
    }
  });
}, {
  threshold: 0.08
});

document.querySelectorAll('.highlight-img').forEach(img=>{
    highlightImgObserver.observe(img);
});




const applyformObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      
    }
  });
}, {
  threshold: 0.1
});

const applyForm = document.querySelector('.apply-form');
if (applyForm) {
  applyformObserver.observe(applyForm);
}


