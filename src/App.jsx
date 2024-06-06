import { initialColors } from "./lib/colors";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import ColorForm from "./Components/ColorForm/ColorForm";
import Color from "./Components/Color/Color";
import "./App.css";

export default function App() {
  const [colors, setColors] = useLocalStorageState("colors", {
    defaultValue: initialColors,
  });
  const [colorToEdit, setColorToEdit] = useState(null);

  const handleAddColor = (newColor) => {
    setColors([newColor, ...colors]);
  };

  const handleDeleteColor = (colorId) => {
    setColors(colors.filter((color) => color.id !== colorId));
  };

  const handleEditColor = (updatedColor) => {
    setColors(
      colors.map((color) =>
        color.id === updatedColor.id ? updatedColor : color
      )
    );
    setColorToEdit(null);
  };

  const startEditingColor = (colorId) => {
    setColorToEdit(colorId);
  };

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={handleAddColor} />
      <div className="color-list">
        {colors.map((color) => (
          <Color
            key={color.id}
            color={color}
            onDelete={handleDeleteColor}
            onEdit={startEditingColor}
            isEditting={color.id === colorToEdit}
            onUpdate={handleEditColor}
          />
        ))}
      </div>
    </>
  );
}
