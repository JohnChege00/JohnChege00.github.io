
(function () {
  "use strict";

  
  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.querySelector("[data-nav-primary]");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  
  if (window.SITE_CONFIG) {
    var cfg = window.SITE_CONFIG;
    document.querySelectorAll("[data-social]").forEach(function (el) {
      var key = el.getAttribute("data-social");
      if (cfg.social && cfg.social[key]) {
        el.setAttribute("href", cfg.social[key]);
      }
    });
    document.querySelectorAll("[data-email]").forEach(function (el) {
      el.setAttribute("href", "mailto:" + cfg.email);
    });
    document.querySelectorAll("[data-phone]").forEach(function (el) {
      el.setAttribute("href", "tel:" + cfg.phoneIntl);
    });
  }

  
  var previewMount = document.querySelector("[data-project-preview]");
  if (previewMount && window.PROJECTS) {
    var items = window.PROJECTS.filter(function (p) {
      return p.featured;
    });

    var html = items
      .map(function (p, i) {
        var num = String(i + 1).padStart(2, "0");
        var tags = p.tags
          .slice(0, 4)
          .map(function (t) {
            return '<span class="tag">' + t + "</span>";
          })
          .join("");

        return (
          '<a class="project-preview-card" href="' +
          p.caseStudyUrl +
          '">' +
          '<span class="idx">' +
          num +
          "</span>" +
          "<h3>" +
          p.name +
          "</h3>" +
          "<p>" +
          p.tagline +
          "</p>" +
          '<div class="tag-row">' +
          tags +
          "</div>" +
          '<span class="card-link-arrow">View case study &rarr;</span>' +
          "</a>"
        );
      })
      .join("");

    previewMount.innerHTML = html;
  }
})();
