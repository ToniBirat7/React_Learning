# How React Actually Works?

- React is a JavaScript library that is used to build user interfaces. It is not a framework. It is not a complete solution and you will often need to use more libraries with it to form a complete solution.
- React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.

To understand how React works, I have divided the whole process into two parts:

## **Part One**

**Things we need to Know before we dive to understand the working of ReactJs**

We need to know that Browser can only understand `HTML`, `CSS` and `JavaScript`. Here, JavaScript refers to `Vanilla JavaScript` or ES5 JavaScript. Which means that browser can't understand `JSX` therefore, we've to use `transiplers` like (`Babel`) and `bundlers` like (`Webpack` or `Vite`) to convert `JSX` into `JavaScript` that browser can understand.

**Let's take an Example to Understand better**

Suppose we have a simple `HTML` file that contains a `div` element with an `id` of `root`. We want to render a `h1` with its inner text `Hello, React!` element inside this `div` element using `React`.

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <script
          src="https://unpkg.com/react@17/umd/react.development.js"
          crossorigin
>  </script>
  <script
          src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
          crossorigin
>  </script>
  <title>React ⚛️</title>
</head>
<body>
<div id="root"></div>
<script>
  ReactDOM.render(
          React.createElement(
                  'h1',
                  null,
                  'Hello, React!'
          ),
          document.getElementById('root')
  );
</script>
</body>
</html>
```

If we open this `HTML` file in the browser, we will see the `h1` element with the text `Hello, React!` rendered inside the `div` element with the `id` of `root`.

It is because we are using `React.createElement()` method to create a `h1` element ,and then we are rendering it inside the `div` element with the `id` of `root` using `ReactDOM.render()` method.

Here, we need to understand that `React.createElement()` method is a plain JavaScript function. This function is made available through JavaScript library as we're loading the library in the `head` section of the `HTML` file. One more thing to note here is that both `React` and `ReactDOM` are global objects that are available in the browser.

**But how are these global objects available in the browser?**

It is because we are loading the `React` and `ReactDOM` libraries in the `head` section of the `HTML` file.

To understand the above sentence we've to understand how browser works while executing the `HTML` file.

**What happens when the browser loads the HTML file?**

When the browser loads the `HTML` file, it starts parsing the `HTML` file from top to bottom.

As soon as it encounters a `script` tag it does the following things:

- The browser makes an `HTTP request` to download the resource specified in the `src` attribute of the `script` tag. In this case, first the browser makes an HTTP request to download the `React` library i.e. [`https://unpkg.com/react@17/umd/react.development.js`]() and then it makes another `HTTP request` to download the `ReactDOM` library i.e. [`https://unpkg.com/react-dom@17/umd/react-dom.development.js`]().

- The browser blocks the further rendering of the `HTML` file until the library or script is fully downloaded.

- Once the library or script is downloaded, the browser immediately executes the library or script. The code in these scripts defines global objects like `React` and `ReactDOM` that are made available in the browser for further use.

### **But what do these Library contain?**

**React Library**:

- The `React` library contains the `React` object that includes functionality to create Components using `useState`, `useEffect`, etc and create elements using `React.createElement()` method.

- The `ReactDOM` library contains the `ReactDOM` object that includes functionality to render the Components created using the `React` library.

- This means that the browser will not render the `HTML` file further until the `React` library is downloaded and executed. Similarly, the browser will not render the `HTML` file further until the `ReactDOM` library is downloaded and executed.

**ReactDOM Library**:

- The `ReactDOM` library contains the `ReactDOM` object that includes functionality for connecting React components to the DOM. It includes the `ReactDOM.render()` method that is used to render React components to the DOM.

Till now, we have understood how the browser loads the `React` and `ReactDOM` libraries.

**How Are They Accessible in the Browser?**

The `React` and `ReactDOM` libraries are made available in the browser's `window` as global objects. This means that we can access the `React` and `ReactDOM` objects in the browser without importing them in our JavaScript code.

We can console the `React` and `ReactDOM` objects in the browser's console to see what they contain.

```javascript
console.log(React);
console.log(ReactDOM);
```

One thing to note is that both the `React` and `ReactDOM` are enclosed within an IIFE(Immediately Invoked Function Expression) in the library files. The IIFE creates the necessary objects and attaches them to the global `window` object.

**But We Have A Problem Here**

If the browser downloads the `React` and `ReactDOM` libraries every time the `HTML` file is loaded, it will slow down the loading of the page. This is because the browser has to make an `HTTP request` to download the libraries every time the `HTML` file is loaded.

