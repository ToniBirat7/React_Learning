import { Component } from "react";
import ClassCompB from "./ClassCompB";

class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Birat",
    };

    console.log("Constructor B");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerived B");
    return null;
  }

  clickHandler = () => {
    this.setState({
      name: "Birat",
    });
  };

  componentDidMount() {
    console.log("Mounted B");
  }

  shouldComponentUpdate() {
    console.log("Should Update B");
    return true;
  }

  getSnapshotBeforeUpdate(prevP, prevS) {
    console.log(`SnapShot B, Props ${prevP}, State ${prevS}`);
    return null;
  }

  componentDidUpdate() {
    console.log("Lifecycle B ComponentUpdate");
  }

  componentWillUnmount() {
    console.log("Unmounted B");
  }

  render() {
    console.log("Render B");
    return (
      <>
        <h1>Hiii Lifecycle B</h1>
        <ClassCompB></ClassCompB>
        <button onClick={this.clickHandler}>Click Me</button>
      </>
    );
  }
}

export default ClassComponent;
