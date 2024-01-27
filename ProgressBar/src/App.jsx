import { useState } from "react";
import ProgressBar from "./components/ProgressBar";
import { useEffect } from "react";

const App = () => {
  const [value, setValue] = useState(0);
  const[message,setMessage]=useState('')

  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue((current) => current + 1);
    }, 50);

    if(value<100){
      setMessage('Loading...😢')
    }

    if (value === 100) {
      clearInterval(intervalId);
      setMessage('Complete...😁')
    }
    return () => clearInterval(intervalId);
  }, [value]);

  return (
    <div className="app">
      <span>ProgressBar</span>
      <ProgressBar value={value} />
      {message}
    </div>
  );
};

export default App;
