# 🎭 MultipleCasesFlow CI/CD – Playwright + TypeScript

This repository is a Playwright + TypeScript automation framework that covers multiple end-to-end flows for the LetCode demo application. It is structured for maintainable test development and easy integration with CI/CD pipelines (e.g. GitHub Actions).

## ✨ Features

- 🤖 Multiple E2E scenarios automated using Playwright Test
- 📦 Page Object Model (POM) design for reusable and maintainable code
- 🔐 Auth state saved in `auth.json` to skip repetitive logins
- 📊 JSON-based test data in the `data` folder
- ⚙️ CI/CD-ready structure with `.github` workflows support
- 📈 HTML and JSON reports generated under `test-results` and `report.json`

## 🛠️ Tech Stack

- 🟢 Node.js (CommonJS)
- 📘 TypeScript `5.9.3`
- 🎭 Playwright `1.57.0`
- ✅ @playwright/test `1.57.0`

## 📁 Project Structure

- `.github/` – 🔄 GitHub Actions workflows for CI/CD (running tests on push/PR)
- `pages/` – 📄 Page Object Model classes for LetCode pages and flows
- `test/` – 🧪 Test specs covering different business flows and combinations
- `data/` – 💾 Test data files used across multiple cases
- `auth.json` – 🔑 Stored authentication state for logged-in sessions
- `playwright.config.ts` – ⚙️ Global Playwright configuration (base URL, projects, reporters, etc.)
- `test-results/` – 📊 Playwright HTML and trace results (auto-generated)
- `report.json` – 📋 Example JSON report generated from a test run
- `package.json` / `package-lock.json` – 📦 NPM scripts and dependencies

## 📋 Prerequisites

- 🟢 Node.js LTS (recommended: 18 or later)
- 🔧 Git
- 🌐 Internet access for Playwright to download browser binaries
