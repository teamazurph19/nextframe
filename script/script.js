// NEXTFRAME shared JavaScript
(function () {
  function setupNavShadow() {
    const nav = document.querySelector("nav");
    const header = document.querySelector("header");
    const target = nav || header;
    if (!target) return;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        target.classList.add("shadow-md", "shadow-lg");
        if (target.tagName.toLowerCase() === "header") {
          target.style.transform = "translateY(0)";
        }
      } else {
        target.classList.remove("shadow-md", "shadow-lg");
        if (target.tagName.toLowerCase() === "header") {
          target.style.transform = "translateY(0)";
        }
      }
    });
  }

  function setupRevealAnimations() {
    const revealElements = document.querySelectorAll(".reveal, .reveal-item, .scroll-reveal, section[data-auto-reveal]");
    if (!revealElements.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const delay = Number(el.getAttribute("data-reveal-delay") || 0);
        setTimeout(() => {
          if (el.classList.contains("reveal")) el.classList.add("active", "reveal-active");
          if (el.classList.contains("reveal-item")) el.classList.add("revealed");
          if (el.classList.contains("scroll-reveal")) el.classList.add("visible");
          if (el.hasAttribute("data-auto-reveal")) {
            el.classList.add("opacity-100", "translate-y-0");
            el.classList.remove("opacity-0", "translate-y-10");
          }
        }, delay);
        obs.unobserve(el);
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    revealElements.forEach((el) => observer.observe(el));
  }

  function setupContactFormDemo() {
    const form = document.querySelector("form");
    if (!form || !document.body.classList.contains("contact-page")) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = e.target.querySelector('button[type="submit"], button');
      if (!btn) return;
      const originalText = btn.innerText;
      btn.innerText = "Sending...";
      btn.classList.add("opacity-70");
      setTimeout(() => {
        btn.innerText = "Message Sent!";
        btn.classList.remove("gradient-button");
        btn.classList.add("bg-on-primary-container");
        e.target.reset();
        setTimeout(() => {
          btn.innerText = originalText;
          btn.classList.add("gradient-button");
          btn.classList.remove("bg-on-primary-container", "opacity-70");
        }, 3000);
      }, 1500);
    });
  }

  function setupHeroMesh() {
    const hero = document.querySelector(".hero-mesh");
    if (!hero) return;
    hero.addEventListener("mousemove", (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      hero.style.backgroundPosition = `${x * 10}% ${y * 10}%`;
    });
  }

  function setupMasonryHover() {
    document.querySelectorAll(".masonry-item").forEach((item) => {
      const img = item.querySelector("img");
      if (!img) return;
      item.addEventListener("mouseenter", () => { img.style.transform = "scale(1.1)"; });
      item.addEventListener("mouseleave", () => { img.style.transform = "scale(1)"; });
    });
  }

  function setupSmoothAnchorLinks() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const selector = this.getAttribute("href");
        if (!selector || selector === "#") return;
        const target = document.querySelector(selector);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupNavShadow();
    setupRevealAnimations();
    setupContactFormDemo();
    setupHeroMesh();
    setupMasonryHover();
    setupSmoothAnchorLinks();
  });
})();
