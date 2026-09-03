# 🎂 Age Calculator

A simple, responsive, and beginner-friendly **Age Calculator Web Application** built using **HTML5, CSS3, and Vanilla JavaScript**.

The application allows users to select their date of birth and calculate their age instantly with a clean and responsive user interface.

## 🔗 Live Demo

🚀 **Try the Age Calculator:**
https://age-calculater-nine.vercel.app/

---

## 📌 About The Project

**Age Calculator** is a frontend practice project created to strengthen the fundamentals of **HTML, CSS, and JavaScript**.

The main purpose of this project is to understand how JavaScript can interact with HTML elements, take user input, process dates, perform calculations, and dynamically display results on a webpage.

The project has a simple user flow:

```text
Select Date of Birth
        ↓
Click Calculate Age
        ↓
JavaScript Processes the Date
        ↓
Age is Calculated
        ↓
Result is Displayed
```

---

# ✨ Features

* 📅 Select Date of Birth using a date picker
* 🧮 Calculate age dynamically
* ⚡ Instant result without refreshing the page
* 🚨 Input validation for empty date
* 🎨 Clean and minimal user interface
* 📱 Responsive design for mobile devices
* 💻 Desktop and tablet friendly
* 🖱️ Interactive button hover and focus states
* 📦 Lightweight frontend application
* 🚀 Deployed using Vercel

---

# 🛠️ Technologies Used

## HTML5

HTML is used to create the basic structure of the application.

### HTML concepts used:

* `<!DOCTYPE html>`
* Semantic page structure
* `<div>`
* `<label>`
* `<input>`
* `<button>`
* `<script>`
* `<link>`
* `id` and `class` attributes
* Date input using:

```html
<input type="date">
```

---

## CSS3

CSS is used to design and make the application responsive.

### CSS concepts used:

* CSS Reset
* Box Model
* Flexbox
* Responsive Design
* Media Queries
* `min-height`
* `width`
* `max-width`
* Padding & Margin
* Border & Border Radius
* Box Shadow
* Font Styling
* Hover States
* Focus-visible States
* Responsive Units
* CSS `min()` function

Example:

```css
display: flex;
justify-content: center;
align-items: center;
```

The project also uses a responsive media query:

```css
@media (max-width: 480px) {
    ...
}
```

---

## JavaScript

JavaScript provides the functionality and logic of the application.

### JavaScript concepts used:

* Variables
* `const`
* DOM Manipulation
* `document.querySelector()`
* Event Listeners
* Arrow Functions
* Conditional Statements
* `if / else`
* User Input Handling
* JavaScript `Date` Object
* `new Date()`
* `getFullYear()`
* Template Literals
* `innerHTML`

Example:

```javascript
const inputbtn = document.querySelector(".age-dob-input");
const calculatebtn = document.querySelector(".calculate-btn");
const ageresult = document.querySelector(".age-result");
```

---

# 🧠 How JavaScript Works

When the user clicks the **Calculate Age** button, JavaScript performs the following steps.

### 1. Get the Date Input

JavaScript first gets the selected date from the input field.

```javascript
inputbtn.value
```

### 2. Check User Input

The application checks whether the user has selected a date.

```javascript
if (inputbtn.value == "") {
    alert("Pls Enter Your Date Of Birth");
}
```

If no date is selected, an alert message is displayed.

### 3. Create a Date Object

The selected date is converted into a JavaScript Date object.

```javascript
const dob = new Date(inputbtn.value);
```

### 4. Get Birth Year

The birth year is extracted using:

```javascript
const dob_year = dob.getFullYear();
```

### 5. Get Current Year

A new Date object is created to get the current year.

```javascript
const now = new Date();
const now_year = now.getFullYear();
```

### 6. Calculate Age

The application calculates the age using:

```text
Current Year - Birth Year
```

In JavaScript:

```javascript
const age = now_year - dob_year;
```

### 7. Display the Result

Finally, the calculated age is displayed dynamically on the webpage.

```javascript
ageresult.innerHTML = `Your Age is: ${age}`;
```

---

# 🎨 User Interface

The UI is intentionally kept simple and easy to understand.

### Main Components

