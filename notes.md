# React JS Notes

React JS is a JavaScript library used to develop a **SPA (Single Page Application)**.

---

## 1. SPA vs MPA

### Single Page Application (SPA)

1. Has only one HTML page
2. Rendering time is very less
3. It continues the request (no fresh start)
4. Examples: Instagram, Gmail, LinkedIn

### Multi Page Application (MPA)

1. Has multiple HTML pages
2. Rendering time is more
3. It starts from scratch on every request
4. Examples: W3Schools, Javatpoint, etc.

---

## 2. Library vs Framework

### Library

1. A library is a collection of predefined code
2. Rules are fewer
3. Examples: React JS, Moment JS, jQuery

### Framework

1. A framework is a collection of libraries
2. Rules are more
3. Examples: Angular JS, Vue JS, Next JS

---

## 3. History of React JS

- React JS was introduced by Facebook in **2011** by **Jordan Walke**
- Facebook used it internally for 2 years
- Instagram started using it in **2012**
- It was declared open source in **May 2013**

---

## 4. Features of React JS

1. A JavaScript library
2. Component-based architecture
3. Open source
4. Used to build SPAs
5. Declarative
6. Unidirectional (one-way) data binding
7. Uses the Virtual DOM

---

## 5. Installation of a React Project

| Step | Command / Action | Purpose |
|------|------------------|---------|
| 1 | `npm create vite@latest` | Install the latest Vite way of creating a React project |
| 2 | `project-name` | Enter a project name |
| 3 | Select a framework | Select **React** (3rd option) |
| 4 | Select a variant | Select **JavaScript** (3rd option) |
| 5 | `cd projectName` | Enter the project folder |
| 6 | `npm install` | Install node modules |
| 7 | `npm run dev` | Start the development server |

---

## 6. Virtual DOM Concept

### Real DOM

The document that end users can see in the browser.

### Virtual DOM

A copy (clone) of the Real DOM.

> **NOTE:** Any updates made in a React component do not reflect directly on the Real DOM or UI. React does all the manipulation in the Virtual DOM first and then renders only those changes into the Real DOM.

### Reconciliation

The process of comparing the Virtual DOM with the Real DOM and rendering all the updated components into the Real DOM.

### Diffing Algorithm

The algorithm used to achieve the reconciliation process.

### Patching

The process of updating the missing/changed nodes in the DOM tree.

---

## 7. React Internal Libraries

### 1. React

- The core library of React
- Contains functionality to manage and maintain components, state and event handling
- `import React from 'react'`

### 2. ReactDOM

- Responsible for rendering components into the UI / DOM tree
- `import ReactDOM from 'react-dom/client'`

---

## 8. Methods

### 1. `createRoot()`

Acts as a bridge between `index.html` and `main.jsx`.

### 2. `render()`

- Renders React elements into the DOM
- Can render strings, JSX or components

---

## 9. Folder Structure

```
node_modules
public
src
package.json
package-lock.json
index.html
```

| Item | Description |
|------|-------------|
| `index.html` | Entry point of the project |
| `node_modules` | Contains all the predefined code (**do not touch**) |
| `public` | Contains all media required for the React app |
| `package.json` and `package-lock.json` | Act as the directory of the project; give information about the libraries present in the project |
| `src` | Source folder where we write the code |

Inside `src`, two important files are maintained:

1. `main.jsx` – the root file
2. `App.jsx` – the parent / top-level component

---

## 10. JSX

- JSX stands for **JavaScript XML**
- It is a combination of JavaScript and XML
- It is a template language
- JSX looks like HTML but is not HTML
- It is stricter than HTML
- It is used to create components
- React always uses components

### Rules of JSX

1. JSX must return only **one** element
   - If there is more than one element, enclose them in one parent element (along with parentheses)
   - We can also use `<Fragment></Fragment>` or `<></>`
2. Elements are case-sensitive
3. We can use JS code in JSX by using expressions `{ }`
4. Keywords common to JS and HTML are changed in JSX
   - `for` → `htmlFor`
   - `class` → `className`
5. Every element must be closed
   - Paired way: `<hr></hr>`
   - Self-closing way: `<hr />`

---

## 11. Components

- Components are the core building blocks of a React application (UI)
- A component is a block of code; we export and import it to make it reusable
- Web pages are divided into multiple components, which are joined together in the parent component (`App.jsx`)
- Components are reusable

### Rules of Components

1. Component names must start with a **capital letter**
2. Component files must be saved with the `.jsx` extension
3. Components can be represented in 2 ways
   - Paired tag: `<App></App>`
   - Self-closing tag: `<App />`

### Types of Components

1. **Class-Based Component (CBC)** – stateful component
2. **Function-Based Component (FBC)** – stateless component

> **NOTE:**
> 1. In a CBC there is a built-in property called `state`, so CBCs are called **stateful components**.
> 2. In an FBC there is no built-in `state` property, so FBCs are called **stateless components** (state can be added using hooks).

---

## 12. Props

- Props is short for *properties*
- Props are objects in React JS
- Used to share information between components
- A way of sharing data from one component to another (**parent → child**)
- Props follow a **unidirectional flow**, i.e. from parent to child
- Props are **immutable** – once data is passed from the parent, it can't be changed in the child

