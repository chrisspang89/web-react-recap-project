import { useState } from "react";
import { nanoid } from "nanoid";
import ColorInput from "../ColorInput/ColorInput";
import "./ColorForm.css";

export default function ColorForm({ onAddColor }) {
  const [role, setRole] = useState("primary");
  const [hex, setHex] = useState("#ffffff");
  const [contrastText, setContrastText] = useState("#000000");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newColor = {
      id: nanoid(),
      role,
      hex,
      contrastText,
    };
    onAddColor(newColor);
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
      <button type="submit">Add Color</button>
    </form>
  );
}
