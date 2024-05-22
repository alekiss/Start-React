import { useState } from "react";
import User, { UserProps } from "../../components/User";

const FetchCall = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  const randomUser = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const userData = data.results[0];
    setUser(userData);
  };

  console.log(user?.name);

  return (
    <div className="App">
      <h1>Usuário Aleatório</h1>
      {!user ? "Click no botão para gerar um usuário aleatório" :(
        <User
          name={user.name}
          email={user.email}
          phone={user.phone}
          picture={user.picture}
        />
      )}
      <button onClick={randomUser}>{!user ? "New user" : "Another user"}</button>
    </div>
  );
};

export default FetchCall;