```text
┌──────────────────────────────┐
│        Age Calculator        │
│                              │
│ Select your Birth date:      │
│ [      Date Picker      ]     │
│                              │
│ [    Calculate Age     ]     │
│                              │
│ Your Age Is: 22              │
└──────────────────────────────┘
```

### Design Elements

* Centered calculator card
* Soft background color
* Rounded container
* Box shadow
* Clean typography
* Black action button
* Responsive input field
* Mobile-friendly layout

---

# 📱 Responsive Design

The application is responsive and adjusts according to the user's screen size.

### Desktop

* Centered calculator container
* Maximum width of 500px
* Comfortable spacing
* Large and readable typography

### Mobile

For screens smaller than `480px`:

* Container padding is reduced
* Heading size is reduced
* Input takes full available width
* Button takes full available width
* Layout remains centered and readable

---

# 📂 Project Structure

```text
Age-Calculator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contains the structure of the Age Calculator.

### `style.css`

Contains all styling and responsive design rules.

### `script.js`

Contains the age calculation logic and DOM interaction.

### `README.md`

Contains project documentation.

---

# 🚀 Getting Started

Follow the steps below to run the project on your local machine.

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/age-calculator.git
```

## 2. Open the Project

```bash
cd age-calculator
```

## 3. Run the Project

Open `index.html` directly in your browser.

Or, if you are using **VS Code**, you can run the project using the **Live Server** extension.

---

# 📊 Current Calculation Logic

The current version calculates age using:

```text
Age = Current Year - Birth Year
```

### Example

If:

```text
Birth Year = 2004
Current Year = 2026
```

Then:

```text
Age = 2026 - 2004
Age = 22
```

> **Note:** The current implementation calculates age based on the year difference only. It does not yet check whether the user's birthday has already occurred in the current year.

---

# 🔮 Future Improvements

Some features that can be added in future versions:

* 🎯 Exact age calculation in years, months, and days
* 🎂 Next birthday countdown
* 📆 Display upcoming birthday
* 🔄 Reset button
* ❌ Better inline error messages
* 🌙 Dark mode
* ✨ Smooth animations
* 🎨 Improved UI/UX
* ♿ Better accessibility
* 🧪 Additional input validation
* 🌍 Better date and timezone handling

---

# 📚 What I Learned

Through this project, I practiced and improved my understanding of:

### HTML

* Creating webpage structure
* Form inputs
* Labels and buttons
* Linking external CSS and JavaScript

### CSS

* Flexbox
* Responsive layouts
* Media queries
* Box model
* Styling form elements
* Hover and focus states

### JavaScript

* DOM selection
* Event listeners
* Arrow functions
* Conditional statements
* User input
* Date objects
* Date methods
* Basic calculations
* Dynamic HTML updates
* Template literals

---

# 🎯 Project Goal

The goal of this project was to practice the fundamentals of **Frontend Web Development** and understand how different technologies work together.

```text
HTML
 ↓
Creates the Structure

CSS
 ↓
Creates the Design

JavaScript
 ↓
Adds Logic & Interactivity
```

Together:

```text
HTML + CSS + JavaScript
           ↓
     Interactive Website
```

---

# 🚀 Deployment

This project is deployed using **Vercel**.

### Live Application

https://age-calculater-nine.vercel.app/

---

# 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

If you would like to contribute:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Commit your changes
5. Push your branch
6. Create a Pull Request

Example:

```bash
git checkout -b feature/new-feature

git add .

git commit -m "Add new feature"

git push origin feature/new-feature
```

---

# 📄 License

This project is open-source and available under the **MIT License**.

---

# 👨‍💻 Author

## Niloy Goswami

Frontend Developer | JavaScript Learner

### 🌐 Live Project

https://age-calculater-nine.vercel.app/

### 💻 GitHub

https://github.com/Niloy2004

---

# ⭐ Support

If you found this project useful, please consider giving the repository a ⭐.

It helps support the project and motivates me to build more projects.

---

<div align="center">

### 🎂 Age Calculator

**Built with HTML5 • CSS3 • Vanilla JavaScript**

Made with ❤️ by **Niloy Goswami**

</div>
