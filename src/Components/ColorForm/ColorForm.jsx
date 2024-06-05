import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ColorInput from "../ColorInput/ColorInput";
import "./ColorForm.css";

export default function ColorForm({ onAddColor, onUpdate, color, isEditMode }) {
  const [role, setRole] = useState("primary");
  const [hex, setHex] = useState("#ffffff");
  const [contrastText, setContrastText] = useState("#000000");

  useEffect(() => {
    if (isEditMode && color) {
      setRole(color.role);
      setHex(color.hex);
      setContrastText(color.contrastText);
    }
  }, [isEditMode, color]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedColor = {
      id: color ? color.id : nanoid(),
      role,
      hex,
      contrastText,
    };
    if (isEditMode) {
      onUpdate(updatedColor);
    } else {
      onAddColor(updatedColor);
    }
    setRole("primary");
    setHex("#ffffff");
    setContrastText("#000000");
  };

  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <label htmlFor="role">Role:</label>
      <br />
      <input
        type="text"
        id="role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        placeholder="e.g. primary, secondary"
      />
      <br />
      <br />
      <ColorInput label="Hex:" value={hex} onChange={setHex} colorType="hex" />
      <br />
      <ColorInput
        label="Contrast Text:"
        value={contrastText}
        onChange={setContrastText}
        colorType="contrastText"
      />
      <br />
      <button type="submit">{isEditMode ? "Update Color" : "Add Color"}</button>
    </form>
  );
}
