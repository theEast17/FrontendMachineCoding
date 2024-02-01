import { useEffect, useState } from "react";
import usePasswordGenerator from "./components/usePasswordGenerator";

const App = () => {
  const { password, error, passwordGenerate } = usePasswordGenerator();
  const [length, setLength] = useState(4);
  const [copied, setCopied] = useState(false);
  const [strengthMessage, setStrengthMessage] = useState("");
  const [checkBoxData, setCheckBoxData] = useState([
    { title: "Include uppercase Letter", state: false },
    { title: "Include lowercase Letter", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include symbols", state: false },
  ]);

  useEffect(()=>{
    passwordStrength(password);
  },[password])

  const handleCheckBox = (index) => {
    const updatedCheck = [...checkBoxData];
    updatedCheck[index].state = !updatedCheck[index].state;
    setCheckBoxData(updatedCheck);
  };

  const passwordStrength = (password) => {
    if (password.length <= 5) {
      setStrengthMessage("Weak");
    } else if (password.length <= 8) {
      setStrengthMessage("Medium");
    } else if (password.length <= 12) {
      setStrengthMessage("Good");
    } else if (password.length <= 17) {
      setStrengthMessage("Strong");
    } else if (password.length <= 20) {
      setStrengthMessage("Very Strong");
    }
  };

  const handlePassword = () => {
    passwordGenerate(checkBoxData, length);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className="container">
      <h3 style={{ color: "#fff", textAlign: "center" }}>{error}</h3>
      {password && (
        <div className="finalPassword">
          <span className="main-password">{password}</span>
          <button className="copyBtn" onClick={handleCopy}>{`${
            copied ? "Copied" : "Copy"
          }`}</button>
        </div>
      )}
      <div className="charLength">
        <span>
          <label>Character Length</label>
          <label>{length}</label>
        </span>
        <input
          type="range"
          min={4}
          max={20}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>

      <div className="checkBoxes">
        {checkBoxData.map((item, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                checked={item.state}
                onChange={() => handleCheckBox(index)}
                id={item.title}
              />
              <label htmlFor={item.title}>{item.title}</label>
            </div>
          );
        })}
      </div>

      {password && (
        <h3 style={{ color: "#fff" }}>Password Strength : {strengthMessage}</h3>
      )}

      <button className="generateBtn" onClick={handlePassword}>
        Generate Password
      </button>
    </div>
  );
};

export default App;
