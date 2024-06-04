import { useState } from "react";
import { nanoid } from "nanoid";
import ColorInput from "../ColorInput/ColorInput";

export default function ColorForm({ onAddColor }) {
  const [role, setRole] = useState("primary color");
  const [hex, setHex] = useState("#ffffff");
  const [contrastText, setContrastText] = useState("#000000");

  const handleSubmit = (e) => {
    e.preventDevfault();
    onAddColor({ id: nanoid(), role, hex, contrastText });
    setRole("primary");
    setHex("#ffffff");
    setContrastText("#000000");
  };

  return (
    <form onSubmit={handleSubmit} className="color-form">
      <label htmlFor="role">Role:</label>
      <br />
      <input
        type="text"
        id="role"
        name="role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <br />
      <label htmlFor="hex">Hex:</label>
      <br />
      <ColorInput id="hex" onChange={setHex} value={hex} />
      <br />
      <label htmlFor="contrast-text">Contrast Text:</label>
      <br />
      <ColorInput
        id="contrast-text"
        onChange={setContrastText}
        value={contrastText}
      />
      <br />
      <button>ADD COLOR</button>
    </form>
  );
}
