import { useState } from "react";
import { nanoid } from "nanoid";
import ColorInput from "../ColorInput/ColorInput";

export default function ColorForm() {
  return (
    <form className="color-form">
      <label htmlFor="role">Role</label>
      <input type="text" id="role" name="role" defaultValue={""} />
      <br />
      <label htmlFor="role">Hex</label>
      <ColorInput />
    </form>
  );
}

const element = <ColorForm />;
