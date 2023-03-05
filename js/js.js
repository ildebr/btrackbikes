const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: true,
});

function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');

        }else{
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))


const section_1 = document.getElementById("bike-presentation-section");
const x1 = document.querySelector(".plus1");
const timex1 = gsap.timeline({ paused: true });

timex1.fromTo(x1, {y: 0}, {y: '100vh', duration: 1, ease: 'none'}, 0);

const scroll_1 = ScrollTrigger.create({
    animation: timex1,
    trigger: section_1,
    start: 'top top',
    end: 'bottom center',
    scrub: true
});

const x2 = document.querySelector(".plus2");
const timex2 = gsap.timeline({ paused: true });

timex2.fromTo(x2, {y: 0}, {y: '100vh', duration: 1, ease: 'none'}, 0);

const scroll_2 = ScrollTrigger.create({
    animation: timex2,
    trigger: section_1,
    start: 'top top',
    end: 'bottom center',
    scrub: true
});

const x3 = document.querySelector(".plus3");
const timex3 = gsap.timeline({ paused: true });

timex3.fromTo(x3, {y: '80vh'}, {y: '-30vh', duration: 1, ease: 'none'}, 0);

const scroll_3 = ScrollTrigger.create({
    animation: timex3,
    trigger: section_1,
    start: 'top top',
    end: 'bottom center',
    scrub: true
});

requestAnimationFrame(raf);
gsap.registerPlugin(ScrollTrigger)
gsap.to('.product-show', {
    yPercent: 100,
    ease: 'none',
    scrollTrigger: {
        trigger: '.lst',
        start: 'top bottom',
        end: 'top top',
        scrub: true,
    }
})



var typed3 = new Typed('.main-title', {
    strings: ['EXPLORE', 'DISCOVER', 'WATCH', 'TRAVEL'],
    typeSpeed: 70,
    backSpeed: 40,
    smartBackspace: false, // this is a default
    loop: true,
    cursorChar: '',
  });


  const carsec = document.getElementById('horizontal');
  let box_items = gsap.utils.toArray(".horizontal__item");

  gsap.to(box_items, {
    xPercent:-100*(box_items.length-1),
    ease: "sine.out",
    scrollTrigger:{
        trigger:carsec,
        pin:true,
        scrub:3,
        snap: 1/(box_items.length -1),
        end: "+=" + carsec.offsetWidth
    }
  })

  faqe = document.querySelectorAll(".faq__element_header")

  faqe.forEach((faq) =>{
    faq.addEventListener(("click"), (e) =>{
        e.stopPropagation()
        console.log(e.currentTarget.children)
        if(!e.currentTarget.parentElement.classList.contains("active")){
            e.currentTarget.parentElement.classList.add("active")
        }else{
            e.currentTarget.parentElement.classList.remove("active")
        }
        
    }, true)
  })



  function initMotionPath() {
    gsap.registerPlugin(MotionPathPlugin);
    // declare a null tween variable
    let tween;
  
    function createTween() {
      // save progress before we kill tween if it exists.
      let progress = tween ? tween.progress() : 0;
      // kill any pre-existing tween.
      tween && tween.progress(0).kill();
  
      // create the tween
      tween = gsap.to(".circle", {
        motionPath: {
          path: "#path",
          align: "#path",
          alignOrigin: [0.5, 0.5],
          autoRotate: true
        },
        duration: 8,
        repeat: -1,
        repeatDelay: 1,
        ease: "none"
      });
  
      // update tween's progress
      tween.progress(progress);
    }
    createTween();
  
    // listen for window resize to recalculate tween.
    window.addEventListener("resize", createTween);
  }
  
  // run once DOM and scripts are all loaded.
  document.addEventListener("DOMContentLoaded", initMotionPath);
  