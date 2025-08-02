import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">CS Quiz App</h1>
        <nav className="space-x-6 text-sm">
          <a href="#home" className="hover:text-yellow-400 transition">Home</a>
          <a href="#quiz" className="hover:text-yellow-400 transition">Quiz</a>
          <a href="#about" className="hover:text-yellow-400 transition">About</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
