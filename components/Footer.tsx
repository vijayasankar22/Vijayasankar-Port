import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-[#d6044a]/20">
      <div className="container mx-auto px-6 md:px-12 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Vijayasankar P</p>
        
      </div>
    </footer>
  );
};

export default Footer;
