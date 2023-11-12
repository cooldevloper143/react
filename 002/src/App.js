/* eslint-disable */
import React, { useState, useCallback, useEffect } from "react";
import "./App.css";

export default function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (characterAllowed) {
      str += "!@#$%^&*()_+-=[]{}|;:,.<>?/";
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);
  return (
    <>
      <div className="main">
        <h2>Password Generator</h2>
        <div className="pass">
          <input
            type="text"
            value={password}
            placeholder="password"
            className="inputtext"
            readOnly
          />
          <button className="copy">copy</button>
        </div>
        <div className="input">
          <input
            type="range"
            className="range"
            min={8}
            max={20}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label className="labellength">Length={length}</label>

          <input
            type="checkbox"
            className="nobox"
            onChange={() => setNumberAllowed(!numberAllowed)}
          />
          <label className="labellength">Number</label>

          <input
            type="checkbox"
            className="charbox"
            onChange={() => setCharacterAllowed(!characterAllowed)}
          />
          <label className="labellength">Characters</label>
        </div>
      </div>
    </>
  );
}
