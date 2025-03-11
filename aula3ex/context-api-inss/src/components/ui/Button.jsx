export default function Button({ children, onClick, type = "button", ...props }) {
    return (
      <button
        type={type}
        onClick={onClick}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        {...props}
      >
        {children}
      </button>
    );
  }
  