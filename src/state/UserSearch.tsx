import React, { useEffect, useRef, useState } from "react";

const users = [
  { name: "a", age: 20 },
  { name: "b", age: 21 },
  { name: "c", age: 22 },
];

const UserSearch: React.FC = () => {
  const textInput = useRef<HTMLInputElement | null>(null)
  const [name, setName] = useState("");
  const [user, setUser] = useState <{name: string, age: number} | undefined>()
  

  useEffect(()=>{
    if(!textInput.current){
      return
    }
    textInput.current.focus()
  },[])
  const handleOnClick = ()=>{
    const foundUser = users.find((user)=>{
        return user.name === name
    })
    setUser(foundUser);
    setName('')
  }

  return (
    <div>
      <h1>User Search</h1>

      <input ref={textInput} value={name} onChange={(e) => setName(e.target.value)} />

      <button onClick={handleOnClick}>Find user</button>
      <div>
         <p>{user && user.name} - {user && user.age} year old</p>
      </div>
    </div>
  );
};

export default UserSearch;
