import{_ as h}from"./Navbar.cfa02ab6.js";import{_ as f,a as M,b as S,c as H,d as b,e as w,f as y,g as v,h as T,i as $}from"./Footer.303d48bd.js";import{a as x,h as P,i as W,b as q,e,f as r,o as B}from"./entry.468990d5.js";import"./nuxt-link.7f66a425.js";import"./ModalVideo.d2142a90.js";import"./swiper-slide.a0b6a4d9.js";import"./loadBackgroudImages.6dc4ef71.js";import"./components.fb6c74dd.js";import"./navigation.83477dde.js";import"./pagination.9c339bb6.js";import"./app-data.c5e7f44e.js";const z={id:"smooth-wrapper"},A={id:"smooth-content"},k={class:"main-bg"},J={__name:"index",setup(E){x({titleTemplate:"%s - Main",bodyAttrs:{class:"home-main-crev main-bg"}});function n(){if(window.innerWidth<991&&document.querySelector(".thecontainer").style.maxHeight&&location.reload(),window.innerWidth>991&&!document.querySelector(".thecontainer").style.maxHeight){gsap.registerPlugin(ScrollTrigger);let t=gsap.utils.toArray(".panel");gsap.to(t,{xPercent:-100*(t.length-1),ease:"none",scrollTrigger:{trigger:".thecontainer",pin:!0,scrub:1,end:()=>"+="+document.querySelector(".thecontainer").offsetWidth}})}}return P(()=>{if(gsap.registerPlugin(ScrollTrigger,ScrollSmoother),ScrollTrigger.normalizeScroll(!0),ScrollSmoother.create({smooth:2,effects:!0}),window.innerWidth>991){gsap.registerPlugin(ScrollTrigger);let t=gsap.utils.toArray(".panel");gsap.to(t,{xPercent:-100*(t.length-1),ease:"none",scrollTrigger:{trigger:".thecontainer",pin:!0,scrub:1,end:()=>{var o;return"+="+((o=document.querySelector(".thecontainer"))==null?void 0:o.offsetWidth)}}})}if(window.innerWidth>991){gsap.set(".footer-container",{yPercent:-50});const t=gsap.timeline({paused:!0});t.to(".footer-container",{yPercent:0,ease:"none"}),ScrollTrigger.create({trigger:"main",start:"bottom bottom",end:"+=50%",animation:t,scrub:!0})}window.addEventListener("resize",n)}),W(()=>{window.removeEventListener("resize",n)}),(t,o)=>{const i=h,s=f,a=M,c=S,m=H,_=b,l=w,g=y,d=v,p=T,u=$;return B(),q("div",z,[e(i,{mainBg:!0,noStatic:!0,lightMode:!0}),r("div",A,[r("main",k,[e(s),e(a),e(c),e(m,{lightMode:!0}),e(_,{lightMode:!0}),e(l),e(g,{lightMode:!0}),e(d,{lightMode:!0}),e(p)]),e(u,{lightMode:!0})])])}}};export{J as default};
