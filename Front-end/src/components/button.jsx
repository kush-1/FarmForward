import React from "react";
import { motion } from "framer-motion";

const Button = ({ label, onClick, variant = "primary" }) => {
  const variants = {
    primary: "bg-green-600 text-white hover:bg-green-700",
    secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`py-2 px-4 rounded-xl font-medium transition ${variants[variant]}`}
    >
      {label}
    </motion.button>
  );
};

export default Button;
