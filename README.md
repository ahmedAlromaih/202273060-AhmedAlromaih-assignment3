# 202273060-AhmedAlromaih-assignment3

Assignment 3 portfolio website for SWE363. The project extends the earlier portfolio work with live GitHub API data, richer project filtering and sorting logic, persistent visitor preferences, a stronger contact form, and updated documentation.

## Project Description

This is a static portfolio website built with HTML, CSS, and JavaScript. It highlights Ahmed Alromaih's academic work and demonstrates:

- External API integration with the GitHub REST API
- Complex JavaScript logic for filtering, sorting, personalization, and validation
- State management using `localStorage`
- Responsive design and simple performance-minded front-end practices

## Folder Structure

```text
202273060-AhmedAlromaih-assignment3/
|-- README.md
|-- index.html
|-- css/
|   `-- styles.css
|-- js/
|   `-- script.js
|-- assets/
|   `-- images/
|-- docs/
|   |-- ai-usage-report.md
|   `-- technical-documentation.md
|-- projects/
|   `-- simple-program/
|       |-- README.md
|       `-- bmi_calculator.py
`-- .gitignore
```

## Features

- Live GitHub repository cards fetched from `https://api.github.com/users/ahmedAlromaih/repos`
- User-friendly loading and error handling for API requests
- Project explorer with category filters, search, difficulty rules, and sorting
- Visitor preference form that stores a name and preferred difficulty in `localStorage`
- Light and dark theme toggle remembered across visits
- Session timer that tracks how long a visitor has stayed on the page
- Contact form with multi-step validation and clear inline feedback

## How To Run Locally

1. Clone the repository.
2. Open the project folder.
3. Launch `index.html` in a browser.

No build step or package installation is required.

## AI Usage Summary

AI was used for planning features, debugging broken file organization, improving validation logic, and drafting technical documentation. A detailed explanation is available in [docs/ai-usage-report.md](docs/ai-usage-report.md).

## Documentation

- Technical notes: [docs/technical-documentation.md](docs/technical-documentation.md)
- AI report: [docs/ai-usage-report.md](docs/ai-usage-report.md)

## Optional Deployment

This project can be deployed easily with GitHub Pages, Netlify, or Vercel.
