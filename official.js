document.addEventListener("DOMContentLoaded", function () {
  const nodeSelectors = [".header__logo", ".items", ".sidebar__logo"];
  const nodes = [];

  nodeSelectors.forEach((selector) => {
    const selectedNodes = document.querySelectorAll(selector);
    nodes.push(...selectedNodes);
  });

  function typeLetter(node, text) {
    let index = 0;
    const originalText = node.textContent;

    function animateLetter() {
      if (index < text.length) {
        const span = document.createElement("span");
        span.className = "letter";
        span.textContent = text[index];
        node.appendChild(span);
        index++;
        setTimeout(animateLetter, 150);
      } else {
        node.textContent = originalText;
      }
    }

    node.textContent = "";
    animateLetter();
  }

  nodes.forEach((node) => {
    const text = node.dataset.text || "Default Text";
    typeLetter(node, text);
  });
});



ScrollReveal().reveal(".headline");



document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".animated-image");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
        observer.unobserve(entry.target);
      }
    });
  });

  function animateImages() {
    images.forEach((image) => {
      observer.observe(image);
    });
  }

  animateImages();
});