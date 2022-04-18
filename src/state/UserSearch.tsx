import React, { useState } from "react";

const users = [
  { name: "Long", age: 20 },
  { name: "Long Bi", age: 21 },
  { name: "Long teo", age: 22 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState <{name: string, age: number} | undefined>()
  
  const handleOnClick = ()=>{
    const foundUser = users.find((user)=>{
        return user.name === name
    })
    setUser(foundUser);
  }

  return (
    <div>
      <h1>User Search</h1>

      <input value={name} onChange={(e) => setName(e.target.value)} />

      <button onClick={handleOnClick}>Find user</button>
      <div>
         <p>{user && user.name} - {user && user.age} year old</p>
      </div>
    </div>
  );
};

export default UserSearch;
