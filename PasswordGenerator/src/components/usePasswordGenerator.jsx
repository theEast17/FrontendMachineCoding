import { useState } from "react";

const usePasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const passwordGenerate = (checkBoxData, length) => {
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "1234567890";
    let symbols = "!@#$%^&*()_+";
    let mainPassword = "";

    const trueValues = checkBoxData.filter((check) => check.state);

    if(trueValues.length===0){
        setError('Select Atleast One CheckBox')
        setPassword('')
        
        setTimeout(()=>{
            setError('')
        },2000)
        return
    }

    trueValues.forEach((item) => {
      if (item.title.toLowerCase().includes("uppercase")) {
        mainPassword = mainPassword + uppercase;
      }
      if (item.title.toLowerCase().includes("lowercase")) {
        mainPassword = mainPassword + lowercase;
      }
      if (item.title.toLowerCase().includes("numbers")) {
        mainPassword = mainPassword + numbers;
      }
      if (item.title.toLowerCase().includes("symbols")) {
        mainPassword = mainPassword + symbols;
      }
    });

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * mainPassword.length);
      generatedPassword += mainPassword[randomIndex];
    }

    setPassword(generatedPassword);
    setError('')

  };

  return { password, error, passwordGenerate };
};

export default usePasswordGenerator;
