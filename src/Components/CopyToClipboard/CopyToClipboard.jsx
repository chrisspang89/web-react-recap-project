import { useState, useEffect } from "react";
import Button from "../Button/Button";
Button;

export default function CopyToClipboard({ hex }) {
  const [copied, setCopied] = useState(false);

  const handleCopyClipboard = async () => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(true);
      console.log(`Copied: ${hex}`);
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };

  useEffect(() => {
    if (copied) {
      console.log("Starting timeout to reset copied state");
      const timeout = setTimeout(() => setCopied(false), 3000);
      return () => clearTimeout(timeout);
    }
  }, [copied]);

  return (
    <>
      <Button
        text={copied ? "Color copied!" : "Copy"}
        onButtonClick={handleCopyClipboard}
      />
    </>
  );
}
