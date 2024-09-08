import { useState } from "react";

const Toast = ({ text, onClose }) => {
  return (
    <div
      style={{
        background: "blue",
        width: "150px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <span style={{ color: "white", display: "inline-block" }}>{text}</span>
      <p style={{ cursor: "pointer", color: "white" }} onClick={onClose}>
        X
      </p>
    </div>
  );
};

const App = () => {
  const [toasts, setToasts] = useState([]);

  const showToast = () => {
    const newToast = {
      id: Date.now(), 
      text: `Toast ${toasts.length + 1}`, 
      visible: true,
    };

    setToasts((prevToasts) => [...prevToasts, newToast]);

    setTimeout(() => {
      setToasts((prevToasts) =>
        prevToasts.map((toast) =>
          toast.id === newToast.id ? { ...toast, visible: false } : toast
        )
      );
    }, 5000);
  };

  return (
    <>
      <div
        style={{
          height: "50vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex:'10'
        }}
      >
        <button
          style={{ padding: "10px", cursor: "pointer" }}
          onClick={showToast}
        >
          Show Toast
        </button>
      </div>

      
      {toasts.map(
        (toast) =>
          toast.visible && (
            <Toast
              key={toast.id}
              text={toast.text}
              onClose={() => {
                setToasts((prevToasts) =>
                 prevToasts.filter((t) => t.id !== toast.id)
                );
              }}
            />
          )
      )}
    </>
  );
};

export default App;
