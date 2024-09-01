"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Onboarding() {
  const [profArr, setProfArr] = useState([]);
  const [prof, setProf] = useState("");
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
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Picture</Label>
          <Input id="picture" type="file" />
        </div>
        <div>
          <Label htmlFor="fullname">Full Name :</Label>
          <Input type="text" id="fullname" />
        </div>
        <div>
          <Label htmlFor="age">Age :</Label>
          <Input type="number" id="age" />
        </div>
        <div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select account type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="individual">Individual</SelectItem>
                <SelectItem value="organisation">Organisation</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="profession">Profession :</Label>
          <div>
            <Input
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
