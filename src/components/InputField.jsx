export default function InputField({ label, type, value, onChange, error }) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} />
      {error && <p className="error-text">{error}</p>}
    </div>
  );
}
