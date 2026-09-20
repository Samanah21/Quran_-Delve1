/* =========================================
   QURAN DELVE
   JAVASCRIPT
========================================= */

// =========================================
// NAVBAR ON SCROLL
// =========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// =========================================
// ACTIVE NAV LINK
// =========================================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// =========================================
// SCROLL REVEAL
// =========================================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");

        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  },
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

// =========================================
// TOP BUTTON
// =========================================

const topBtn = document.querySelector("#topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// =========================================
// CLOSE MOBILE NAV AFTER CLICK
// =========================================

const navLinksAll = document.querySelectorAll(".navbar .nav-link");

const navCollapse = document.querySelector("#mainNav");

navLinksAll.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 992 && navCollapse.classList.contains("show")) {
      const collapse = bootstrap.Collapse.getInstance(navCollapse);

      if (collapse) {
        collapse.hide();
      }
    }
  });
});

// =========================================
// LEARNING TOPICS
// =========================================

const topicButtons = document.querySelectorAll(".learn-btn");

const topicTitle = document.querySelector("#topicTitle");

const topicDescription = document.querySelector("#topicDescription");

const topicModalElement = document.querySelector("#topicModal");

const topicModal = new bootstrap.Modal(topicModalElement);

const topics = {
  Remember: `
        The Quran frequently connects spiritual awareness
        with remembering Allah. Explore how remembrance can
        become part of everyday life through reflection,
        gratitude and conscious action.
    `,

  Worship: `
        Worship can be explored through devotion, intention,
        prayer and actions that reflect a person's relationship
        with Allah. This topic invites you to consider the
        meaning behind acts of worship.
    `,

  Character: `
        Quranic teachings connect faith with how people treat
        one another. Explore themes such as honesty, kindness,
        justice, compassion and responsibility.
    `,

  Gratitude: `
        Gratitude involves recognizing blessings and responding
        to them with thankfulness. Reflect on how gratitude can
        influence perspective and everyday behavior.
    `,

  Patience: `
        Patience and perseverance are recurring themes in Quranic
        teaching. Explore how patience can relate to difficulties,
        personal growth and trust.
    `,

  Community: `
        Worship also has a social dimension. Explore teachings
        related to compassion, generosity, justice and
        responsibility toward other people.
    `,
};

topicButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const topic = button.dataset.topic;

    topicTitle.textContent = topic;

    topicDescription.textContent = topics[topic];

    topicModal.show();
  });
});

// =========================================
// COMPETITION BUTTONS
// =========================================

const competitionButtons = document.querySelectorAll(".competition-btn");

competitionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const quizName = button.dataset.quiz;

    button.innerHTML = `
            <i class="bi bi-check-circle"></i>
            Challenge Selected
        `;

    button.style.pointerEvents = "none";

    setTimeout(() => {
      alert(
        `${quizName} selected! A complete quiz system can be connected here.`,
      );

      button.innerHTML = "Start Challenge";

      button.style.pointerEvents = "auto";
    }, 400);
  });
});

// =========================================
// CONTACT FORM
// =========================================

const contactForm = document.querySelector("#contactForm");

const formMessage = document.querySelector("#formMessage");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();

  const email = document.querySelector("#email").value.trim();

  const subject = document.querySelector("#subject").value.trim();

  const message = document.querySelector("#message").value.trim();

  if (name === "" || email === "" || subject === "" || message === "") {
    formMessage.textContent = "Please complete all fields.";

    formMessage.style.color = "#a43d3d";

    return;
  }

  formMessage.textContent = `Thank you, ${name}. Your message has been received.`;

  formMessage.style.color = "#0d6b4f";

  contactForm.reset();
});

// =========================================
// CURRENT YEAR
// =========================================

document.querySelector("#year").textContent = new Date().getFullYear();
