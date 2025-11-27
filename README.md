# Cypress Test Project - eTeacher Group 

This project contains tests written in **JavaScript** using **Cypress** for the functionalities of Registration, Login and a simple smoke check for the Next button.

---

## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** 
- **npm** (comes with Node.js)  
- **Cypress** (installed via npm)

---

## 1. Install Project Dependencies

Clone the repository and install the required packages:

git clone <your-repo-url>
cd <project-folder>
npm install

This will install Cypress and all dependencies defined in package.json.

## 2. Install Project Dependencies

You can use Live Server, a VS Code extension, to serve your HTML pages locally. This is especially useful for Cypress tests on a local URL.

**2.1 Install Live Server in VS Code**

- Open Visual Studio Code.
- Go to the Extensions panel (shortcut: Ctrl+Shift+X).
- Search for Live Server (by Ritwick Dey).
- Click Install.

**2.2 Open Your Project HTML**

- Open the folder containing your HTML files in VS Code.
- Right-click the HTML file you want to serve → Open with Live Server.
- A new browser window will open with a URL like: http://127.0.0.1:5500/index.html

## 2. Open Cypress Test Runner

- Run: npx cypress open

This opens the Cypress app where you can select and run individual spec files interactively.

- You can choose Electron or any browser installed on your machine.
- To run all test cases in headless mode (without opening the UI): npx cypress run
