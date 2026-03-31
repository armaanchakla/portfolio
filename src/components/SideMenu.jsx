import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaCode, FaEnvelope } from "react-icons/fa";

export default function SideMenu({ theme }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const links = [
    { path: "/", icon: <FaHome />, label: "Home" },
    { path: "/project", icon: <FaCode />, label: "Projects" },
    { path: "/contact", icon: <FaEnvelope />, label: "Contact" },
  ];

  const isMobile = window.innerWidth < 640;
  const basePositions = isMobile ? [-50, 0, 50] : [-60, 0, 60];
  const pushDown = isMobile ? 20 : 35; // spacing shift for items below hovered

  return (
    <div className="absolute left-0 top-1/2 -translate-y-1/2 z-40">
      <div className="h-screen">
        <div className="relative w-16 h-full flex items-center">
          {links.map((link, index) => {
            const shouldMoveDown =
              hoveredIndex !== null && index > hoveredIndex;

            const finalPosition =
              basePositions[index] + (shouldMoveDown ? pushDown : 0);

            return (
              <NavLink to={link.path} key={link.path}>
                {({ isActive }) => (
                  <div
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`absolute left-3 flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-lg border transition-all duration-300 hover:scale-125 group ${
                      theme === "dark"
                        ? isActive
                          ? "bg-linear-to-br from-pink-500/30 via-purple-500/30 to-indigo-500/30 border-white/20 text-white shadow-lg"
                          : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"
                        : isActive
                          ? "bg-linear-to-br from-pink-500/30 via-purple-500/30 to-indigo-500/30 border-black/20 text-black shadow-md"
                          : "bg-black/5 border-black/10 text-black/70 hover:bg-black/10"
                    }`}
                    style={{
                      top: `calc(50% + ${finalPosition}px)`,
                    }}
                  >
                    {/* icon */}
                    <span className="text-lg group-hover:scale-110 transition">
                      {link.icon}
                    </span>

                    {/* label */}
                    <span
                      /* hidden sm:block */
                      className={`absolute left-1/2 -translate-x-1/2 z-50 text-[10px] whitespace-nowrap pointer-events-none transition-all duration-300 font-extrabold ${
                        hoveredIndex === index
                          ? "top-full mt-1 opacity-100"
                          : "top-full mt-1 opacity-0"
                      } ${theme === "dark" ? "text-white/80" : "text-black/80"}`}
                    >
                      {link.label}
                    </span>
                  </div>
                )}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}