To solve this problem, we can use a `bundler` like `Webpack` or `Vite` to bundle the `React` and `ReactDOM` libraries with our JavaScript code. This way, the browser will download the bundled JavaScript file that contains the `React` and `ReactDOM` libraries along with our JavaScript code. This will reduce the number of `HTTP requests` made by the browser and speed up the loading of the page.

But, if `bundler` is not used, then in such cases Modern browsers can cache the libraries and scripts that are downloaded. This means that the browser will not download the libraries and scripts again if they are already cached. This will speed up the loading of the page.

## **Part Two**

I hope you have understood how the browser loads the `React` and `ReactDOM` libraries and how they are made available in the browser when we are not using `JSX`.

Here, we've to note one thing that we've not used JSX in the above code. We've used `React.createElement()` method to create the `h1` element. Due to this, we've not used any `transpiler` like `Babel` to convert the `JSX` into `JavaScript` that browser can understand.

### **But what happens when we use `JSX` in our React code?**

Let's modify the above code to use `JSX` instead of `React.createElement()` method to create the `h1` element.

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <script
            src="https://unpkg.com/react@17/umd/react.development.js"
            crossorigin
    ></script>
    <script
            src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
            crossorigin
    ></script>
    <title>React ⚛️</title>
</head>
<body>
<div id="root"></div>
<script>
    const App = () => {
        return <h1>Hello, React!</h1>;
    };

    ReactDOM.render(
            <App />,
            document.getElementById('root')
    );
</script>
</body>
</html>
```

Before, we proceed further let's understand what is `JSX`?

### **What is JSX?**

`JSX` (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It looks similar to XML or HTML. `JSX` is not a separate language, but a syntax extension for JavaScript. It is used with `React` to describe what the UI should look like.

At its core, `JSX` is just syntactic sugar for `React.createElement()` method.

When you write `JSX` code, it is converted into `React.createElement()` method calls by a `transpiler` like `Babel`. This is because browsers don’t understand `JSX`.

In the above code, we are using `JSX` to create the `h1` element. The `JSX` used in our code is shown below:

```javascript
const App = () => {
  return <h1>Hello, React!</h1>;
};
```

### **Features of JSX**

- **Embedding Expressions**: You can embed JavaScript expressions inside `JSX` using curly braces `{}`.

**Example :**

```html
const name = "React"; const element =
<h1>Hello, {name}!</h1>
;
```

- **Attributes**: You can pass attributes to `JSX` elements just like you do in HTML.

**Example :**

```html
const element = <img src="image.png" alt="An image" className="img-class" />;
```

- **Inline Style** : You can use inline styles in `JSX` using an object.

**Example :**

```html
const style = { color: "blue", fontSize: "20px", }; const element =
<h1 style="{style}">Styled Text</h1>
;
```

If we open this `HTML` file in the browser, we will not see the `h1` element with the text `Hello, React!` inside the `div` element with the `id` of `root`. This is because the browser does not understand `JSX`.

If we open the browser's console, we will see an error like `Uncaught SyntaxError: Unexpected token '<'`. This is because the browser does not understand `JSX` and throws an error when it encounters the `<` symbol.

To solve this problem, we need to use a `transpiler` like `Babel` to convert the `JSX` code into `JavaScript` that the browser can understand. We want our `JSX` code to be converted into the following `JavaScript` code:

```javascript
const App = () => {
  return React.createElement("h1", null, "Hello, React!");
};
```

### **What is a Transpiler?**

A `transpiler` is a tool that converts the source code of a program written in one programming language into the source code of an equivalent program written in another programming language.

For React Development, **_Babel_** is a popular `transpiler` that is used to convert `JSX` code into `JavaScript` that the browser can understand.

### **How does Transpiler Work?**

When we talk about `transpilers` in the context of `React` and `JSX`, we are referring to `Babel`. Babel is responsible for transforming `JSX` syntax into valid `JavaScript` using the `React.createElement()` method.

**Step-wise step process of Transpiling JSX into JavaScript:**

1. **Input Code** : Developer writes the code in a `.jsx` file that contains `JSX` syntax.

2. \*_Parsing_ : Babel parses the input code and generates an Abstract Syntax Tree (AST) representation of the code. The `AST` is a structured representation of the code that helps the transpiler to work with the code in a more structured way.

3. **Transformation** : Babel transforms the `AST` representation of the code by converting `JSX` syntax into `React.createElement()` method calls and `ES6` syntax into `ES5` syntax. For example, it will convert `const` and `let` declarations into `var` and arrow functions into traditional functions.

4. **Output Code** : Babel generates the output code by converting the transformed `AST` back into `JavaScript` code. The output code is then saved in a `.js` file that can be executed by the browser.

5. **Execution** : The browser executes the output code, and the `React` library takes over the page. `ReactDOM` creates a virtual DOM and then renders the initial components.

Now, we know about `transpiler` and the execution of `transpiler` in the context of `React` and `JSX`. **But, how do we configure `Babel` to transpile `JSX` code into `JavaScript`?**

### **Babel Configuration**

There are two ways to configure `Babel`:

1. **Using the Transpiler(Babel) via CDN**

Just like we used the `React` and `ReactDOM` libraries via CDN in the `HTML` file, we can also use `Babel` via CDN in the `HTML` file. This way, we can transpile the `JSX` code into `JavaScript` that the browser can understand.

Usually, we configure `Babel` using a configuration file like `.babelrc` or `babel.config.js`. But, for simple projects, we can use `Babel` via CDN in the `HTML` file.

Moreover, in the production environment, we use `Babel` via a build tool like `Webpack` or `Vite`.

Here is an example of how to use `Babel` via CDN in the `HTML` file:

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Babel CDN Example</title>
  <!-- Load Babel from a CDN -->
    <script
            src="https://unpkg.com/react@17/umd/react.development.js"
            crossorigin
    ></script>
    <script
            src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
            crossorigin
    ></script>
    <script
            src="https://unpkg.com/@babel/standalone/babel.min.js">
    </script>
</head>
<body>
  <div id="root"></div>
  <!-- JSX or ES6 Code inside a <script> tag with type="text/babel" -->
  <script type="text/babel">
    const App = () => {
      return <h1>Hello, Babel!</h1>;
    };

    ReactDOM.render(<App />, document.getElementById('root'));
  </script>
</body>
</html>
```

