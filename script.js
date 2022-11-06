var swiper = new Swiper(".slide-content",{
    slidesPerView: 3,
    spaceBetween: 25,
    centeredSlides: true,
    fade: 'true',
    loop: true,
    grabCursor: 'true',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,

    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  

breakpoints:{
    0: {
        slidesPerView:1,
    },
    520: {
        slidesPerView:2,
    },
    950: {
        slidesPerView:3,
    },
},
});

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");
const socio = document.querySelector("#soico");
const navbar = document.querySelector(".navbarmob");
const btn = document.querySelector(".ri-menu-fill");
const btnclose = document.querySelector(".ri-close-line");
const hambtn = document.querySelector(".navbar-link")
const gallery = document.querySelector(".navbarmob #gallery")
const eventa = document.querySelector(".navbarmob #events")
const home = document.querySelector(".navbarmob #home")
const music = document.querySelector(".navbarmob #music")
const contact = document.querySelector(".navbarmob #contact")
const about = document.querySelector(".navbarmob #contact")
var flag = 0;

btn.addEventListener("click", function(){
        navbar.style.transform = "translateX(0)";
        navbar.style.opacity = "1";
        navbar.style.display = "flex";
        navbar.style.visibility = "visible";
        btn.style.display ="none"
        btnclose.style.display ="block"
        centercont.style.transform ="translate(100%)"

        flag = 1
        // navbar.pointerr = "auto"
});
btnclose.addEventListener("click",function(){
    navbar.style.transform = "translateX(100%)";
        navbar.style.opacity = "0";
        navbar.style.visibility = "none";
        btn.style.display ="block"
        btnclose.style.display ="none"
        // socio.style.display = "block"
        centercont.style.transform ="translate(-50%,-50%)"

})

gallery.addEventListener("click",function(){
    navbar.style.transform = "translateX(100%)";
        navbar.style.opacity = "0";
        navbar.style.visibility = "none";
        btn.style.display ="block"
        btnclose.style.display ="none"
        // socio.style.display = "block"
        centercont.style.transform ="translate(-50%,-50%)"
        navbar.style.color ="green"

})
eventa.addEventListener("click",function(){
    navbar.style.transform = "translateX(100%)";
        navbar.style.opacity = "0";
        navbar.style.visibility = "none";
        btn.style.display ="block"
        btnclose.style.display ="none"
        // socio.style.display = "block"
        centercont.style.transform ="translate(-50%,-50%)"
        navbar.style.color ="green"

})
music.addEventListener("click",function(){
    navbar.style.transform = "translateX(100%)";
        navbar.style.opacity = "0";
        navbar.style.visibility = "none";
        btn.style.display ="block"
        btnclose.style.display ="none"
        // socio.style.display = "block"
        centercont.style.transform ="translate(-50%,-50%)"
        navbar.style.color ="green"

})
contact.addEventListener("click",function(){
    navbar.style.transform = "translateX(100%)";
        navbar.style.opacity = "0";
        navbar.style.visibility = "none";
        btn.style.display ="block"
        btnclose.style.display ="none"
        // socio.style.display = "block"
        centercont.style.transform ="translate(-50%,-50%)"
        navbar.style.color ="green"

})
home.addEventListener("click",function(){
    navbar.style.transform = "translateX(100%)";
        navbar.style.opacity = "0";
        navbar.style.visibility = "none";
        btn.style.display ="block"
        btnclose.style.display ="none"
        // socio.style.display = "block"
        centercont.style.transform ="translate(-50%,-50%)"
        navbar.style.color ="green"

})
about.addEventListener("click",function(){
    navbar.style.transform = "translateX(100%)";
        navbar.style.opacity = "0";
        navbar.style.visibility = "none";
        btn.style.display ="block"
        btnclose.style.display ="none"
        // socio.style.display = "block"
        centercont.style.transform ="translate(-50%,-50%)"
        navbar.style.color ="green"

})

// hambtn.addEventListener("click",function(){
//     hambtn.style.color = "red";
    
// })
// function refreshPage(){
//     window.location.reload();
// } 

// const gal = document.querySelector("#gallery");
// const eve = document.querySelector("#events");
// const page1 = document.querySelector("#page3")
// const page2 = document.querySelector("#page2")
// flag = 0
// gal.addEventListener("click",function(){
//     if (flag===0){
//         page1.style.top = "0%";
//         page1.style.display = "block";
//         gal.style.color = "red"
//         page1.style.opacity = "1";
//         flag = 1;
//     }

//     else{
//         page1.style.top = "100%";
//         page1.style.display = "block";
//         page1.style.opacity = "0";
//         flag = 0;
//     }

// })
// flag = 0
// eve.addEventListener("click",function(){
//     if (flag===0){
//         page2.style.top = "10%";
//         page2.style.display = "block";
//         eve.style.color = "red"
//         page2.style.opacity = "1";
//         flag = 1;
//     }

