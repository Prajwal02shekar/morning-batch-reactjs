# React JS Notes

React JS is a JS library which is used to develop a SPA.

---

## 1. SPA vs MPA

### Single Page Application (SPA)
1. Having only one HTML page
2. Rendering time is very less
3. It will continue the request
4. Example: Instagram, Gmail, LinkedIn

### Multi Page Application (MPA)
1. Having multiple HTML pages
2. Rendering time is more
3. It will start from scratch
4. Example: W3Schools, Javatpoint, etc.

---

## 2. Library vs Framework

### Library
1. Library is a collection of predefined codes.
2. Rules are less
3. Examples: React JS, Moment JS, jQuery

### Framework
1. Framework is a collection of libraries
2. Rules are more
3. Examples: Angular JS, Vue JS, Next JS

---

## 3. History of React JS

- React JS was introduced by Facebook in 2011 by Jordan Walke
- React JS has been used by Facebook for 2 years
- React JS has been used by Instagram since 2012
- They declared React JS open source in May 2013

---

## 4. Features of React JS

1. React JS is a JS library
2. Component Based Architecture
3. Open Source
4. It is used to build SPA
5. Declarative
6. Unidirectional / one-way data binding
7. It follows Virtual DOM

---

## 5. Installation of a React Project

1. `npm create vite@latest` — to install the latest version of Vite way of React project
2. **project-name** — enter a project name
3. **Select a framework** — select REACT (3rd option)
4. **Select a variant** — select JAVASCRIPT (3rd option)
5. `cd projectName` — enter into the particular project
6. `npm install` — to install node modules
7. `npm run dev` — to start the development server

---

## 6. Virtual DOM Concept

### Real DOM
Real DOM is the document that end users can see.

### Virtual DOM
Virtual DOM is a copy of the Real DOM; it can also be called a clone copy of the Real DOM.

> **NOTE:** Whatever updates you do in a React component will not reflect on the Real DOM / UI directly. It does all the manipulation in the Virtual DOM itself and then renders those changes into the Real DOM.

### Reconciliation
The process of the Virtual DOM comparing with the Real DOM and rendering all updated components into the Real DOM is called **reconciliation**.

### Diffing Algorithm
To achieve the reconciliation process, we use an algorithm called the **diffing algorithm**.

### Patching
The process of updating a missing node in the DOM tree is called **patching**.

---

## 7. React Internal Libraries

### 1. React
- It is the core library of React
- It contains functionalities to manage and maintain components, states, and handling events

```js
import React from 'react';
```

### 2. ReactDOM
- It is responsible for rendering the components into the UI / DOM tree

```js
import ReactDOM from 'react-dom/client';
```

---

## 8. Methods

### 1. createRoot()
Acts as a bridge connector between `index.html` and `main.jsx` files.

### 2. render()
Used to render all React elements into the DOM. It will render only strings / JSX / components.

```js
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

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

- **index.html** — entry point to the project
- **node_modules** — all pre-defined code is present in this folder (***do not touch***)
- **public** — contains all media required for the React app
- **package.json and package-lock.json** — two files considered as directories of the React folder; give information about libraries present in the project
- **src** — the source folder where we write the code. Inside `src`, we maintain two important files:
  1. `main.jsx` — the root file
  2. `App.jsx` — the parent / top-level component

---

## 10. JSX

- JSX stands for JavaScript XML.
- It is a combination of JavaScript and XML.
- It is a template language.
- JSX looks like HTML but is not HTML.
- It is more strict than HTML.
- It is used to create components.
- React always uses components.

### Rules of JSX

1. JSX always returns only one element.
   - If we have more than one element, we have to enclose them in one parent element/parenthesis.
   - We can also use `<Fragment></Fragment>` or `<></>`
2. Elements are case sensitive
3. We can use JS code in JSX by using expressions `{ }`
4. Common keywords in JS and HTML change in JSX:
   - `for` → `htmlFor`
   - `class` → `className`
5. Every element should be closed:
   - Paired way: `<hr></hr>`
   - Self-closing way: `<hr/>`

---

## 11. Components

Components are the core building blocks of a React application (UI). Components are nothing but blocks of code — we export and import them to make them reusable. Web pages are divided into multiple components, which are then joined together in the parent component (`App.jsx`). Components are reusable.

### Rules of Components

1. Component names should start with a capital letter only.
2. Component files should be saved with a `.jsx` extension.
3. Components can be represented in 2 ways:
   - Paired tag: `<App></App>`
   - Self-closing tag: `<App/>`

### Types of Components

1. **Class Based Component (CBC)** — stateful component
2. **Function Based Component (FBC)** — stateless component

> **NOTE:**
> - In a CBC, there is a built-in property called `state` — so CBCs are called **stateful components**.
> - In an FBC, there is no such built-in `state` property — so FBCs are called **stateless components**.

---

## 12. Props

- Short for "properties"
- Props are objects in React JS
- Used to share information between components
- A way of sharing data from one component to another (parent → child)
- Props follow a **unidirectional flow** — from parent component to child component
- Props are **immutable** — once data is passed from a parent component, it can't be changed in the child component

### Props Children
A way of sending JSX elements from a parent component to a child component. If any children are passed, a default key called `children` is created, and all JSX elements are stored in it.

### Default Props
If data has not been sent, the component will consider default data instead. `defaultProps` is a React property that allows you to set default values for props.

### Props Drilling
The process of sending data from one component to another component, and so on down the tree.

---

## 13. States

- States are used to hold and store data at the component level.
- States are like JS objects.
- States are **mutable** in nature.
- States are present only in Class Based Components.
- States can hold two types of data:
  1. `null`
  2. object
- A state can be declared/defined in 2 ways:
  1. Constructor
  2. State object

---

## 14. Hooks

- Hooks are used to utilize the features of a CBC in an FBC.
- Hooks were introduced in React version 16.8.
- Hook names always start with the keyword `use`.

> **NOTE:** To utilize state in a Function Based Component, we use the hook `useState`.