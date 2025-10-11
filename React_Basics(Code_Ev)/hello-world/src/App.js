import "./App.css";
import Form from "./components/Form";
function App({ isLoggedIn, username }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(isLoggedIn, username);
  return (
    <>
      {isLoggedIn ? <h1>Hi ${username}</h1> : <Form></Form>}
    </>
  );
}

export default App;
