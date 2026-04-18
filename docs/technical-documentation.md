# Technical Documentation

## Overview

This portfolio is a static front-end project built with HTML, CSS, and JavaScript for Assignment 3. It extends the earlier coursework by adding live API data, more advanced state handling, and richer client-side logic.

## File Responsibilities

- `index.html`
  Contains the structure for the hero, about section, project explorer, GitHub API section, documentation links, and contact form.
- `css/styles.css`
  Defines the responsive layout, theme variables, cards, controls, and interaction states.
- `js/script.js`
  Handles theme persistence, visitor preference storage, project rendering and sorting, GitHub API fetching, timer updates, navigation behavior, animations, and contact form validation.
- `docs/ai-usage-report.md`
  Describes AI tool usage and the review process.
- `projects/simple-program/bmi_calculator.py`
  Contains the Python BMI calculator from the previous assignment.

## Assignment 3 Requirement Mapping

### 1. API Integration

- The page fetches public repositories from:
  `https://api.github.com/users/ahmedAlromaih/repos?per_page=100&sort=updated`
- Only non-fork repositories are displayed.
- Users can sort the loaded repositories by:
  - recently updated
  - star count
  - repository name
- If the request fails, the site shows a user-friendly fallback message instead of leaving the section empty.

### 2. Complex Logic

The project explorer uses multiple rules at the same time:

- category filter buttons
- live text search
- difficulty filter
- sort order

The visible list is recalculated every time one of those controls changes.

The contact form also uses layered validation:

- name must be at least 2 characters
- email must match a valid pattern
- topic must be selected
- message must be at least 20 characters
- project-related requests must contain extra detail
- consent checkbox must be checked

### 3. State Management

Persistent state is stored with `localStorage`:

- theme preference
- visitor name
- preferred difficulty track
- preferred project sort
- preferred GitHub sort

When the visitor reloads the page, the stored values are restored and applied to the interface automatically.

### 4. Performance Notes

- Images are SVG placeholders, which keeps asset sizes small.
- Images use `loading="lazy"` where appropriate.
- CSS uses reusable variables and shared component classes to avoid duplication.
- Sections use `content-visibility: auto` to improve rendering efficiency on longer pages.
- The site is static and has no dependency installation or build-time overhead.

## JavaScript Feature Summary

### Theme

- `initTheme()`
- `setTheme(theme)`
- `initThemeToggle()`

### Visitor Preferences

- `loadSavedState()`
- `saveState()`
- `updatePersonalizedCopy()`
- `initVisitorPreferences()`

### Project Rendering

- `getFilteredProjects()`
- `renderProjects()`
- `initProjectControls()`

### GitHub API

- `fetchGithubRepos()`
- `renderGithubRepos()`
- `sortRepos(repos)`

### Contact Form

- `isValidEmail(email)`
- `setFieldError(fieldId, message)`
- `initContactForm()`

### Utility Behavior

- `initMobileNav()`
- `initRevealAnimations()`
- `startSiteTimer()`
- `setGreeting()`
- `setYear()`

## Browser Notes

The project targets modern browsers. If `IntersectionObserver` is unavailable, the page still functions and simply shows all reveal elements immediately.

## Known Limitations

- The contact form does not submit to a real backend service.
- GitHub API availability depends on the user having an internet connection and GitHub being reachable.
- The repository cards show public repositories only.