In the above code, we are downloading `Babel` from a CDN using the `<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>` tag.

One thing to note is that the order of the `script` tags is important. The **best practice** is to load `React` first, followed by the `ReactDOM` and `Babel` libraries.

We are also using the `type="text/babel"` attribute in the `<script>` tag to tell `Babel` that the code inside the `<script>` tag is `JSX` or `ES6` code.

### **How does Browser Deal with the Above HTML?**

As soon as the browser encounters the `<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>` tag, it makes an `HTTP request` to download the `Babel` library.

Once the script is loaded, it doesn't immediately execute the script because `babel` in the browser is **lazy**, meaning it doesn't start transpiling the `JSX` code until it encounters a `<script type="text/babel">` tag.

By the time `Babel` starts transpiling `JSX`, the `React` and `ReactDOM` libraries are already loaded and available in the browser.

When the browser encounters the `<script type="text/babel">` tag. `Babel` recognizes that the code inside the `<script>` tag is `JSX` and it needs to be `transpiled` as we've used `type="text/babel"` attribute in the `<script>` tag. It is due to this attribute that `Babel` knows that the code inside the `<script>` tag is `JSX` or `ES6` code.

Once `babel` identifies the `JSX` code, it kicks off the `transpilation` process. It converts the `JSX` code into `React.createElement()` method calls and `ES6` code into `ES5` code.

After `babel` has transpiled the `JSX` into the plain `JavaScript`, the browser's `JavaScript engine` executes the transpiled code. In this case, the transpiled code calls the `React.createElement` to create a virtual DOM element and then uses `ReactDOM.render()` to render the component into the actual `DOM`.

**Special Note for Babel CDN**:

As we are using `Babel` via CDN in the `HTML` file, it is not recommended for production use because `JSX` is transpiled in real-time in the browser. This can slow down the loading of the page. Therefore, for optimal performance, it is recommended to use `Babel` via a build tool like `Webpack` or `Vite` in the production environment.


The above explain also explains the working of Client Side Rendering (CSR) in React.

This was about using `Babel` via CDN in the `HTML` file. Now, let's move to the second way of configuring `Babel` i.e. using `Babel` via a build tool like `Webpack` or `Vite`.

2. **Using the Transpiler via Build Tool**

To understand this, let's take an example a simple `React` project that uses build tool like `Vite`.

```HTML
<!--index.html-->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Vite Example</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/index.js"></script>
</body>
</html>
```

