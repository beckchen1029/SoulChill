document.addEventListener("DOMContentLoaded", function () {
  const nodeSelectors = [".header_logo", ".header_nav_list_items",];
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