### Props Children

- A way of sending JSX elements from a parent component to a child component
- If we pass any children, a default key called `children` is created in props and all the JSX elements are stored in it

### Default Props

- If data has not been sent, the component uses the default data
- `defaultProps` is a React property that allows you to set default values for props

### Props Drilling

The process of sending data from one component to another, and then on to another, and so on.

---

## 13. State

- In React, state is used to hold data at the component level
- State is like a JS object
- State is **mutable** in nature
- State is present in Class-Based Components (FBCs use hooks to get it)
- State can hold two types of data:
  1. `null`
  2. `object`
- A state can be declared/defined in 2 ways:
  1. Constructor
  2. State object

---

## 14. Hooks

- Hooks are used to utilise the features of CBCs in FBCs
- Introduced in React version **16.8**
- Hooks always start with the keyword `use`

> **NOTE:** To use state in an FBC, we use the hook `useState`.

---

## 15. React CSS

CSS is used to apply colours and effects to web pages. In React, CSS can be added in multiple ways:

1. Inline CSS
2. Global CSS
3. Module CSS

### 1. Inline CSS

- Applied individually inside one particular tag using the `style` attribute
- CSS properties are written inside an expression in the form of an **object**

### 2. Global CSS

- One CSS file is maintained for the entire React project
- It targets all the components
- Create a separate file inside `src` with the `.css` extension and write all the styles in it

### 3. Module CSS

- A separate CSS file is created for each component
- The styles required for a particular component are written in its respective CSS file
- The file must have the `.module.css` extension, e.g. `filename.module.css`

---

## 16. Refs

- Refs are references
- Refs are an inbuilt object in React JS
- By default a ref contains the key-value pair `{ current: undefined }`
- Used to target JSX elements in React JS
- Refs always use the **Real DOM**
- In CBC we use `createRef`
- In FBC we use `useRef`
- Do not overuse refs

### Practical Usage of Refs

- Form handling
- Animations
- Media tags

---

## 17. Forms

- Forms are used to collect user information
- There are 2 types of forms:
  1. Controlled forms
  2. Uncontrolled forms
- Both types can be built in CBC and FBC

### 1. Controlled Forms

Forms developed using `onChange()` and **state**.

### 2. Uncontrolled Forms

Forms developed using **refs**.

---

## 18. Context API

- Props drilling is the process of sending data from one component to another, then another, and so on
- What if we have thousands of components?
- To solve this problem, the **Context API** came into the picture
- It sends data directly, without the help of intermediate components

### Steps

1. Create the context – `createContext()`
2. Provider
3. Consumer / `useContext()` hook

**Step 1:**
- Import `createContext` from React
- Use the `createContext()` method; it returns a context object that can be used to provide and consume values

**Step 2:**
- Use the `<ContextName.Provider></ContextName.Provider>` component
- Wrap all the child components to which you want to send the data
- Data is passed through the `value` prop
- The data can now be consumed by the wrapped components and their children, grandchildren, and so on

**Step 3:**
- Use the `useContext()` hook to directly consume the value

---

## 19. Higher Order Component (HOC)

- A HOC is a component (function) that receives another component as an argument and returns a new component
- It is an alternative for props drilling
- The HOC returns a function, in which we specify what to render in the UI using the `return` keyword

---

## 20. `useEffect()` Hook

- Used to control **side effects** in React components
- Side effects can be fetching data, directly updating something in the DOM, or timers
- `useEffect` accepts two arguments:
  1. Function
  2. Dependency array
- React keeps track of the variables present in the dependency array; if any of them change, it invokes the function

---

## 21. Axios

- Axios lets us communicate with the server
- It supports HTTP requests:

| Method | Purpose |
|--------|---------|
| `GET` | Get / fetch data from the server |
| `POST` | Send / create data |
| `PUT` / `PATCH` | Modify data |
| `DELETE` | Remove data |

- Axios always returns a **promise**

---

## 22. Routing

- Routing is the process of navigating between components through the URL, without a full page reload
- It is used to create SPAs

### Why Routing?

- React helps us design SPAs, so we have only one web page
- A React app consists of multiple components with different information
- To navigate between these components, we use **react-router**

### How to Use

1. Install the routing library:
   ```bash
   npm install react-router-dom@latest
   ```
2. Import the necessary components from the library, such as `BrowserRouter`, `Routes`, `Route`, `Link` and `NavLink`, and use them in the React components to define routes.

### Routing Components

| Component | Description |
|-----------|-------------|
| `BrowserRouter` | Parent component that wraps the entire application and enables navigation using URLs |
| `Routes` | Container for multiple `Route` components; displays the component that matches the current URL |
| `Route` | Maps a URL path to a specific component |
| `Link` | Used for navigation; changes the URL without reloading the page |
| `NavLink` | Used for navigation; can automatically identify the active route, useful for menus and navbars |

### Important Routing Hooks

1. **`useNavigate()`** – used to navigate to another page after performing an action such as login, registration, form submission or a button click
2. **`useLocation()`** – used to access details of the current route such as `pathname`, `state` and search parameters

---

**THANK YOU**

*Prajwal C*