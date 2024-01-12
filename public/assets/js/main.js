// init path
const path = anime.path(".path");

// init observer blocks
const lineElement = document.querySelector('.path-wrapper');

// init animation
const planeAnimation = anime({
    targets: ".path-target",
    translateX: path("x"),
    translateY: path("y"),
    rotate: path("angle"),
    easing: "linear",
    loop: false,
    autoplay: false,
    duration: 5000,
});

// get scroll position (0 -> 1)
const getScrollPosition = (block) => {
    const { innerHeight } = window;
    const { top, height } = block.getBoundingClientRect();


    let x = (innerHeight / 2 - top) / (height / 1);
    let y = Math.max(0, Math.min(x, 1));

    return y;
};



const questionsElement = document.querySelector('.questions');

const elements = [
  {
      block: document.querySelector(".first"),
      startColor: [255, 255, 255],
      endColor: [169, 176, 183],
  },
  {
      block: document.querySelector(".second"),
      startColor: [169, 176, 183],
      endColor: [0, 0, 0],
      blur: true
  },
  {
      block: document.querySelector(".third"),
      startColor: [0, 0, 0],
      endColor: [255, 255, 255],
  }
];

document.addEventListener("DOMContentLoaded", () => {

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
    const setBackgroundColor = (r, g, b) => {
        document.body.style.background = `rgb(${r}, ${g}, ${b})`;
    };

    const lazyImages = document.querySelectorAll('.mens')

    const callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('blur')
            } else {
                entry.target.classList.remove('blur')
            }
        })
    }

    const options = {
        rootMargin: '0px 0px 0px 0px',
        threshold: 1.0,
    }

    const observer = new IntersectionObserver(callback, options)

    lazyImages.forEach((image) => observer.observe(image))


    const onScroll = () => {
      // color bg
        elements.forEach((element) => {
            const position = getScrollStep(element.block);

            if (position > 1) {
              const colorSet = calcColor(element.startColor, element.endColor, position);
              setBackgroundColor(...colorSet);
            }
        });


        // follow line
        const roadElementPosition = getScrollPosition(lineElement);
    
        let seek = roadElementPosition * planeAnimation.duration;
        seek = Number(seek.toFixed());
        planeAnimation.seek(seek);
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
});
