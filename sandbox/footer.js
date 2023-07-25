import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Your Name</p>
      <div className="social-links">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        {/* Add more links if needed */}
      </div>
    </footer>
  );
};

export default Footer;
