import "./style.css";

const WelcomePage = ({ user, setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <h1>Olá, seja bem vindo {user}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default WelcomePage;