```javascript
//main.jsx
import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return <h1>Hello, Vite!</h1>;
};

ReactDOM.render(<App />, document.getElementById("root"));
```

In the above code, we have a `React` component `App` that returns a `h1` element with the text `Hello, Vite!`. We are using `JSX` syntax to create the `h1` element.

Before, we proceed further let's understand what is a `build tool`?

**What is a Build Tool?**

A `build tool` automates tasks involved in the development, testing, and deployment of software projects. It is used to compile, optimize code, and bundle the source code of a project into a production-ready format.

When we are building a production-ready `React` application, we use a build tool like `Webpack` or `Vite` to bundle the `React` and `ReactDOM` libraries along with our JavaScript code. We also use `Babel` via the build tool to transpile the `JSX` code into `JavaScript`.

**Step-by-Step Process of Using Transpiler via Build Tool (Vite):**

Vite is a build tool that is used to create modern web applications. It is a fast, opinionated, and pre-configured build tool that is used to build `React`, `Vue`, and `Svelte` applications.

Vite, by default uses `esbuild` as a bundler and transformer for `JavaScript` and `TypeScript` code. `Esbuild` is extremely fast compared to traditional transpiler like `Babel` or `Webpack`.

1. **Create a React Project** : Create a new `vite` project using `npm create vite@latest my-vite-project` command.

Our initial project structure looks like this:

```
my-vite-project/
│
├── index.html
├── src/
│   ├── main.js
│   ├── App.jsx
│   └── style.css
├── vite.config.js
└── package.json
```

2. **Install React and ReactDOM** : Install `React` and `ReactDOM` libraries using `npm install react react-dom` command.

3. **Create a React Component** : Create a new `React` component in a `main.jsx` file that uses `JSX` syntax. We've created a `React` component `App` that returns a `h1` element with the text `Hello, Vite!`.

4. **Create an HTML File** : Create an `index.html` file that contains a `div` element with an `id` of `root`. We've also included a `<script>` tag that points to the `index.js` file.

5. **Create an Entry File** : Create an `index.js` file that imports the `React` and `ReactDOM` libraries and the `main.jsx` file. We've also used the `ReactDOM.render()` method to render the `App` component inside the `div` element with the `id` of `root`.

6. **Configure `vite.config.js`**

```javascript
import { defineConfig } from "vite";

export default defineConfig({
  esbuild: {
    // Enable JSX support in esbuild
    jsxFactory: "React.createElement",
    jsxFragment: "React.Fragment",

    // Minification options
    minify: true,

    // Target specific JS version for older browsers
    target: "es2017",

    // Custom loader options (for example, transforming special syntax)
    loader: "jsx",

    // Enable sourcemaps
    sourcemap: true,
  },
});
```

**Explanation of the above code:**

`jsxFactory` : This option tells `esbuild` to use `React.createElement` as the factory function for JSX elements. This is because `React.createElement` is the function that creates the virtual DOM elements in `React`.

`jsxFragment` : This option tells `esbuild` to use `React.Fragment` as the fragment component for JSX elements. This is because `React.Fragment` is used to wrap multiple elements in a single parent element.

`minify` : This option tells `esbuild` to minify the output code. Minification reduces the size of the output code by removing unnecessary characters like whitespace and comments.

`target` : This option tells `esbuild` to target a specific JavaScript version for older browsers. In this case, we are targeting `ES2017` which is compatible with most modern browsers.

`loader` : This is useful for configuring how files are treated. For example, you can specify that `.jsx` files should be handled by the `JSX` loader.

`sourcemap` : This option tells `esbuild` to generate sourcemaps for the output code. Sourcemaps are used to map the output code back to the original source code for debugging purposes.

7. **Run the Vite Server** : Run the `vite` server using the `npm run dev` command. This will start the development server and open the project in the browser. When we run this code, `Vite` will compile and bundle our code using `Esbuild` and serve it on `localhost:3000`.

8. **Build the Project** : Build the project for production using the `npm run build` command. This will create a `dist` folder that contains the production-ready code.

### **Understanding the Build Process for Vite Step-by-Step**

1. **Find Vite Configuration for Build** : When we run the `npm run build` it calls the `vite build` script, which uses the configuration defined in the `vite.config.js` file to build the project for production.

2. **Project Initialization** : First, `Vite` starts by analyzing the imports and dependencies of the project. It creates a dependency graph of the project to understand the relationships between different files. Then, entry point of the project (usually `index.js` or `main.js` and `index.html`) is identified and are bundled together.

