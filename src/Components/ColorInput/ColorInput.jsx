export default function ColorInput({ label, value, onChange, colorType }) {
  return (
    <div className="color-input">
      <label htmlFor={colorType}>{label}</label>
      <br />
      <input
        type="text"
        id={colorType}
        name={colorType}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <input
        type="color"
        id={`${colorType}-picker`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
