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
  document.getElementById("request").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("contactBtn").addEventListener("click", function () {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});


const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });





    const toggleButton = document.getElementById('theme-toggle');
const icon = document.getElementById('theme-icon');

// Set initial theme so that theme persists even after refreshing page 
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-mode');
  icon.classList.replace('fa-sun', 'fa-moon');
  
} 

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');

  icon.classList.replace(isLight ? 'fa-sun' : 'fa-moon', isLight ? 'fa-moon' : 'fa-sun');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});




const observer = new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
}, {
  threshold: 0.3 // means 50% of the element must be visible
});
document.querySelectorAll('section').forEach(section=>{
    observer.observe(section);
});
