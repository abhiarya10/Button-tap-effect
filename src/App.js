import React from "react";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="app-main-body">
      <motion.button whileTap={{ scale: 0.75 }} className="motion-div">
        <p className="text">Click me</p>
      </motion.button>
    </div>
  );
}

export default App;
