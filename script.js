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

/* =========================================
   QURAN DELVE AI CHAT
========================================= */

const aiAssistant = document.querySelector(".ai-assistant");

const aiChatWindow = document.querySelector("#aiChatWindow");

const aiFloatingButton = document.querySelector("#aiFloatingButton");

const aiMinimizeButton = document.querySelector("#aiMinimizeButton");

const aiCloseButton = document.querySelector("#aiCloseButton");

const aiChatBody = document.querySelector("#aiChatBody");

const aiMessageInput = document.querySelector("#aiMessageInput");

const aiSendButton = document.querySelector("#aiSendButton");

const aiTyping = document.querySelector("#aiTyping");

const aiSuggestions = document.querySelectorAll(".ai-suggestion");

/* =========================================
   OPEN CHAT
========================================= */

function openAIChat() {
  aiAssistant.classList.add("ai-open");

  setTimeout(() => {
    aiMessageInput.focus();
  }, 300);
}

/* =========================================
   MINIMIZE CHAT
========================================= */

function minimizeAIChat() {
  aiAssistant.classList.remove("ai-open");
}

/* =========================================
   CLOSE CHAT
========================================= */

function closeAIChat() {
  aiAssistant.classList.remove("ai-open");
}

/* =========================================
   FLOATING BUTTON
========================================= */

aiFloatingButton.addEventListener("click", () => {
  if (aiAssistant.classList.contains("ai-open")) {
    minimizeAIChat();
  } else {
    openAIChat();
  }
});

/* =========================================
   MINIMIZE BUTTON
========================================= */

aiMinimizeButton.addEventListener("click", minimizeAIChat);

/* =========================================
   CLOSE BUTTON
========================================= */

aiCloseButton.addEventListener("click", closeAIChat);

/* =========================================
   ADD USER MESSAGE
========================================= */

function addUserMessage(message) {
  const messageDiv = document.createElement("div");

  messageDiv.className = "ai-message ai-user-message";

  messageDiv.innerHTML = `
        <div class="ai-message-content">
            <p>${escapeHTML(message)}</p>
        </div>
    `;

  aiChatBody.appendChild(messageDiv);

  scrollChatToBottom();
}

/* =========================================
   ADD BOT MESSAGE
========================================= */

function addBotMessage(message) {
  const messageDiv = document.createElement("div");

  messageDiv.className = "ai-message ai-bot-message";

  messageDiv.innerHTML = `
        <div class="ai-message-avatar">
            ✦
        </div>

        <div class="ai-message-content">
            <p>${message}</p>
        </div>
    `;

  aiChatBody.appendChild(messageDiv);

  scrollChatToBottom();
}

/* =========================================
   SCROLL CHAT
========================================= */

function scrollChatToBottom() {
  aiChatBody.scrollTop = aiChatBody.scrollHeight;
}

/* =========================================
   TYPING INDICATOR
========================================= */

function showTyping() {
  aiTyping.classList.add("active");

  scrollChatToBottom();
}

function hideTyping() {
  aiTyping.classList.remove("active");
}

/* =========================================
   DEMO AI RESPONSE
========================================= */

function generateDemoResponse(message) {
  const text = message.toLowerCase();

  if (text.includes("worship") || text.includes("ibadah")) {
    return `
            The Quran teaches that worship is not limited
            to rituals. It includes sincere devotion to Allah,
            prayer, gratitude, obedience, and living according
            to righteous principles.
        `;
  }

  if (text.includes("patience") || text.includes("sabr")) {
    return `
            Patience is an important theme in the Quran.
            It encourages believers to remain steadfast,
            especially during difficulties, while trusting
            in Allah.
        `;
  }

  if (text.includes("gratitude") || text.includes("thank")) {
    return `
            The Quran frequently encourages gratitude.
            Gratitude can involve recognizing blessings,
            thanking Allah, and using those blessings
            responsibly.
        `;
  }

  if (text.includes("hello") || text.includes("hi") || text.includes("salam")) {
    return `
            Wa Alaikum Assalam! 🌿
            What would you like to learn about from the
            Quran?
        `;
  }

  if (text.includes("quran") || text.includes("teach")) {
    return `
            The Quran addresses many aspects of human life,
            including worship, morality, patience, justice,
            gratitude, compassion, and responsibility.
        `;
  }

  return `
        That's an interesting question. 🌿
        Quran Delve AI can help you explore themes such
        as worship, patience, gratitude, prayer, morality,
        and other Quranic teachings.
    `;
}

/* =========================================
   SEND MESSAGE
========================================= */

function sendAIMessage() {
  const message = aiMessageInput.value.trim();

  if (message === "") {
    return;
  }

  /* Show user's message */

  addUserMessage(message);

  /* Clear input */

  aiMessageInput.value = "";

  /* Show loading */

  showTyping();

  /* Simulate AI thinking */

  setTimeout(() => {
    hideTyping();

    const response = generateDemoResponse(message);

    addBotMessage(response);
  }, 1200);
}

/* =========================================
   SEND BUTTON
========================================= */

aiSendButton.addEventListener("click", sendAIMessage);

/* =========================================
   ENTER KEY
========================================= */

aiMessageInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();

    sendAIMessage();
  }
});

/* =========================================
   SUGGESTION BUTTONS
========================================= */

aiSuggestions.forEach((button) => {
  button.addEventListener("click", () => {
    const question = button.textContent.trim();

    aiMessageInput.value = question;

    sendAIMessage();
  });
});

/* =========================================
   SECURITY HELPER
========================================= */

function escapeHTML(text) {
  const div = document.createElement("div");

  div.textContent = text;

  return div.innerHTML;
}
