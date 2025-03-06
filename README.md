# 🤖 Bot to Fill Forms with Puppeteer Extra Stealth

[![GitHub Repo stars](https://img.shields.io/github/stars/abhinavrajdevx/bot-to-fill-forms-puppeteer-extra-stealth?style=social)](https://github.com/abhinavrajdevx/bot-to-fill-forms-puppeteer-extra-stealth/stargazers)
[![GitHub Issues](https://img.shields.io/github/issues/abhinavrajdevx/bot-to-fill-forms-puppeteer-extra-stealth)](https://github.com/abhinavrajdevx/bot-to-fill-forms-puppeteer-extra-stealth/issues)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)


This repository demonstrates how to create a bot using Puppeteer Extra with the Stealth plugin to automatically fill out web forms. It specifically targets a simple credit card form, showcasing how to bypass anti-bot detection and automate form submissions.

## 🚀 Features

-   **Automation:** Automates the process of filling out web forms.
-   **Stealth Mode:** Uses `puppeteer-extra-plugin-stealth` to evade anti-bot detection.
-   **Easy to Use:** Simple and straightforward code for quick implementation.
-   **TypeScript:** Written in TypeScript for better code maintainability and type safety.
-   **Puppeteer Extra:** Leverages Puppeteer Extra for enhanced functionality.

## 🛠️ Prerequisites

-   Node.js (>= 18)
-   npm or yarn

## 📦 Installation

1.  Clone the repository:

    ```bash
    git clone [https://github.com/abhinavrajdevx/bot-to-fill-forms-puppeteer-extra-stealth.git](https://www.google.com/search?q=https://github.com/abhinavrajdevx/bot-to-fill-forms-puppeteer-extra-stealth.git)
    cd bot-to-fill-forms-puppeteer-extra-stealth
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

## ⚙️ Usage

1.  Compile the TypeScript code:

    ```bash
    npm run dev
    ```

    This command compiles the `index.ts` file to `dist/index.js` and then executes it.

2.  The script will launch a headless browser (you can change `headless: false` in `index.ts` to see the browser) and navigate to the specified form URL (`https://fill.dev/form/credit-card-simple`).

3.  It will then automatically fill in the form fields with the provided data and click the submit button.

## 📝 Notes
-  Replace the form URL and selectors with your target website's information.
-  Adjust the data filled in the form to match your requirements.
-  For more complex forms, you may need to add additional logic to handle different input types and form elements.
-  Be mindful of the website's terms of service and avoid using this bot for malicious purposes.

## 🤝 Contributing
- Contributions are welcome! Feel free to submit a pull request or open an issue for any bugs or feature requests.
