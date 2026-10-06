/*
 * Script for Manan Bhesania's Portfolio
 * Handles project filtering, form validation, and mobile nav interactions
 */

document.addEventListener("DOMContentLoaded", () => {
  // Project category filtering
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-item");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-filter");

      projectCards.forEach((card) => {
        const itemCategory = card.getAttribute("data-category");
        if (category === "all" || itemCategory === category) {
          card.classList.remove("d-none");
        } else {
          card.classList.add("d-none");
        }
      });
    });
  });

  // Contact form submission and validation
  const contactForm = document.getElementById("contactForm");
  const formSuccess = document.getElementById("formSuccessAlert");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (contactForm.checkValidity()) {
        formSuccess.classList.remove("d-none");
        contactForm.reset();
        contactForm.classList.remove("was-validated");

        // Hide success message after 5 seconds
        setTimeout(() => {
          formSuccess.classList.add("d-none");
        }, 5000);
      } else {
        contactForm.classList.add("was-validated");
      }
    });
  }

  // Auto-close mobile navbar when a nav link is clicked
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navCollapse = document.getElementById("navContent");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navCollapse && navCollapse.classList.contains("show")) {
        const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });
});