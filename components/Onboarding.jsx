"use client";
import React, { useState } from "react";

function Onboarding() {
  const [profArr, setProfArr] = useState([]);
  const [prof, setProf] = useState("ddd");
  const addProf = () => {
    setProfArr([...profArr, prof]);
    setProf("");
  };
  const remProf = (ind) => {
    console.log(profArr);
    let newArr = [];
    profArr.forEach((v, i) => {
      if (i != ind) {
        newArr.push(v);
      }
    });
    setProfArr(newArr);
    console.log(profArr);
  };
  return (
    <div className="text-gray-500 flex items-center justify-center min-h-screen flex-col">
      Onboarding
      <div className="flex gap-4 flex-col">
        <div>
          <label htmlFor="profilepic">Profile Pic :</label>
          <input type="file" id="profilepic" />
        </div>
        <div>
          <label htmlFor="fullname">Full Name :</label>
          <input type="text" id="fullname" />
        </div>
        <div>
          <label htmlFor="age">Age :</label>
          <input type="number" id="age" />
        </div>
        <div>
          <label htmlFor="profession">Profession :</label>
          <div>
            <input
              type="text"
              onChange={(e) => {
                setProf(e.target.value);
              }}
              value={prof}
            />
            <button onClick={addProf}>Add</button>
          </div>
          {profArr.map((e, ind) => {
            return (
              <div key={ind}>
                <p>{e}</p>
                <button onClick={() => remProf(ind)}>remove</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
