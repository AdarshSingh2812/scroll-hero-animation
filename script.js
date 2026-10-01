gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function initIntro() {
  const intro = gsap.timeline({
    defaults: {
      ease: "power3.out"
    }
  });

  intro
    .from(".nav", {
      y: -20,
      opacity: 0,
      duration: 0.7
    })
    .from(".eyebrow", {
      y: 20,
      opacity: 0,
      duration: 0.65
    }, "-=0.35")
    .from(".title-line", {
      y: 80,
      opacity: 0,
      duration: 0.9,
      stagger: 0.14
    }, "-=0.35")
    .from(".hero-description", {
      y: 25,
      opacity: 0,
      duration: 0.7
    }, "-=0.45")
    .from(".visual-wrap", {
      scale: 0.78,
      opacity: 0,
      rotate: -8,
      duration: 1.1,
      ease: "back.out(1.4)"
    }, "-=0.7")
    .from(".stats .stat", {
      y: 30,
      opacity: 0,
      duration: 0.55,
      stagger: 0.12
    }, "-=0.65")
    .from(".scroll-cue", {
      opacity: 0,
      y: 12,
      duration: 0.5
    }, "-=0.25");

  document.querySelectorAll(".stat-number").forEach((counter) => {
    const value = Number(counter.dataset.value);

    gsap.to(counter, {
      textContent: value,
      duration: 1.1,
      delay: 1.1,
      ease: "power2.out",
      snap: { textContent: 1 },
      onUpdate: () => {
        counter.textContent = Math.round(Number(counter.textContent));
      }
    });
  });
}

function initScrollAnimation() {
  if (reduceMotion) return;

  const hero = document.querySelector(".hero");
  const visual = document.querySelector(".visual-wrap");
  const bottle = document.querySelector(".bottle");
  const ringBack = document.querySelector(".ring-back");
  const ringFront = document.querySelector(".ring-front");
  const copy = document.querySelector(".hero-copy");
  const stats = document.querySelector(".stats");
  const cue = document.querySelector(".scroll-cue");
  const orbOne = document.querySelector(".orb-one");
  const orbTwo = document.querySelector(".orb-two");

  const scrollTl = gsap.timeline({
    scrollTrigger: {
      trigger: hero,
      start: "top top",
      end: "bottom bottom",
      scrub: 1.2,
      invalidateOnRefresh: true
    }
  });

  scrollTl
    .to(copy, {
      x: -120,
      y: -45,
      opacity: 0.15,
      ease: "none"
    }, 0)
    .to(stats, {
      y: 90,
      opacity: 0.1,
      ease: "none"
    }, 0)
    .to(cue, {
      opacity: 0,
      y: 20,
      ease: "none"
    }, 0)
    .to(visual, {
      x: "-50%",
      y: "80%",
      scale: 1.28,
      rotation: 15,
      ease: "none"
    }, 0)
    .to(bottle, {
      rotation: -32,
      scale: 1.08,
      ease: "none"
    }, 0)
    .to(ringBack, {
      rotation: 150,
      scale: 1.18,
      ease: "none"
    }, 0)
    .to(ringFront, {
      rotation: -90,
      scale: 0.82,
      ease: "none"
    }, 0)
    .to(orbOne, {
      x: 180,
      y: 180,
      scale: 1.5,
      ease: "none"
    }, 0)
    .to(orbTwo, {
      x: -160,
      y: 250,
      scale: 0.65,
      ease: "none"
    }, 0);

  gsap.to(".scroll-line", {
    scaleY: 0.35,
    transformOrigin: "top center",
    repeat: -1,
    yoyo: true,
    duration: 1.2,
    ease: "sine.inOut"
  });
}

function initStoryAnimation() {
  if (reduceMotion) return;

  gsap.from(".story .eyebrow", {
    scrollTrigger: {
      trigger: ".story",
      start: "top 75%"
    },
    y: 25,
    opacity: 0,
    duration: 0.7,
    ease: "power3.out"
  });

  gsap.from(".story h2", {
    scrollTrigger: {
      trigger: ".story h2",
      start: "top 78%"
    },
    y: 70,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out"
  });

  gsap.from(".story-copy", {
    scrollTrigger: {
      trigger: ".story-copy",
      start: "top 82%"
    },
    y: 35,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  });

  gsap.from(".feature-card", {
    scrollTrigger: {
      trigger: ".feature-grid",
      start: "top 78%"
    },
    y: 55,
    opacity: 0,
    duration: 0.7,
    stagger: 0.13,
    ease: "power3.out"
  });
}

window.addEventListener("load", () => {
  initIntro();
  initScrollAnimation();
  initStoryAnimation();

  ScrollTrigger.refresh();
});
