import React from "react";
import ReactDOM from "react-dom/client";
import ColorPicker from './components/ColorPicker';
import { useColors } from "./hooks/useColors";
import "./index.css";

const App = () => {
  const { color, handleChangeColor, handleSubmitSaveColor } = useColors();

  return (
    <div className="container">
      <ColorPicker 
        color={color}
        handleChangeColor={handleChangeColor}
        handleSubmitSaveColor={handleSubmitSaveColor}
      />
    </div>
  );
};
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
