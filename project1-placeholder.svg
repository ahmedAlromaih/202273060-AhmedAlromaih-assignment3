# Technical Documentation

## Overview

This portfolio website is built with HTML, CSS, and JavaScript. It extends Assignment 1 by adding more interactive behavior and clearer user feedback for Assignment 2.

## Main Features

### Dynamic Content
- Project cards can be filtered by category using buttons.
- Project cards can be searched live while typing in the search field.
- The greeting changes depending on the time of day.

### Data Handling
- The selected theme is saved using `localStorage`.
- The contact form validates user input on the client side.
- The form provides a success message or validation errors depending on input.

### Animation and Transitions
- Buttons and links include hover effects.
- Sections fade and slide into view using reveal animations.
- Form feedback changes visually for success and error states.

### Error Handling and Feedback
- Invalid name, email, and message inputs show clear inline errors.
- If no project matches the current filter/search, the page shows:
  `No projects found. Try a different search or filter.`

## File Responsibilities

- `index.html`
  Contains the page structure and content.
- `css/styles.css`
  Contains styling, responsive layout rules, and transition effects.
- `js/script.js`
  Contains theme logic, mobile navigation, project filter/search logic, reveal animation logic, and form validation.

## JavaScript Modules

### Theme
- `setTheme(theme)`
- `initTheme()`
- `initThemeToggle()`

### Navigation
- `initMobileNav()`

### Dynamic Projects
- `initProjectFilters()`

### Animations
- `initRevealAnimations()`

### Form Handling
- `isValidEmail(email)`
- `showError(fieldId, message)`
- `initContactForm()`

## Browser Support

The project is designed for modern browsers. If `IntersectionObserver` is not supported, reveal elements still appear normally as a fallback.
