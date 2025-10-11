import "./App.css";
import Form from "./components/Form";
import ClassComponent from "./components/ClassComp";

function App({ isLoggedIn, username }) {
  return (
    <>
      {/* {isLoggedIn ? <h1>Hi ${username}</h1> : <Form></Form>} */}
      <ClassComponent></ClassComponent>
    </>
  );
}

export default App;
