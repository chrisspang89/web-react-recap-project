export default function Button({ text, onButtonClick }) {
  return (
    <button type="button" onClick={onButtonClick}>
      {text}
    </button>
  );
}
