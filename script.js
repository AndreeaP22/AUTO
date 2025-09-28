
gsap.registerPlugin(ScrollTrigger);

/* ==========================
   HERO SECTION
========================== */

// Zoom lent pe video când faci scroll
gsap.to(".hero-video", {
  scale: 1.1,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});


// Overlay fade-in
gsap.from(".overlay", {
  opacity: 0,
  duration: 2,
  ease: "power2.out"
});

// Text Hero cinematic
gsap.from(".hero-content h1", {
  opacity: 0,
  y: -80,
  duration: 1.2,
  ease: "power3.out"
});

gsap.from(".hero-content p", {
  opacity: 0,
  y: 60,
  duration: 1,
  delay: 0.5,
  ease: "power3.out"
});

/* ==========================
   CARDS
========================== */
gsap.from(".card", {
  scrollTrigger: {
    trigger: ".modele",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
  ease: "power2.out"
});

/* ==========================
   SECTIUNEA DETALII
========================== */
gsap.from(".detalii h2", {
  scrollTrigger: {
    trigger: ".detalii",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out"
});

gsap.from(".detalii p", {
  scrollTrigger: {
    trigger: ".detalii",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.3,
  ease: "power2.out"
});

