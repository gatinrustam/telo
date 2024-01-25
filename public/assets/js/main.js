const scrollingContainer=document.querySelector(".intro"),scrollingPath=anime.path(".intro__path"),scrollingElements=document.querySelectorAll(".intro__scrolling"),planeAnimations=(scrollingElements.forEach((e,t,n)=>e.style.zIndex=n.length-t),anime({targets:Array.from(scrollingElements),translateX:scrollingPath("x"),translateY:scrollingPath("y"),rotate:scrollingPath("angle"),loop:!1,autoplay:!1,elasticity:700,duration:1400,easing:"easeInOutQuad",delay:anime.stagger(130)})),getScrollPosition=e=>{var t=window["innerHeight"],{top:e,height:n}=e.getBoundingClientRect();return Math.max(0,Math.min((t/2-e)/n,1))},questionsElement=document.querySelector(".questions"),elements=[{block:document.querySelector(".gray-bg"),startColor:[255,255,255],endColor:[149,166,178]},{block:document.querySelector(".black-bg"),startColor:[149,166,178],endColor:[0,0,0],blur:!0},{block:document.querySelector(".third"),startColor:[0,0,0],endColor:[255,255,255]}];document.addEventListener("DOMContentLoaded",()=>{var e=document.querySelectorAll(".mens");const t=new IntersectionObserver((e,t)=>{e.forEach(e=>{e.isIntersecting?e.target.classList.add("blur"):e.target.classList.remove("blur")})},{rootMargin:"0px 0px 0px 0px",threshold:1}),n=(e.forEach(e=>t.observe(e)),()=>{elements.forEach(e=>{n=e.block,t=window.innerHeight,n=n.getBoundingClientRect().top;var t,n=100*Math.max(0,Math.min((t-n)/t,1));1<n&&(t=((e,t,n)=>{var[e,o,r]=e,[t,l,a]=t;return[e+Math.round((t-e)*n/100),o+Math.round((l-o)*n/100),r+Math.round((a-r)*n/100)]})(e.startColor,e.endColor,n),[e,n,t]=[...t],document.body.style.background=`rgb(${e}, ${n}, ${t})`)});var e=getScrollPosition(scrollingContainer);console.log(e);let t=e*planeAnimations.duration;t=Number(t.toFixed()),planeAnimations.seek(t),switchTextByScroll()});window.addEventListener("scroll",()=>{let e=!1;e||(window.requestAnimationFrame(function(){n(),e=!1}),e=!0)}),n(),window.addEventListener("resize",()=>{n()})});