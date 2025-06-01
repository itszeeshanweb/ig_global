document.addEventListener("DOMContentLoaded", function () {
  // Horizontal tabs (features section)
  document.querySelectorAll(".tabs-container").forEach(function (container) {
    const tabItems = container.querySelectorAll(".tab-item");
    const tabContents = container.parentElement.querySelectorAll(
      ".tabs-content .tab-content"
    );
    tabItems.forEach((item) => {
      item.addEventListener("click", function () {
        tabItems.forEach((i) => i.classList.remove("active"));
        tabContents.forEach((c) => c.classList.remove("active"));
        this.classList.add("active");
        const tabId = this.getAttribute("data-tab");
        const content = container.parentElement.querySelector(
          `.tabs-content #${tabId}`
        );
        if (content) content.classList.add("active");
      });
    });
  });

  // Vertical tabs (quality construction section)
  const qcTabsNav = document.querySelectorAll(".qc-tabs-nav");
  qcTabsNav.forEach((nav) => {
    const tabItems = nav.querySelectorAll(".qc-tab-item");
    const tabsContent = nav.parentElement.querySelectorAll(
      ".qc-tabs-content .qc-tab-content"
    );
    tabItems.forEach((item) => {
      item.addEventListener("click", function () {
        tabItems.forEach((i) => i.classList.remove("active"));
        tabsContent.forEach((c) => c.classList.remove("active"));
        this.classList.add("active");
        const tabId = this.getAttribute("data-qc-tab");
        const content = nav.parentElement.querySelector(
          `.qc-tabs-content #${tabId}`
        );
        if (content) content.classList.add("active");
      });
    });
  });

  // Mall Accordion Functionality
  (function () {
    const mallAccordion = document.querySelector(".mall-accordion");
    if (!mallAccordion) return;
    mallAccordion.addEventListener("click", function (e) {
      const header = e.target.closest(".mall-accordion-header");
      if (!header) return;
      const item = header.parentElement;
      if (!item.classList.contains("active")) {
        mallAccordion.querySelectorAll(".mall-accordion-item").forEach((i) => {
          i.classList.remove("active");
          i.querySelector(".mall-accordion-toggle span").innerHTML = "&#43;";
        });
        item.classList.add("active");
        header.querySelector(".mall-accordion-toggle span").innerHTML =
          "&#8722;";
      } else {
        item.classList.remove("active");
        header.querySelector(".mall-accordion-toggle span").innerHTML = "&#43;";
      }
    });
  })();
});

// Expand Career Owl Carousel Initialization
$(document).ready(function () {
  $("#expandCareerSlider").owlCarousel({
    loop: true,
    center: true,
    margin: 32,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: true,
    navText: [
      '<span class="owl-prev">←</span>',
      '<span class="owl-next">→</span>',
    ],
    responsive: {
      0: { items: 1, margin: 10, center: false },
      600: { items: 2, margin: 16 },
      991: { items: 3 },
      1100: { items: 4 },
    },
  });

  $("#timeline").owlCarousel({
    loop: true,
    center: true,
    margin: 0,
    autoplay: false,
    autoplayTimeout: 20000,
    nav: true,
    navText: [
      '<span class="owl-prev">←</span>',
      '<span class="owl-next">→</span>',
    ],
    responsive: {
      0: { items: 1, margin: 10, center: false },
      600: { items: 2, margin: 16 },
      991: { items: 3 },
      1100: { items: 4 },
    },
  });
  

});



window.addEventListener("load", () => {
  const loader = document.querySelector(".loader-overlay");
  const content = document.querySelector(".loader-content");

  setTimeout(() => {
    content.style.display = "none"; // Hide content during transition
    loader.classList.add("split");
    document.body.style.overflow = "auto";
    document.body.classList.remove("no-scroll");
    setTimeout(() => {
      loader.remove();
    }, 500);
  }, 1000); // matches CSS transition time

  const mobileMenu = document.getElementById("mobile-menu");
  const sideMenu = document.querySelector(".navbar-nav");

  mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    sideMenu.classList.toggle("open");
  });
});