//     else{
//         eve.style.top = "100%";
//         page2.style.display = "block";
//         page2.style.opacity = "0";
//         flag = 0;
//     }

// })



// mobile_nav.addEventListener("click", () => toggleNavbar());

// flag = 0;
// if(flag===0){
//     mobile_nav.addEventListener("click",function(){
//     document.querySelector("#text").style.display ="block"})
//     flag = 1;
//     }
// else{
//     mobile_nav.addEventListener("click",function(){
//     document.querySelector("#centercont").style.display ="none"})
//     flag = 0;
// }



document.querySelector("#hindinpunjabi").addEventListener("click",function(){
    document.querySelector(".popuphindi").style.display = "flex";
});

var audio = document.querySelector(".audio");
document.querySelector("#English").addEventListener("click",function(){
    audio.play();

})

document.querySelector("#hindinpunjabi").addEventListener("click",function(){
    audio.play();
})
document.querySelector("#hindinpunjabi").addEventListener("click",function(){
    audio.play();
})
document.querySelector(".ri-close-fill").addEventListener("click",function(){
    audio.play();
})
document.querySelector("#io").addEventListener("click",function(){
    audio.play();
})

document.querySelector(".ri-close-fill").addEventListener("click",function(){
    document.querySelector(".popuphindi").style.display = "none";
    document.querySelector(".ri-close-fill").style.cursor = "pointer";
});   

document.querySelector("#English").addEventListener("click",function(){
    document.querySelector(".popupenglish").style.display = "flex";
});    

document.querySelector("#io").addEventListener("click",function(){
    document.querySelector(".popupenglish").style.display = "none";
    document.querySelector("#io").style.cursor = "pointer";
});   

function message(){
    var Name = document.getElementById('name');
    var email = document.getElementById('email');
    var msg = document.getElementById('msg');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(Name.value === '' || email.value === '' || msg.value === ''){
        danger.style.display = 'block';
    }
    else{
        setTimeout(() => {
            Name.value = '';
            email.value = '';
            msg.value = '';
        }, 2000);

        success.style.display = 'block';
    }

    setTimeout(() => {
        danger.style.display = "none";
        success.style.display = "none";
    },4000);
}

var t1 = gsap.timeline()
t1
.from("#page1 h1",{
    opacity:0 ,
    delay : 1 ,
    duration : 2 ,
    y:100
},"-=1")
.from("#page1 h6",{
    opacity:0 ,
    delay : 0.5 ,
    duration : 2 ,
    y:10
},"-=1")
.from("#page1 #soico",{
    opacity:0 ,
    delay : 0.5 ,
    duration : 2 ,
    y:10
},"-=1")
// .from("#head",{
//     opacity:0 ,
//     delay : 0 ,
//     duration : 2 ,
//     y:70
// },"-=1")

gsap
.from("#liny1",{
    scrollTrigger:{
        trigger: "#liny1",
        start: "top 100%",
        // markers:true ,
        scrub: 1,
        // pin: true
    },
    // left:"-100%",
    ease: Circ ,
    opacity:0 ,
    delay : 0 ,
    duration : 2 ,
    x: -900
})
gsap.from("#liny2",{
    scrollTrigger:{
        trigger: "#liny2",
        start: "top 200%",
        // markers:true ,
        scrub: 1,
        // pin: true
    },
    opacity: 0,
    delay : 0 ,
    duration : 2 ,
    x: 900
})
// gsap
// .from("#hind",{
//     scrollTrigger:{
//         trigger: "#hind",
//         start: "top 100%",
//         // markers:true ,
//         scrub: 4,
//         // pin: true
//     },
//     // left:"-100%",
//     ease: Circ ,
//     opacity:0 ,
//     delay : 0 ,
//     duration : 2 ,
//     x: 50
// })
// gsap.from("#engcnt",{
//     scrollTrigger:{
//         trigger: "#engcnt",
//         start: "top 100%",
//         // markers:true ,
//         scrub: 4,
//         // pin: true
//     },
//     opacity: 0,
//     delay : 0 ,
//     duration : 2 ,
//     x: -150
// })
// .from("#page1 #soico",{
//     opacity:0 ,
//     delay : 0 ,
//     duration : 2 ,
//     y:10
// },"-=1")
// .from("#page1 #soico",{
//     opacity:0 ,
//     delay : 0 ,
//     duration : 2 ,
//     y:10
// },"-=1")
gsap.from("#head",{
    scrollTrigger:{
        trigger: "#head",
        scroller:"body",
        // markers:true,
        start: "top 50%"
    },
    opacity:0 ,
    delay : 0 ,
    duration : 2 ,
    y:70
},
