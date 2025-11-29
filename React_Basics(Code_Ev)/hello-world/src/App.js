import MainCounter from "./components/customHooks/MainCounter";
import Modal from "./components/portal/Modal";
import { UserContext } from "./components/context/userContext";
import ContextParent from "./components/context/Parent";
function App() {
  return (
    <>
      <Modal></Modal>
      <UserContext.Provider value={"Birat"}>
        <ContextParent></ContextParent>
      </UserContext.Provider>
      {/* <MainCounter></MainCounter> */}
    </>
  );
}

export default App;
