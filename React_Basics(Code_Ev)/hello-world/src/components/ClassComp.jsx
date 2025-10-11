import { Component } from "react";
import ClassCompB from "./ClassCompB";

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
    return (
      <>
        <h1>Hiii Lifecycle B</h1>
        <ClassCompB></ClassCompB>
      </>
    );
  }
}

export default ClassComponent;
