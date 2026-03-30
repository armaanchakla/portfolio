const Footer = ({ theme }) => {
  return (
    <div
      className={`mt-2 py-1 flex items-center justify-center backdrop-blur-md border rounded-2xl transition-all duration-500 ${
        theme === "light"
          ? "bg-white/5 backdrop-blur-2xl border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
          : "bg-black/30 backdrop-blur-md border-white/10"
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
