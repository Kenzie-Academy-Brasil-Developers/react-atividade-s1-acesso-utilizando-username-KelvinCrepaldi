import "./style.css";
import { useState } from "react";

const GetUserComponent = ({ setUser, setIsLoggedIn }) => {
  const [userInput, setUserInput] = useState("");

  const handleLogin = (userInput) => {
    setUser(userInput);
    setIsLoggedIn(true);
  };

  return (
    <form>
      <input
        type="text"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      ></input>
      <button onClick={() => handleLogin(userInput)}>Acessar</button>
    </form>
  );
};

export default GetUserComponent;
