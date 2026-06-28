const hamb = document.querySelector('.header .navbar .navlist .hamb');
const mobile_menu = document.querySelector('.header .navbar .navlist ul');
const header = document.querySelector('.header .container');

hamb.addEventListener('click', () => {
    hamb.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

const menuLinks = document.querySelectorAll('.header .navbar .navlist ul li a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamb.classList.remove('active');
        mobile_menu.classList.remove('active');
    });
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250){
        header.style.backgroundColor = 'black';
    }else{
        header.style.backgroundColor = 'transparent';
    }
});

const hiddenElements = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});
hiddenElements.forEach(el => observer.observe(el));

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navlist ul li a");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 80) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});