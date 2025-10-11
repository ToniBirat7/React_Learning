import { Component } from "react";

class ClassCompB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Birat",
    };

    console.log("Lifcylce Started A");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerived A");
    return null;
  }

  componentDidMount() {
    console.log("Mounted A");
  }

  render() {
    console.log("Render A");
    return <h1>Hiii Lifecycle A</h1>;
  }
}

export default ClassCompB;
