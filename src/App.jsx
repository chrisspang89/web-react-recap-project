import { initialColors } from "./lib/colors";
import { useState } from "react";
import ColorForm from "./Components/ColorForm/ColorForm";
import Color from "./Components/Color/Color";
import "./App.css";

export default function App() {
  const [colors, setColors] = useState(initialColors);

  const handleAddColor = (newColor) => {
    setColors([newColor, ...colors]);
  };

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={handleAddColor} />
      <div className="color-list">
        {colors.map((color) => (
          <Color key={color.id} color={color} />
        ))}
      </div>
    </>
  );
}
