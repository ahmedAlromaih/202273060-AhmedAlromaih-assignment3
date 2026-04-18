function $(id) {
  return document.getElementById(id);
}

const STORAGE_KEY = "assignment3-portfolio-state";
const THEME_KEY = "assignment3-theme";
const GITHUB_USERNAME = "ahmedAlromaih";

const projects = [
  {
    title: "Assignment 3 Portfolio Upgrade",
    category: "web",
    difficulty: "advanced",
    year: 2026,
    image: "assets/images/profile-placeholder.svg",
    alt: "Profile illustration used for the portfolio upgrade project",
    description:
      "A responsive portfolio site enhanced with API integration, project sorting logic, saved preferences, and validation feedback.",
    tags: ["html", "css", "javascript", "api", "local storage"],
    links: [
      { label: "Open repository", href: "https://github.com/ahmedAlromaih/202273060-AhmedAlromaih-assignment3" },
      { label: "Technical docs", href: "docs/technical-documentation.md" }
    ]
  },
  {
    title: "Student Learning Activities Organizer",
    category: "design",
    difficulty: "beginner",
    year: 2025,
    image: "assets/images/project1-placeholder.svg",
    alt: "Placeholder illustration for the Figma learning organizer project",
    description:
      "A UI and UX concept in Figma for helping students organize study tasks with a cleaner and more accessible interface.",
    tags: ["figma", "ui", "ux", "accessibility", "course project"],
    links: [
      { label: "View Figma design", href: "https://www.figma.com/make/tXOIabo2CM81LXdEUcT7jX/UML-Sequence-Diagram?t=i8n9uPyNMFS1uVeu-1" }
    ]
  },
  {
    title: "BMI Calculator in Python",
    category: "python",
    difficulty: "beginner",
    year: 2024,
    image: "assets/images/project2-placeholder.svg",
    alt: "Placeholder illustration for the BMI calculator program",
    description:
      "A command-line Python program that validates user input, calculates BMI, and prints a clear weight category.",
    tags: ["python", "validation", "console", "math"],
    links: [
      { label: "Program README", href: "projects/simple-program/README.md" }
    ]
  },
  {
    title: "Assignment Documentation Pack",
    category: "docs",
    difficulty: "beginner",
    year: 2026,
    image: "assets/images/profile-placeholder.svg",
    alt: "Documentation-themed project illustration",
    description:
      "Technical documentation and an AI usage report that explain the implementation choices, review process, and responsible AI workflow.",
    tags: ["markdown", "documentation", "analysis", "reporting"],
    links: [
      { label: "AI usage report", href: "docs/ai-usage-report.md" },
      { label: "Technical documentation", href: "docs/technical-documentation.md" }
    ]
  }
];

const state = {
  theme: "light",
  visitorName: "",
  visitorTrack: "all",
  projectFilter: "all",
  projectSearch: "",
  audienceFilter: "all",
  projectSort: "newest",
  repoSort: "updated",
  githubRepos: [],
  sessionStartedAt: Date.now()
};

function loadSavedState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    state.visitorName = typeof saved.visitorName === "string" ? saved.visitorName : "";
    state.visitorTrack = ["all", "beginner", "advanced"].includes(saved.visitorTrack) ? saved.visitorTrack : "all";
    state.projectSort = ["newest", "oldest", "az"].includes(saved.projectSort) ? saved.projectSort : "newest";
    state.repoSort = ["updated", "stars", "name"].includes(saved.repoSort) ? saved.repoSort : "updated";
    state.audienceFilter = state.visitorTrack;
  } catch (error) {
    console.warn("Saved state could not be loaded.", error);
  }
}

function saveState() {
  const payload = {
    visitorName: state.visitorName,
    visitorTrack: state.visitorTrack,
    projectSort: state.projectSort,
    repoSort: state.repoSort
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

function setTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_KEY, theme);

  const themeToggle = $("themeToggle");
  if (themeToggle) {
    const isDark = theme === "dark";
    themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
    themeToggle.setAttribute("aria-pressed", String(isDark));
  }
}

function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme === "light" || savedTheme === "dark") {
    setTheme(savedTheme);
    return;
  }

  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(prefersDark ? "dark" : "light");
}

function initThemeToggle() {
  const themeToggle = $("themeToggle");
  if (!themeToggle) {
    return;
  }

  themeToggle.addEventListener("click", () => {
    setTheme(state.theme === "dark" ? "light" : "dark");
  });
}

