let activeElements = [];

const servCards = ["serv-card-1", "serv-card-2", "serv-card-3", "serv-card-4"];
const inspCards = ["insp-card-1", "insp-card-2", "insp-card-3", "insp-card-4"];

const sliderCards = [
  "slider-card-1",
  "slider-card-2",
  "slider-card-3",
  "slider-card-4",
  "slider-card-5",
  "slider-card-6",
  "slider-card-7",
  "slider-card-8",
];

const ids = [
  "banner-text",
  "banner-img",
  "slider-title",
  "slider-desc",
  "insp-title",
  "serv-title",
  "sol-title",
  "sol-desc",
  "footer1",
  "footer2",
  "footer3",
  "footer4",
  ...servCards,
  ...inspCards,
  ...sliderCards,
];

ids.forEach((id) => {
  const el = document.getElementById(id);

  if (el) {
    el.style.transitionDuration = "2000ms";
  }
});

const isElementInViewport = (el) => {
  if (el) {
    const rect = el.getBoundingClientRect();
    const elTop = rect.top;
    const elBottom = rect.bottom;

    // 88 is the height of the Header and the gap
    const isVisible = elTop < window.innerHeight && elBottom >= 88;

    return isVisible;
  }

  return false;
};

window.addEventListener("scroll", (e) => {
  ids.forEach((id, i) => {
    const el = document.getElementById(id);

    if (el && isElementInViewport(el)) {
      if (!activeElements.includes(id)) {
        activeElements.push(id);

        el.style.transform = "translate(0, 0)";
        el.style.opacity = 1;
      }
    } else {
      activeElements = activeElements.filter((el) => el !== id);
      el.style.opacity = 0;

      if (i % 2) {
        el.style.transform = "translate(100px, 100px)";
      } else {
        el.style.transform = "translate(-100px, -100px)";
      }
    }
  });

  console.log(activeElements);
});
