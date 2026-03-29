export default function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={`w-16 h-8 flex items-center rounded-full p-1 transition-all duration-300 ${
        theme === "light"
          ? "bg-linear-to-r from-yellow-300 via-orange-300 to-pink-300"
          : "bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500"
      }`}
    >
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs shadow-md transition-all duration-300 ${
          theme === "light"
            ? "translate-x-0 bg-white text-yellow-500"
            : "translate-x-8 bg-black text-white"
        }`}
      >
        {theme === "light" ? "☀️" : "🌙"}
      </div>
    </button>
  );
}
