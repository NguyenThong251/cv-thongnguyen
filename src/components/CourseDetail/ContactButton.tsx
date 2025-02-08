import React from 'react';

const ContactButton: React.FC = () => {
  return (
    <button className="px-8 py-3 text-white rounded-full bg-gradient-to-r from-[#42d392] to-[#647eff] hover:from-[#647eff] hover:to-[#42d392] transition-all duration-300 relative overflow-hidden">
      <span className="relative z-10">Contact Us</span>
      <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
    </button>
  );
};

export default ContactButton;