function setGreeting() {
  const greeting = $("greeting");
  if (!greeting) {
    return;
  }

  const hour = new Date().getHours();
  let message = "Welcome";

  if (hour >= 5 && hour < 12) {
    message = "Good morning";
  } else if (hour >= 12 && hour < 17) {
    message = "Good afternoon";
  } else if (hour >= 17 && hour < 22) {
    message = "Good evening";
  } else {
    message = "Late-night coding energy";
  }

  greeting.textContent = message;
}

function setYear() {
  const year = $("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
}

function initMobileNav() {
  const navToggle = $("navToggle");
  const navMenu = $("navMenu");

  if (!navToggle || !navMenu) {
    return;
  }

  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initRevealAnimations() {
  const items = document.querySelectorAll(".reveal");
  if (items.length === 0) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach((item) => observer.observe(item));
}

function formatTrack(track) {
  if (track === "beginner") {
    return "Beginner friendly";
  }

  if (track === "advanced") {
    return "Advanced challenge";
  }

  return "All visitors";
}

function formatSortLabel(sortValue) {
  if (sortValue === "az") {
    return "title A-Z";
  }

  if (sortValue === "oldest") {
    return "oldest first";
  }

  if (sortValue === "stars") {
    return "star count";
  }

  if (sortValue === "name") {
    return "name A-Z";
  }

  return "newest first";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function updateVisitorMessage(message) {
  const status = $("visitorStateMessage");
  if (status) {
    status.textContent = message;
  }
}

function updatePersonalizedCopy() {
  const personalWelcome = $("personalWelcome");
  const savedTrackLabel = $("savedTrackLabel");
  const visitorNameInput = $("visitorName");
  const visitorTrackSelect = $("visitorTrack");
  const audienceFilter = $("audienceFilter");

  if (visitorNameInput) {
    visitorNameInput.value = state.visitorName;
  }

  if (visitorTrackSelect) {
    visitorTrackSelect.value = state.visitorTrack;
  }

  if (audienceFilter) {
    audienceFilter.value = state.audienceFilter;
  }

  if (savedTrackLabel) {
    savedTrackLabel.textContent = formatTrack(state.visitorTrack);
  }

  if (!personalWelcome) {
    return;
  }

  if (state.visitorName) {
    personalWelcome.textContent = `${state.visitorName}, this portfolio highlights coursework, web app logic, and live GitHub data with your preferred difficulty view already applied.`;
    return;
  }

  personalWelcome.textContent =
    "I am Ahmed Alromaih, a Computer Science student using this portfolio to showcase coursework, problem solving, and front-end engineering improvements from Assignment 3.";
}

function getAudienceMatch(project) {
  if (state.audienceFilter === "all") {
    return true;
  }

  return project.difficulty === state.audienceFilter;
}

function getFilteredProjects() {
  const query = state.projectSearch.trim().toLowerCase();

  const visible = projects.filter((project) => {
    const matchesCategory = state.projectFilter === "all" || project.category === state.projectFilter;
    const haystack = [project.title, project.description, project.tags.join(" ")].join(" ").toLowerCase();
    const matchesQuery = query === "" || haystack.includes(query);
    const matchesAudience = getAudienceMatch(project);

    return matchesCategory && matchesQuery && matchesAudience;
  });

  visible.sort((first, second) => {
    if (state.projectSort === "oldest") {
      return first.year - second.year;
    }

    if (state.projectSort === "az") {
      return first.title.localeCompare(second.title);
    }

    return second.year - first.year;
  });

  return visible;
}

function renderProjects() {
  const grid = $("projectGrid");
  const emptyState = $("projectsEmptyState");
  const status = $("projectSearchStatus");
  const recommendation = $("projectRecommendation");
  const visibleCount = $("visibleProjectCount");

  if (!grid || !emptyState || !status || !recommendation || !visibleCount) {
    return;
  }

  const visibleProjects = getFilteredProjects();
  visibleCount.textContent = String(visibleProjects.length);
  emptyState.hidden = visibleProjects.length !== 0;

  if (visibleProjects.length === 0) {
    grid.innerHTML = "";
    status.textContent = "No project cards are visible right now.";
    recommendation.textContent = "The current rules are too strict for the available projects. Try widening the search.";
    return;
  }

  const trackMessage = state.audienceFilter === "all"
    ? "Showing every project right now."
    : `Difficulty filter is set to ${formatTrack(state.audienceFilter).toLowerCase()}.`;
  recommendation.textContent = trackMessage;

  const filterLabel = state.projectFilter === "all" ? "all categories" : `${state.projectFilter} projects`;
  status.textContent = `Showing ${visibleProjects.length} project(s) from ${filterLabel}, sorted by ${formatSortLabel(state.projectSort)}.`;

  grid.innerHTML = visibleProjects.map((project) => {
    const pills = [
      `<span class="pill">${project.year}</span>`,
      `<span class="pill">${escapeHtml(project.category)}</span>`,
      `<span class="pill">${escapeHtml(project.difficulty)}</span>`
    ].join("");

    const tags = project.tags.map((tag) => `<span class="pill">${escapeHtml(tag)}</span>`).join("");
    const links = project.links
      .map((link) => {
        if (link.href.startsWith("http")) {
          return `<a class="link" href="${link.href}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)}</a>`;
        }

        return `<a class="link" href="${link.href}">${escapeHtml(link.label)}</a>`;
      })
      .join("");

    return `
      <article class="card">
        <img class="card__image" src="${project.image}" alt="${escapeHtml(project.alt)}" loading="lazy" width="1200" height="700" />
        <div class="card__body">
          <div class="meta-row">${pills}</div>
          <h3>${escapeHtml(project.title)}</h3>
          <p>${escapeHtml(project.description)}</p>
          <div class="meta-row">${tags}</div>
          <div class="card__actions">${links}</div>
        </div>
      </article>
    `;
  }).join("");
}

function initProjectControls() {
  const search = $("projectSearch");
  const audienceFilter = $("audienceFilter");
  const projectSort = $("projectSort");
  const buttons = Array.from(document.querySelectorAll(".filter-btn"));

  if (!search || !audienceFilter || !projectSort || buttons.length === 0) {
    return;
  }

  search.value = state.projectSearch;
  audienceFilter.value = state.audienceFilter;
  projectSort.value = state.projectSort;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      state.projectFilter = button.dataset.filter || "all";
      buttons.forEach((item) => item.classList.toggle("is-active", item === button));
      renderProjects();
    });
  });

  search.addEventListener("input", (event) => {
    state.projectSearch = event.target.value;
    renderProjects();
  });

  audienceFilter.addEventListener("change", (event) => {
    state.audienceFilter = event.target.value;
    renderProjects();
  });

  projectSort.addEventListener("change", (event) => {
    state.projectSort = event.target.value;
    saveState();
    renderProjects();
  });
}

