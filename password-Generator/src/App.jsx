import React, { useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);

  const generatePassword = () => {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let allChars = chars;
    if (includeUppercase) allChars += uppercaseChars;
    if (includeNumbers) allChars += numbers;
    if (includeSpecialChars) allChars += specialChars;

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      newPassword += allChars.charAt(randomIndex);
    }

    setPassword(newPassword);
  };

  return (
    <div className="container mx-auto mt-8 text-center">
      <h1 className="text-3xl font-semibold mb-4">Password Generator</h1>

      <div className="flex justify-center items-center space-x-2 mb-4">
        <label htmlFor="length">Password Length:</label>
        <input
          type="number"
          id="length"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="border p-2"
        />
      </div>

      <div className="mb-4">
        <label className="mr-4">
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(!includeUppercase)}
          />
          Include Uppercase
        </label>

        <label className="mr-4">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          Include Numbers
        </label>

        <label>
          <input
            type="checkbox"
            checked={includeSpecialChars}
            onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
          />
          Include Special Characters
        </label>
      </div>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={generatePassword}
      >
        Generate Password
      </button>

      {password && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Generated Password:</h2>
          <div className="border p-4 inline-block">{password}</div>
        </div>
      )}
    </div>
  );
};

export default PasswordGenerator;
