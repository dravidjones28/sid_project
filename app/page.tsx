"use client"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail} from "lucide-react";
import { FaBehance, FaLinkedin, FaInstagram, FaDribbble } from "react-icons/fa";

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date("2025-12-01T00:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white px-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold mb-4"
      >
        Coming Soon 🚀
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-gray-300 max-w-md mb-8"
      >
        I'm crafting something amazing for the web. Stay tuned for the official
        launch of my new portfolio site.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex gap-6 mb-10 text-xl"
      >
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold">{timeLeft.days}</span>
          <span className="text-gray-400 text-sm">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold">{timeLeft.hours}</span>
          <span className="text-gray-400 text-sm">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold">{timeLeft.minutes}</span>
          <span className="text-gray-400 text-sm">Mins</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold">{timeLeft.seconds}</span>
          <span className="text-gray-400 text-sm">Secs</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3 }}
        className="flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2 max-w-sm w-full mb-10"
      >
        <Mail className="text-gray-400" size={18} />
        <input
          type="email"
          placeholder="Get notified when we launch"
          className="bg-transparent flex-1 px-3 py-2 text-sm focus:outline-none text-white placeholder-gray-400"
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition">
          Notify
        </button>
      </motion.div>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.6 }}
  className="flex gap-6 text-gray-400"
>
  <a
    href="https://www.behance.net/vikasgowtham"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#1769ff] transition"
  >
    <FaBehance size={22} />
  </a>

  <a
    href="https://www.linkedin.com/in/vikasgowtham/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#0A66C2] transition"
  >
    <FaLinkedin size={22} />
  </a>

  <a
    href="https://www.instagram.com/sidartdesign/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#E1306C] transition"
  >
    <FaInstagram size={22} />
  </a>

  <a
    href="https://www.dribble.com/vikasgowtham"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#EA4C89] transition"
  >
    <FaDribbble size={22} />
  </a>
</motion.div>



      {/* <footer className="absolute bottom-6 text-sm text-gray-500">
        © {new Date().getFullYear()}
      </footer> */}
    </div>
  );
}
