//import the react and reactDOM
import React from "react";
import ReactDOM from "react-dom";

//create a react component
const App = () => {
  return (
    <div>
      <div>{element}</div>
      <div>
        Hi there <Welcome name="hung" />
      </div>
    </div>
  );
};

export default function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}
const user = {
  name: "Bob",
  tasks: ["learn React", "learn JSX"]
};
//style in JSX must be an object
const style = {
  backgroundColor: "#f2f2f2"
};

const element = (
  //I'm a comment outside of JSX
  // you can pass any props to an element using {}
  <div style={style}>
    {/*I'm inside JSX now*/}
    {/*A comment is a Javascript expression*/}

    {/*we evaluate 'user.name' and the number of tasks*/}
    <h1>
      {" "}
      Welcome {user.name} you have {user.tasks.length} tasks.
    </h1>

    {/*only literal strings don't need to be inside {} , but they can be*/}
  </div>
);

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    // Define your state object here
    this.state = {
      name: "Jane Doe",
      age: 20
    };
  }

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
//take the react component and show it on screen
ReactDOM.render(<Greeting />, document.getElementById("root"));
