import { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Birat",
    };

    console.log("Lifcylce Started");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerived");
    return null;
  }

  componentDidMount() {
    console.log("Mounted");
  }

  render() {
    console.log("Render");
    return <h1>Hiii Lifecycle</h1>;
  }
}

export default ClassComponent;
