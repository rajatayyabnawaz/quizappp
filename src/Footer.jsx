import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white mt-12">
      <div className="max-w-5xl mx-auto px-4 py-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} CS Quiz App. All rights reserved.</p>
        <p className="text-xs mt-1">Made with ❤️ by Tayyab Nawaz</p>
      </div>
    </footer>
  );
};

export default Footer;
