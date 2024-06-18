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

document.addEventListener("DOMContentLoaded", function () {
  // 品牌名稱動畫效果代碼保持不變

  // 導航欄功能
  var navLinks = document.querySelectorAll(
    ".nav-link, .navbar-brand, .header_nav_btn"
  );
  var navbarToggler = document.querySelector(".navbar-toggler");
  var navbarCollapse = document.querySelector(".navbar-collapse");

  function toggleNavbar() {
    if (
      navbarCollapse.style.display === "none" ||
      navbarCollapse.style.display === ""
    ) {
      navbarCollapse.style.display = "block";
    } else {
      navbarCollapse.style.display = "none";
    }
  }

  navbarToggler.addEventListener("click", toggleNavbar);

  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function () {
      if (window.innerWidth < 992) {
        navbarCollapse.style.display = "none";
      }
    });
  });

  // 點擊外部區域關閉菜單
  document.addEventListener("click", function (event) {
    var isClickInside =
      navbarCollapse.contains(event.target) ||
      navbarToggler.contains(event.target);
    if (!isClickInside && navbarCollapse.style.display === "block") {
      navbarCollapse.style.display = "none";
    }
  });

  // 窗口大小改變時處理導航欄
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 992) {
      navbarCollapse.style.display = "";
    }
  });
});

// ScrollReveal 效果
ScrollReveal().reveal(".headline");
