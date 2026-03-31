import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const Form = ({ theme }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = form;

    // simple validation
    if (!name || !email || !message) {
      toast.error("Please fill all fields ⚠️");
      return;
    }

    if (message.length < 5 || message.length > 80) {
      toast.error("Message must be between 5 and 80 characters. ⚠️");
      return;
    }

    if (!email.includes("@")) {
      toast.error("Enter a valid email 📧");
      return;
    }

    // success
    toast.success("Message sent successfully 🚀");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={`p-4 sm:p-5 md:p-6 rounded-xl border backdrop-blur-md flex flex-col gap-4 ${
          theme === "light"
            ? "bg-white/10 border-black/10"
            : "bg-white/5 border-white/10"
        }`}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2.5 sm:p-3 rounded-lg bg-transparent border outline-none text-sm"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2.5 sm:p-3 rounded-lg bg-transparent border outline-none text-sm"
        />

        <textarea
          name="message"
          placeholder="Your Message..."
          rows="5"
          value={form.message}
          onChange={handleChange}
          className="w-full p-2.5 sm:p-3 rounded-lg bg-transparent border outline-none text-sm"
        />

        <button
          type="submit"
          className="w-full sm:w-auto px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm rounded-lg bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-medium hover:scale-[1.02] transition"
        >
          Send Message 🚀
        </button>
      </motion.form>
    </>
  );
};

export default Form;
