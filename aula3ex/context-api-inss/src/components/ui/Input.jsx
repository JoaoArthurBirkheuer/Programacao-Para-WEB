export default function Input({ label, type = "text", ...props }) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        {label && <label style={{ fontSize: "14px", fontWeight: "500" }}>{label}</label>}
        <input
          type={type}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "8px",
            outline: "none",
            fontSize: "16px",
            transition: "border-color 0.2s ease-in-out",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#007bff")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          {...props}
        />
      </div>
    );
  }
  