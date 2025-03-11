export default function Input({ label, type = "text", ...props }) {
    return (
      <div className="flex flex-col gap-1">
        {label && <label className="text-sm font-medium">{label}</label>}
        <input
          type={type}
          className="border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500"
          {...props}
        />
      </div>
    );
  }
  