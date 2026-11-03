// ===============================
// TYPING ANIMATION
// ===============================

var typed = new Typed(".typing", {
    strings: [
        "Java Full Stack Developer",
        "Web Developer",
        "Software Engineer",
        "Problem Solver"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1200,
    loop: true
});

// ===============================
// ACTIVE NAVBAR
// ===============================

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav ul li a");

window.onscroll = () => {

    let top = window.scrollY;

    sections.forEach(sec => {

        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){

            navLinks.forEach(link=>{
                link.classList.remove("active");
            });

            let activeLink = document.querySelector('header nav ul li a[href="#'+id+'"]');

            if(activeLink){
                activeLink.classList.add("active");
            }

        }

    });

};

// ===============================
// SMOOTH BUTTON EFFECT
// ===============================

const buttons = document.querySelectorAll(".btn,.btn2,.project-btn,.send-btn");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="scale(1.05)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="scale(1)";

    });

});

// ===============================
// CONTACT FORM
// ===============================

const form = document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank You 😊\n\nYour message has been received.");

form.reset();

});

}

// ===============================
// SCROLL TO TOP
// ===============================

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="20px";
topBtn.style.bottom="20px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#a855f7";
topBtn.style.color="white";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.fontSize="22px";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};