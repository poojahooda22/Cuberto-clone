// var move = document.querySelector("#main");
// var cursor = document.querySelector("#circle");

// move.addEventListener("mousemove", function(dets) {
//     cursor.style.left = dets.clientX + "px";
//     cursor.style.top = dets.clientY + "px";
// })

// Shery.mouseFollower();

// gsap.to(".fleftelem", {
//     scrollTrigger: {
//         trigger: "#fimages",
//         pin: true,
//         start: "top top",
//         end: "bottom bottom",
//         endTrigger: ".last",
//         scrub: 1
//     },
//     y: "-300%",
//     ease: Power1
// })


// var timeout;
// function circleChaptaKaro() {

//     var xscale = 1;
//     var yscale = 1;

//     var xprev = 0;
//     var yprev = 0;
//     window.addEventListener("mousemove", function(dets) {
//         clearTimeout(timeout)
//         var xdiff = dets.clientX - xprev;
//         var ydiff = dets.clientY - yprev;

//         xscale = gsap.utils.clamp(.8, 1.2, xdiff);
//         yscale = gsap.utils.clamp(.8, 1.2, ydiff);

//         xprev = dets.clientX;
//         yprev = dets.clientY;

//         circleMouseFollower(xscale, yscale);

//         timeout = setTimeout(function(){
//             document.querySelector("#minicircle").style.transform = `translate( ${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
//         }, 100);

//     });
// }

// circleChaptaKaro();

// function circleMouseFollower(xscale, yscale) {
//     window.addEventListener("mousemove", function(dets) {
//         document.querySelector("#minicircle").style.transform = `translate( ${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
//     });
// }
// circleMouseFollower();

//locomotive scroll

function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();



  //Mouse hover animation
document.querySelector("#overlay1").addEventListener("mousemove", function(dets) {
    document.querySelector("#elem1 .videoplay").style.scale = 1;
    document.querySelector("#elem1 .videoplay ").style.opacity = 1;

    document.querySelector("#elem1 .videoplay").style.left = (dets.x - 350) + "px";
    document.querySelector("#elem1 .videoplay").style.top = (dets.y - 400) + "px";
})

document.querySelector("#overlay1").addEventListener("mouseleave", function(dets) {
    document.querySelector("#elem1 .videoplay ").style.scale = 0;
    document.querySelector("#elem1 .videoplay ").style.opacity = 0;

})


document.querySelector("#overlay2").addEventListener("mousemove", function(dets) {
    document.querySelector("#elem2 .videoplay").style.scale = 1;
    document.querySelector("#elem2 .videoplay ").style.opacity = 1;

    document.querySelector("#elem2 .videoplay").style.left = (dets.x - 700) + "px";
    document.querySelector("#elem2 .videoplay").style.top = (dets.y -500 ) + "px";
})

document.querySelector("#overlay2").addEventListener("mouseleave", function(dets) {
    document.querySelector("#elem2 .videoplay ").style.scale = 0;
    document.querySelector("#elem2 .videoplay ").style.opacity = 0;

})

document.querySelector("#overlay3").addEventListener("mousemove", function(dets) {
    document.querySelector("#elem3 .videoplay").style.scale = 1;
    document.querySelector("#elem3 .videoplay ").style.opacity = 1;

    document.querySelector("#elem3 .videoplay").style.left = (dets.x - 1000) + "px";
    document.querySelector("#elem3 .videoplay").style.top = (dets.y -500 ) + "px";
})

document.querySelector("#overlay3").addEventListener("mouseleave", function(dets) {
    document.querySelector("#elem3 .videoplay ").style.scale = 0;
    document.querySelector("#elem3 .videoplay ").style.opacity = 0;

})