function startSiteTimer() {
  const siteTimer = $("siteTimer");
  if (!siteTimer) {
    return;
  }

  const updateTimer = () => {
    const totalSeconds = Math.floor((Date.now() - state.sessionStartedAt) / 1000);
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    siteTimer.textContent = `${minutes}:${seconds}`;
  };

  updateTimer();
  window.setInterval(updateTimer, 1000);
}

function initVisitorPreferences() {
  const visitorForm = $("visitorForm");
  const clearButton = $("clearVisitorState");

  if (!visitorForm || !clearButton) {
    return;
  }

  visitorForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = $("visitorName").value.trim();
    const track = $("visitorTrack").value;

    state.visitorName = name;
    state.visitorTrack = track;
    state.audienceFilter = track;

    saveState();
    updatePersonalizedCopy();
    renderProjects();

    const message = name
      ? `Preferences saved. Welcome back, ${name}.`
      : "Preferences saved. Difficulty view updated.";
    updateVisitorMessage(message);
  });

  clearButton.addEventListener("click", () => {
    state.visitorName = "";
    state.visitorTrack = "all";
    state.audienceFilter = "all";
    saveState();
    updatePersonalizedCopy();
    renderProjects();
    updateVisitorMessage("Saved visitor preferences were cleared.");
  });
}

function formatDate(value) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(new Date(value));
}

function sortRepos(repos) {
  const copy = [...repos];

  copy.sort((first, second) => {
    if (state.repoSort === "stars") {
      return second.stars - first.stars;
    }

    if (state.repoSort === "name") {
      return first.name.localeCompare(second.name);
    }

    return new Date(second.updatedAt) - new Date(first.updatedAt);
  });

  return copy.slice(0, 6);
}

function renderGithubRepos() {
  const grid = $("githubGrid");
  const status = $("githubStatus");
  const fallback = $("githubFallback");

  if (!grid || !status || !fallback) {
    return;
  }

  fallback.hidden = true;

  if (state.githubRepos.length === 0) {
    grid.innerHTML = "";
    status.textContent = "No public repositories are available to show right now.";
    fallback.hidden = false;
    return;
  }

  const visibleRepos = sortRepos(state.githubRepos);
  status.textContent = `Loaded ${visibleRepos.length} repositories from GitHub and sorted them by ${formatSortLabel(state.repoSort)}.`;

  grid.innerHTML = visibleRepos.map((repo) => {
    const homepageLink = repo.homepage
      ? `<a class="link" href="${repo.homepage}" target="_blank" rel="noopener noreferrer">Live demo</a>`
      : "";

    return `
      <article class="card">
        <div class="card__body">
          <div class="meta-row">
            <span class="pill">${escapeHtml(repo.language || "No language set")}</span>
            <span class="pill">${repo.stars} star(s)</span>
            <span class="pill">Updated ${formatDate(repo.updatedAt)}</span>
          </div>
          <h3>${escapeHtml(repo.name)}</h3>
          <p>${escapeHtml(repo.description || "No description was provided for this repository.")}</p>
          <div class="card__actions">
            <a class="link" href="${repo.url}" target="_blank" rel="noopener noreferrer">Repository</a>
            ${homepageLink}
          </div>
        </div>
      </article>
    `;
  }).join("");
}

