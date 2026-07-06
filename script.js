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