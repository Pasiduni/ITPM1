# ITPM1
 🔹 STEP 1: Install Prerequisite – Node.js
 1.1 Check if Node.js is already installed
1. Open **Command Prompt**

   * Press **Windows key** → type `cmd` → press **Enter**
2. Type:

```bash
node -v
```
If you see a version (v18 / v20) → Node.js is installed → go to Step 2
If you see an error → continue to Step 1.2
---

 1.2 Install Node.js (LTS)

1. Go to: **[https://nodejs.org](https://nodejs.org)**
2. Click **LTS (Recommended)**
   ⚠️ Do NOT click “Current”
3. Download the `.msi` file
4. Double-click and install

   * Click **Next → Next → Finish**
   * Keep **all default settings**
---

 1.3 Verify Node.js and npm

1. Close Command Prompt
2. Open it again
3. Type:

```bash
node -v
npm -v
```

✅ If both show version numbers → Node.js & npm are ready

---

 🔹 STEP 2: Open Project Folder

1. Open **VS Code** or **Command Prompt**
2. Navigate to your Playwright project folder:

```bash
cd path/to/your/project
```

⚠️ This folder must contain `package.json`

---

 🔹 STEP 3: Install Project Dependencies

1. Install all required dependencies:

```bash
npm install
```

2. Install Playwright browsers:

```bash
npx playwright install
```

✅ Dependencies and browsers are now installed

---

🔹 STEP 4: Run Playwright Tests

4.1 Run all tests

```bash
npx playwright test
```

* Runs all `.spec.js` files
* Results shown in terminal

---

 4.2 Run a specific test file (optional)

```bash
npx playwright test tests/example.spec.js
```

---

 🔹 STEP 5: View Test Report

After tests finish:

```bash
npx playwright show-report
```

* Opens an HTML report in browser
* Shows passed / failed test cases

---
  🔹 Step 6: Optional Commands

* To run tests in **headed mode** (so you see the browser):

```bash
npx playwright test --headed
```

* To run tests with **debugging**:

```bash
npx playwright test --debug
```

 ✅ END RESULT

✔ Node.js installed
✔ Dependencies installed
✔ Playwright browsers installed
✔ Tests executed successfully
✔ Report generated

---