async function fetchGithubRepos() {
  const status = $("githubStatus");
  const fallback = $("githubFallback");
  const grid = $("githubGrid");

  if (!status || !fallback || !grid) {
    return;
  }

  status.textContent = `Loading repositories from ${GITHUB_USERNAME}...`;
  fallback.hidden = true;
  grid.innerHTML = "";

  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`, {
      headers: {
        Accept: "application/vnd.github+json"
      }
    });

    if (!response.ok) {
      throw new Error(`GitHub responded with status ${response.status}.`);
    }

    const data = await response.json();
    state.githubRepos = data
      .filter((repo) => !repo.fork)
      .map((repo) => ({
        name: repo.name,
        description: repo.description,
        language: repo.language,
        stars: repo.stargazers_count,
        updatedAt: repo.updated_at,
        url: repo.html_url,
        homepage: repo.homepage
      }));

    renderGithubRepos();
  } catch (error) {
    console.error("GitHub repositories could not be loaded.", error);
    state.githubRepos = [];
    fallback.hidden = false;
    status.textContent = "GitHub data could not be loaded right now. Please check your connection and try again.";
    grid.innerHTML = "";
  }
}

function initGithubControls() {
  const repoSort = $("repoSort");
  const refreshRepos = $("refreshRepos");

  if (!repoSort || !refreshRepos) {
    return;
  }

  repoSort.value = state.repoSort;

  repoSort.addEventListener("change", (event) => {
    state.repoSort = event.target.value;
    saveState();
    renderGithubRepos();
  });

  refreshRepos.addEventListener("click", () => {
    fetchGithubRepos();
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function setFieldError(fieldId, message) {
  const errorElement = document.querySelector(`[data-error-for="${fieldId}"]`);
  if (errorElement) {
    errorElement.textContent = message;
  }
}

function clearContactErrors() {
  ["contactName", "contactEmail", "contactTopic", "contactMessage", "contactConsent"].forEach((fieldId) => {
    setFieldError(fieldId, "");
  });
}

function initContactForm() {
  const form = $("contactForm");
  const clearButton = $("clearContactForm");
  const status = $("formStatus");

  if (!form || !clearButton || !status) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearContactErrors();

    const name = $("contactName").value.trim();
    const email = $("contactEmail").value.trim();
    const topic = $("contactTopic").value;
    const message = $("contactMessage").value.trim();
    const consent = $("contactConsent").checked;

    let valid = true;

    if (name.length < 2 || !/^[A-Za-z\s'-]+$/.test(name)) {
      setFieldError("contactName", "Enter a real name using at least 2 letters.");
      valid = false;
    }

    if (!isValidEmail(email)) {
      setFieldError("contactEmail", "Enter a valid email address.");
      valid = false;
    }

    if (!topic) {
      setFieldError("contactTopic", "Choose a message topic.");
      valid = false;
    }

    if (message.length < 20) {
      setFieldError("contactMessage", "Write at least 20 characters so the request is clear.");
      valid = false;
    } else if (topic === "project" && message.split(/\s+/).length < 6) {
      setFieldError("contactMessage", "Project requests should include a bit more detail.");
      valid = false;
    }

    if (!consent) {
      setFieldError("contactConsent", "Please confirm the form is complete.");
      valid = false;
    }

    if (!valid) {
      status.textContent = "The form still has validation errors. Please review the highlighted fields.";
      return;
    }

    const topicLabel = $("contactTopic").selectedOptions[0].textContent;
    status.textContent = `Thanks ${name}. Your ${topicLabel.toLowerCase()} message is validated and ready to send.`;
    form.reset();
  });

  clearButton.addEventListener("click", () => {
    form.reset();
    clearContactErrors();
    status.textContent = "The contact form was cleared.";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadSavedState();
  initTheme();
  initThemeToggle();
  initMobileNav();
  initRevealAnimations();
  initVisitorPreferences();
  updatePersonalizedCopy();
  initProjectControls();
  renderProjects();
  initGithubControls();
  fetchGithubRepos();
  initContactForm();
  startSiteTimer();
  setGreeting();
  setYear();
});
