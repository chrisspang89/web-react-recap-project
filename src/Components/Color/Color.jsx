import "./Color.css";
import Button from "../Button/Button";
import ColorForm from "../ColorForm/ColorForm";
import CopyToClipboard from "../CopyToClipboard/CopyToClipboard";

import ContrastChecker from "../ContrastChecker/ContrastChecker";


import { useState } from "react";

export default function Color({
  color,
  onDelete,
  onEdit,
  isEditting,
  onUpdate,
}) {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleCloseEdit = () => {
    onEdit(null);
  };

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <CopyToClipboard hex={color.hex} />
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      <ContrastChecker hex={color.hex} contrastText={color.contrastText} />

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
          <Button text="Edit" onButtonClick={() => onEdit(color.id)} />
          {isEditting && (
            <>
              <ColorForm color={color} onUpdate={onUpdate} isEditMode={true} />
              <Button text="Close" onButtonClick={handleCloseEdit} />
            </>
          )}
        </>
      )}
    </div>
  );
}
