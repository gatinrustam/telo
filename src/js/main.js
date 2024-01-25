const scrollingContainer = document.querySelector('.intro');
const scrollingPath = anime.path(".intro__path");
const scrollingElements = document.querySelectorAll('.intro__scrolling');

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
    delay: anime.stagger(130),
    // delay: (_, i) => i * 150
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
      startColor: [255, 255, 255],
      endColor: [149, 166, 178],
  },
  {
      block: document.querySelector(".black-bg"),
      startColor: [149, 166, 178],
      endColor: [0, 0, 0],
      blur: true
  },
  {
      block: document.querySelector(".third"),
      startColor: [0, 0, 0],
      endColor: [255, 255, 255],
  }
];

// const doubleItems = document.querySelectorAll('.double-item')
// const doubleContainer = document.querySelector(".double")

// function switchTextByScroll(){
//     const scrollStep = getScrollPosition(doubleContainer)

//     const step = Math.round(scrollStep * doubleItems.length);

//     if (doubleItems[step] === undefined) {
//         return
//     }

//     doubleItems[step].classList.toggle('active')
// }

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
        let roadElementPosition = getScrollPosition(scrollingContainer);

        console.log(roadElementPosition);

        let seek = roadElementPosition * planeAnimations.duration;
        seek = Number(seek.toFixed());
        planeAnimations.seek(seek);
        // roadElementPosition = roadElementPosition > 0.7 ? 0.7 : roadElementPosition
    
        // for (let i = 0; i < planeAnimations.length; i++) {
        // }

        switchTextByScroll()
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
});
