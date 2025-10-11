import { Component } from "react";

class ClassCompB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Birat",
    };

    console.log("Constructor A");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerived A");
    return null;
  }

  componentDidMount() {
    console.log("Mounted A");
  }

  shouldComponentUpdate() {
    console.log("Should Update A");
    return true;
  }

  getSnapshotBeforeUpdate(prevP, prevS) {
    console.log(`SnapShot A, Props ${prevP}, State ${prevS}`);
    return null;
  }

  componentDidUpdate() {
    console.log("Lifecycle A ComponentUpdate");
  }

  render() {
    console.log("Render A");
    return <h1>Hiii Lifecycle A</h1>;
  }
}

export default ClassCompB;
