import { Link } from "react-router-dom";

const NotFoundPage = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <>
      {/* top bottom margin */}
      <div className="mt-10 md:mt-14 lg:mt-16 mb-10">
        <div className="flex flex-col justify-center items-center text-center px-4">
          <h1
            className={`text-6xl sm:text-8xl md:text-[120px] font-bold leading-none ${
              isDark ? "text-white/90" : "text-black/90"
            }`}
          >
            404
          </h1>

          <p
            className={`text-lg sm:text-2xl md:text-[40px] mt-2 mb-5 ${
              isDark ? "text-white/90" : "text-black/90"
            }`}
          >
            Oops! This page doesn’t exist.
          </p>

          <Link
            to="/"
            className={`px-4 sm:px-5 py-2 rounded-lg font-medium transition duration-300 ${
              isDark
                ? "bg-sky-800 text-white/90 hover:bg-sky-900"
                : "bg-sky-500 text-black/90 hover:bg-sky-600"
            }`}
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
