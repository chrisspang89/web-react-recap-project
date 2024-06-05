import "./Color.css";
import Button from "../Button/Button";
import { useState } from "react";

export default function Color({ color, onDelete }) {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      {showDeleteConfirmation ? (
        <>
          <p className="color-card-headline">Really delete?</p>
          <Button
            text="Cancel"
            onButtonClick={() => setShowDeleteConfirmation(false)}
          />
          <Button text="Delete" onButtonClick={() => onDelete(color.id)} />
        </>
      ) : (
        <>
          <Button
            text="Delete"
            onButtonClick={() => setShowDeleteConfirmation(true)}
          />
        </>
      )}
    </div>
  );
}