3. **Bundling with Esbuild and Rollup** : `Vite` uses `Esbuild` as the default bundler for `JavaScript`/`TypeScript` and `JSX/TSX` transformations. `Esbuild` is a fast bundler that is used to bundle the project code. For other assets like `CSS`, `images`, and `fonts`, `Vite` uses `Rollup` as the bundler.

4. **Minification** : After bundling the project code, `Vite` minifies the size of `JavaScript`, `CSS` and `HTML` files by removing unnecessary characters like whitespace and comments. It also eliminates dead code and optimizes the code for performance.

5. **Output to `/dist` Folder** : After processing and optimizing the project code, `Vite` outputs the production-ready code to the `/dist` folder. The `/dist` folder contains the bundled and minified code that is ready to be deployed to a server. It contains the `index.html` file with optimized asset references, minified `JavaScript` file and minified and combined `CSS` files, and other assets like images and fonts.

Final folder structure after running `npm run build`:

```
my-vite-project/
│
├── dist/
│   ├── index.html
│   ├── assets/
│   │   ├── main.abc123.js
│   │   ├── style.abc123.css
│   │   └── logo.png
│
├── index.html
├── src/
│   ├── main.js
│   ├── App.jsx
│   └── style.css
├── vite.config.js
└── package.json
```

**Understanding the Dist Folder:**

`index.html` : The `index.html` file in the `/dist` folder is the entry point of the application. It contains the optimized asset references and links to the minified `JavaScript` and `CSS` files. Any scripts or stylesheets referenced in the original `HTML` that were pointing to files in the `src/` folder are now pointing to the optimized files in the `/dist/assets/` folder.

`assets/` : The `assets/` folder contains the optimized assets like `JavaScript` and `CSS` files, images, and fonts.

- `main.abc123.js/` : This is the bundled, minified, and hashed JavaScript file (usually renamed with a hash in its filename to support long-term caching). It includes all the JavaScript code, including the `React components` and any other dependencies you were using in `src/main.js` and your other JS files.

- `style.abc123.css` : This is the bundled and minified CSS file. Vite takes all the CSS from your application, optimizes it, and bundles it into this single CSS file for faster loading.

- `logo.png (or other assets)` : Any static assets (images, fonts, etc.) used in your project will be copied to the `assets/` folder. Their filenames may also be hashed for caching purposes.

Now, comes the final and interesting part of the process.

### **How Does the Browser Work After the Build?**

After running the build, the project in the `dist/` folder is ready to be deployed to a server. Here’s how the browser interacts with this built project:

1. **Requesting the `index.html`** : When a user navigates to your website, the browser requests the `index.html` file from the server. This file is located in the `dist/` folder.

2. **Loading Optimized Assets** : The `index.html` in the `dist/` folder contains references to the optimized and hashed assets (`JavaScript` and `CSS files`). For example:

```html
<script src="/assets/main.abc123.js"></script>
<link rel="stylesheet" href="/assets/style.abc123.css" />
```

These files are requested by the browser and downloaded. Since they are optimized and minified, their file sizes are smaller, which reduces loading time.

3. **JavaScript Execution** : Once the `main.abc123.js` JavaScript file is downloaded, the browser executes it. This JavaScript includes everything necessary to initialize your `React` application (or other frameworks you're using), including the code for `ReactDOM.render` and all your components.

Now the browser do not need to download the `React` and `ReactDOM` libraries separately as they are already bundled with your code. Also, the `JSX` code is transpiled into plain `JavaScript` that the browser can understand.

4. **Rendering the Application** : The browser creates the `DOM` structure based on the `JavaScript` and dynamically injects the content into the appropriate elements. For example, in our `main.js`, we're mounting a `React Component` to a `div#root`, the browser will insert the React-rendered content into that element.

Final Thoughts:

In this article, we have covered how the browser loads the `React` and `ReactDOM` libraries, how `JSX` is transpiled into `JavaScript`, and how the browser interacts with the built project. We have also seen how to configure `Babel` via a build tool like `Vite` to transpile `JSX` code into `JavaScript`.

Understanding these concepts is essential for `React` developers to build efficient and optimized applications. By knowing how the browser interacts with the `React` code, you can optimize your applications for better performance and user experience.

I hope this article has helped you understand the working of `React` and how the browser interacts with `React` applications. If you have any questions or feedback, feel free to leave a comment below.
