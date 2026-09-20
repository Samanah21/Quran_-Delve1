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

// =========================================
// AI CHAT ASSISTANT
// =========================================

const aiFloatingButton = document.querySelector("#aiFloatingButton");

const aiChatWindow = document.querySelector("#aiChatWindow");

const aiMinimize = document.querySelector("#aiMinimize");

const aiChatBody = document.querySelector("#aiChatBody");

const aiInput = document.querySelector("#aiMessageInput");

const aiSendButton = document.querySelector("#aiSendButton");

const aiTyping = document.querySelector("#aiTyping");

// =========================================
// OPEN CHAT
// =========================================

aiFloatingButton.addEventListener("click", () => {
  aiChatWindow.classList.remove("minimized");

  aiInput.focus();
});

// =========================================
// MINIMIZE CHAT
// =========================================

aiMinimize.addEventListener("click", () => {
  aiChatWindow.classList.add("minimized");
});

// =========================================
// ADD MESSAGE
// =========================================

function addUserMessage(message) {
  const messageElement = document.createElement("div");

  messageElement.className = "ai-message ai-message-user";

  messageElement.innerHTML = `

        <div class="message-content">

            <p>${escapeHTML(message)}</p>

            <span class="message-time">
                Just now
            </span>

        </div>

    `;

  aiChatBody.appendChild(messageElement);

  scrollChatToBottom();
}

// =========================================
// ADD AI MESSAGE
// =========================================

function addBotMessage(message) {
  const messageElement = document.createElement("div");

  messageElement.className = "ai-message ai-message-bot";

  messageElement.innerHTML = `

        <div class="message-avatar">
            <i class="bi bi-stars"></i>
        </div>

        <div class="message-content">

            <p>${message}</p>

            <span class="message-time">
                Just now
            </span>

        </div>

    `;

  aiChatBody.appendChild(messageElement);

  scrollChatToBottom();
}

// =========================================
// TYPING
// =========================================

function showTyping() {
  aiTyping.classList.add("show");

  scrollChatToBottom();
}

function hideTyping() {
  aiTyping.classList.remove("show");
}

// =========================================
// SCROLL CHAT
// =========================================

function scrollChatToBottom() {
  aiChatBody.scrollTop = aiChatBody.scrollHeight;
}

// =========================================
// SIMPLE DEMO AI
// =========================================

function generateDemoResponse(message) {
  const text = message.toLowerCase();

  if (text.includes("worship") || text.includes("ibadah")) {
    return `
            Worship in the Quran is connected with devotion,
            obedience, remembrance and sincere intention.
            It is not limited to one action; it can shape
            how a person approaches everyday life.
        `;
  }

  if (
    text.includes("gratitude") ||
    text.includes("grateful") ||
    text.includes("thankful")
  ) {
    return `
            Gratitude is an important Quranic theme. It involves
            recognizing blessings, expressing thankfulness and
            responding to blessings responsibly.
        `;
  }

  if (text.includes("patience") || text.includes("sabr")) {
    return `
            Patience, often associated with the Arabic concept
            of sabr, is repeatedly emphasized in Quranic teaching.
            It can involve perseverance, restraint and remaining
            steadfast through difficulty.
        `;
  }

  if (text.includes("quran") || text.includes("teach")) {
    return `
            The Quran addresses many dimensions of spiritual life,
            including worship, prayer, remembrance, gratitude,
            patience, character and responsibility toward others.
        `;
  }

  if (text.includes("hello") || text.includes("hi") || text.includes("salam")) {
    return `
            Wa Alaikum Assalam! 🌿
            How can I help you explore the teachings presented
            on Quran Delve?
        `;
  }

  return `
        That's an interesting question. 🌿

        I can help you explore topics such as worship,
        prayer, gratitude, patience, remembrance,
        character and Quranic reflection.

        Try asking me something like:
        "What does the Quran teach about patience?"
    `;
}

// =========================================
// SEND MESSAGE
// =========================================

function sendAIMessage() {
  const message = aiInput.value.trim();

  if (message === "") {
    return;
  }

  // Add user's message

  addUserMessage(message);

  // Clear input

  aiInput.value = "";

  // Show typing

  showTyping();

  // Simulate AI response

  setTimeout(() => {
    hideTyping();

    const response = generateDemoResponse(message);

    addBotMessage(response);
  }, 1000);
}

// =========================================
// SEND BUTTON
// =========================================

aiSendButton.addEventListener("click", sendAIMessage);

// =========================================
// ENTER KEY
// =========================================

aiInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();

    sendAIMessage();
  }
});

// =========================================
// SUGGESTION BUTTONS
// =========================================

const aiSuggestions = document.querySelectorAll(".ai-suggestions button");

aiSuggestions.forEach((button) => {
  button.addEventListener("click", () => {
    const question = button.dataset.question;

    aiInput.value = question;

    sendAIMessage();
  });
});

// =========================================
// SECURITY HELPER
// =========================================

function escapeHTML(text) {
  const div = document.createElement("div");

  div.textContent = text;

  return div.innerHTML;
}
