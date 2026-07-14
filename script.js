// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

// Scroll Animation

const hiddenElements = document.querySelectorAll(
".portfolio, .about, .services, .stats, .contact"
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

hiddenElements.forEach((el)=>{

el.classList.add("hidden");

observer.observe(el);

});

// Mobile Menu

const menuToggle = document.querySelector(".menu-toggle");

const nav = document.querySelector("nav");

if(menuToggle && nav){

menuToggle.addEventListener("click",()=>{

nav.classList.toggle("active");

});

}

// Header Scroll Effect

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

// Loading Screen

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

loader.classList.add("hide");

});

const elements = {

navHome: document.getElementById("nav-home"),
navPortfolio: document.getElementById("nav-portfolio"),
navAbout: document.getElementById("nav-about"),
navServices: document.getElementById("nav-services"),
navContact: document.getElementById("nav-contact"),

heroTitle: document.getElementById("hero-title"),
heroText: document.getElementById("hero-text"),
heroButton: document.getElementById("hero-btn"),

portfolioTitle: document.getElementById("portfolio-title"),
portfolioText: document.getElementById("portfolio-text"),

project1Title: document.getElementById("project1-title"),
project1Type: document.getElementById("project1-type"),

project2Title: document.getElementById("project2-title"),
project2Type: document.getElementById("project2-type"),

project3Title: document.getElementById("project3-title"),
project3Type: document.getElementById("project3-type"),

project4Title: document.getElementById("project4-title"),
project4Type: document.getElementById("project4-type"),

project5Title: document.getElementById("project5-title"),
project5Type: document.getElementById("project5-type"),

project6Title: document.getElementById("project6-title"),
project6Type: document.getElementById("project6-type"),

aboutTitle: document.getElementById("about-title"),
aboutText1: document.getElementById("about-text1"),
aboutText2: document.getElementById("about-text2"),
aboutButton: document.getElementById("about-btn")

};

const langBtn = document.getElementById("lang-toggle");

function changeLanguage(lang){

const t = translations[lang];

elements.navHome.innerHTML=t.navHome;
elements.navPortfolio.innerHTML=t.navPortfolio;
elements.navAbout.innerHTML=t.navAbout;
elements.navServices.innerHTML=t.navServices;
elements.navContact.innerHTML=t.navContact;

elements.heroTitle.innerHTML=t.heroTitle;
elements.heroText.innerHTML=t.heroText;
elements.heroButton.innerHTML=t.heroButton;

elements.portfolioTitle.innerHTML=t.portfolioTitle;
elements.portfolioText.innerHTML=t.portfolioText;

elements.project1Title.innerHTML=t.project1Title;
elements.project1Type.innerHTML=t.project1Type;

elements.project2Title.innerHTML=t.project2Title;
elements.project2Type.innerHTML=t.project2Type;

elements.project3Title.innerHTML=t.project3Title;
elements.project3Type.innerHTML=t.project3Type;

elements.project4Title.innerHTML=t.project4Title;
elements.project4Type.innerHTML=t.project4Type;

elements.project5Title.innerHTML=t.project5Title;
elements.project5Type.innerHTML=t.project5Type;

elements.project6Title.innerHTML=t.project6Title;
elements.project6Type.innerHTML=t.project6Type;

elements.aboutTitle.innerHTML=t.aboutTitle;
elements.aboutText1.innerHTML=t.aboutText1;
elements.aboutText2.innerHTML=t.aboutText2;
elements.aboutButton.innerHTML=t.aboutButton;

document.getElementById("services-title").innerHTML=t.servicesTitle;
document.getElementById("services-text").innerHTML=t.servicesText;

document.getElementById("stat1").innerHTML=t.stat1;
document.getElementById("stat2").innerHTML=t.stat2;
document.getElementById("stat3").innerHTML=t.stat3;
document.getElementById("stat4").innerHTML=t.stat4;

document.getElementById("contact-title").innerHTML=t.contactTitle;
document.getElementById("contact-text").innerHTML=t.contactText;

document.getElementById("name-input").placeholder=t.namePlaceholder;
document.getElementById("email-input").placeholder=t.emailPlaceholder;
document.getElementById("message-input").placeholder=t.messagePlaceholder;

document.getElementById("send-btn").innerHTML=t.sendButton;

document.getElementById("footer-text").innerHTML=t.footerText;
document.getElementById("footer-copy").innerHTML=t.footerCopy;

document.getElementById("service1-title").innerHTML=t.service1Title;
document.getElementById("service1-text").innerHTML=t.service1Text;

document.getElementById("service2-title").innerHTML=t.service2Title;
document.getElementById("service2-text").innerHTML=t.service2Text;

document.getElementById("service3-title").innerHTML=t.service3Title;
document.getElementById("service3-text").innerHTML=t.service3Text;

document.getElementById("service4-title").innerHTML=t.service4Title;
document.getElementById("service4-text").innerHTML=t.service4Text;

document.body.dir=lang==="fa"?"rtl":"ltr";
document.documentElement.lang=lang;

for(let i = 1; i <= 6; i++){

    const btn = document.getElementById(`view-btn${i}`);

    if(btn){

        btn.innerHTML = t.viewProject;

    }

}

console.log(t.viewProject);

langBtn.innerHTML=t.languageButton;

}

let currentLang = "en";

changeLanguage(currentLang);

langBtn.addEventListener("click", () => {

    currentLang = currentLang === "en" ? "fa" : "en";

    changeLanguage(currentLang);


});