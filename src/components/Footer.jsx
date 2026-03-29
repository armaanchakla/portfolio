const Footer = ({ theme }) => {
  return (
    <div
      className={`mt-2 py-1 flex items-center justify-center backdrop-blur-md border rounded-2xl transition-all duration-500 ${
        theme === "light"
          ? "bg-white/10 border-white/40"
          : "bg-black/30 border-white/10"
      }`}
    >
      <p
        className={`text-xs sm:text-sm md:text-base font-semibold text-center transition-all duration-300 ${
          theme === "light" ? "text-black/90" : "text-white/90"
        }`}
      >
        © {new Date().getFullYear()} armaanchakla. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
