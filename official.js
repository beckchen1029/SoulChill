document.addEventListener("DOMContentLoaded", function () {
  const nodeSelectors = [".navbar-brand"];
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



document.addEventListener('DOMContentLoaded', function () {
  var navbarToggler = document.querySelector('.navbar-toggler');
  var navbarCollapse = document.querySelector('.navbar-collapse');

  navbarToggler.addEventListener('click', function () {
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    } else {
      navbarCollapse.classList.add('show');
    }
  });
});