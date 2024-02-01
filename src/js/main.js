const scrollingContainer = document.querySelector('.intro');
const scrollingPath = anime.path(".intro__path");
const scrollingElements = document.querySelectorAll('.intro__scrolling');


const header = document.querySelector('.header')

// set zIndex
scrollingElements.forEach((element, i, arr) => element.style.zIndex = arr.length - i)

// init animation
const planeAnimations = anime({
    targets: Array.from(scrollingElements),
    translateX: scrollingPath("x"),
    translateY: scrollingPath("y"),
    rotate: scrollingPath("angle"),
    loop: false,
    autoplay: false,
    elasticity: 700,
    duration: 1400,
    easing: 'easeInOutQuad',
    delay: anime.stagger(130)
})

// calc scroll position
const getScrollPosition = (block) => {
    const { innerHeight } = window;
    const { top, height } = block.getBoundingClientRect();

    let x = (innerHeight / 2 - top) / height;
    let y = Math.max(0, Math.min(x, 1));

    return y;
};

const questionsElement = document.querySelector('.questions');

const elements = [
  {
      block: document.querySelector(".gray-bg"),
      bgStartColor: [255, 255, 255],
      bgEndColor: [149, 166, 178],
  },
  {
      block: document.querySelector(".black-bg"),
      bgStartColor: [149, 166, 178],
      bgEndColor: [36, 36, 36]
  },
  {
      block: document.querySelector(".third"),
      bgStartColor: [36, 36, 36],
      bgEndColor: [255, 255, 255],
  }
];

const getScrollStep = (block) => {
    const { innerHeight } = window;
    const { top } = block.getBoundingClientRect();
    const x = (innerHeight - top) / (innerHeight);
    const y = Math.max(0, Math.min(x, 1));

    return y * 100;
};
// background color interpolation
const calcColor = (from, to, scroll) => {
    const [fromR, fromG, fromB] = from;
    const [toR, toG, toB] = to;

    const r = fromR + Math.round(((toR - fromR) * scroll) / 100);
    const g = fromG + Math.round(((toG - fromG) * scroll) / 100);
    const b = fromB + Math.round(((toB - fromB) * scroll) / 100);
    return [r, g, b];
};

// not used
const setRootColor = (r, g, b) => {
    document.body.style.setProperty('--main-bg-color', `rgb(${r}, ${g}, ${b})`)
};



const onScroll = () => {
    // color bg
    elements.forEach((element) => {
        const position = getScrollStep(element.block);

        if (position > 1) {
            const colorSet = calcColor(element.bgStartColor, element.bgEndColor, position);
            setRootColor(...colorSet);
        }
    });


    // follow line
    const roadElementPosition = getScrollPosition(scrollingContainer);
    let seek = roadElementPosition * planeAnimations.duration;

    seek = Number(seek.toFixed());
    planeAnimations.seek(seek);
};

window.addEventListener("scroll", () => {
    let ticking = false;
    if (!ticking) {
        window.requestAnimationFrame(function () {
            onScroll();
            ticking = false;
        });
        ticking = true;
    }
});
onScroll();

window.addEventListener('resize', () => {
    onScroll()
})



// observer to switch header theme
const switchHeaderContainers = document.querySelectorAll('.dark')

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
          header.classList.add('header--white')
      } else {
          header.classList.remove('header--white')
      }
    })
  }, {
    rootMargin: '0px 0px -50% 0px',
    threshold: 0,
})

switchHeaderContainers.forEach((item) => observer.observe(item))




// swiper

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    autoHeight: true,
    autoplay: true,
    delay: 3000,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
});