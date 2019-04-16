## React Basic

##### Create React apps with no build configuration.

[create-react-app](https://github.com/facebook/create-react-app)

---

##### Intro to JSX

JSX is a syntax extension of Javascript that we use with React.

JSX is optionnal with React but recommended to make your code more readable and easier to debug.

JSX lets you describe how your UI looks like.

##### Resources

[JSX-React Doc](https://reactjs.org/docs/introducing-jsx.html)

JSX syntax looks like this:

```js
const element = <div>Hello World!</div>;
```

React wants to be a declarative library, they use JSX to let you describe what your UI should look like.

JSX is a syntax extension that will be compiled into a Javascript function that returns a Javascript Object. It means that your JSX syntax can be mixed with your Javascript code:

```js
//Store your JSX in a variable
const element = <div>Hello World!</div>;

//Store your JSX in an array
const catList = [<li>Cat 1</li>, <li>Cat 2</li>, <li>Cat 3</li>];
```

You can evaluate Javascript expressions in JSX
JSX is Javascript, you can evaluate any expression. To do so you must encapsulate your expression inside curly braces {}.

You can pass variables as content or pass props to your elements:

```js
const user = {
	name: "Bob",
	tasks: [
		"learn React",
		"learn JSX"
	]
}
//style in JSX must be an object
const style = {
	backgroundColor: "#f2f2f2"
}

const element = (
	// you can pass any props to an element using {}
	<div style={style}>
		{/*A comment is a Javascript expression*/}

		{/*we evaluate 'user.name' and the number of tasks*/}
		<h1> Welcome {user.name} you have {user.tasks.length} tasks.</h1>

		<ul className="tasks">
			{/*We can iterate over a JS array and return a JSX array*/}
			{
				user.tasks.map(task => (
					{/* inside that JSX element, we evalute our values*/}
					<li key={task}> {task} </li>
				))
			}
		</ul>
	</div>
);
```

##### JSX compiles to React.createElement()

When your javascript compiles, all JSX elements will be replaced by React.createElement() calls.

React.createElement will return a React Element object.

```js
const element = <div className="main">Hello World!</div>;

//same as :
const element = React.createElement(
  "div",
  { className: "main" },
  "Hello World!"
);
```

###### Some Notes

1. Root JSX elements can't be next to each other

```js
//ERROR: this is invalid
const element = (
	<div>Hello</div>
	<div>World></div>
)

//OK: both divs are wrapped in a root element
const element = (
	<div>
		<div>Hello</div>
		<div>World</div>
	</div>
)
```

2. Class and styles are special

- The class keyword is reserved in Javascript so you need to use className when using JSX with React.
- The style props must be an object. Attributes with dashes must be written in camelCase: background-color becomes backgroundColor.

```js
HTML: <div style="background-color: red;" />;
JSX: <div style={{ backgroundColor: "red" }} />;
```

3. When using JSX with React, you must import React from "react"

```
Even when you don't directly use it in your file, JSX will be compiled to React.createElement(<tagName>,<props>, <children>) if you don't import React, you will get an error.
```

4. React Element children can be a React Element or an array of React Elements

- You can safely have your component have an array as children. React knows how to work with arrays.
- If you use an array, each child Element must have a unique key prop so React knows how to compare the elements.

---

##### Rendering elements

Elements are the smallest building blocks of React apps

```js
//import the react and reactDOM
import React from "react";
import ReactDOM from "react-dom";

//create a react component
const App = () => {
  return <div>Hi there</div>;
};

//take the react component and show it on screen
ReactDOM.render(<App />, document.getElementById("root"));
```

---

##### Components and Props

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

###### Function Components

The simplest way to define a component is to write a JavaScript function:

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

###### Class based Components

```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

##### Rendering a component

```js
const element = <Welcome name="Sara" />;
ReactDOM.render(element, document.getElementById("root"));
```

##### Components can refer to other components in their output

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
```

---

##### State

###### What is State

1. State is a JavaScript object that stores a component’s dynamic data and determines the component’s behaviour.
2. State is dynamic, it enables a component to keep track of changing information in between renders and for it to be dynamic and interactive.
3. State can only be used within a class component. If you anticipate that a component will need to manage state, it should be created as a class component and not a functional one.
4. State is similar to props but unlike props, it is private to a component and is controlled solely by the component

```js
class Greeting extends React.Component {
  // a constructor function that assigns the initial state using this.state
  // Adding super() is a must when using the constructor
  constructor(props) {
    super(props);
    // Define your state object here
    this.state = {
      name: "Jane Doe",
      age: 20
    };
  }

  // all changes to state are made using this.setState. Using this.setState ensures that
  // the components affected by the change in state are re-rendered in the browser
  handleOnClick = () => {
    this.setState({ name: "hung", age: 22 });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleOnClick}>Click here </button>
        <h1>
          {this.state.name} is {this.state.age} years old
        </h1>
      </div>
    );
  }
}
```
