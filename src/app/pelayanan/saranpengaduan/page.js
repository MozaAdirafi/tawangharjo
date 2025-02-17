import React from 'react';

const ComplaintPage = () => {
  const whatsappNumber = '+6285165844130';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center bg-white p-8 rounded-xl shadow-2xl max-w-md">
        <div className="mb-6">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            className="w-24 h-24 text-green-500 mx-auto mb-4"
          >
            <path d="M17.6 18.4l3.2 2.2c.3.2.7 0 .7-.4V4.8c0-1-.8-1.8-1.8-1.8H4.4C3.4 3 2.6 3.8 2.6 4.8v15.2c0 .4.4.6.7.4l3.2-2.2h11.1z" stroke="#25D366" strokeWidth="2"/>
            <path d="M8 9h8M8 13h5.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <h1 className="text-3xl font-bold text-gray-800">Ada Keluhan?</h1>
          <p className="text-gray-600 mt-2">Hubungi kami langsung melalui WhatsApp</p>
        </div>
        
        <a 
          href={whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full inline-block bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300"
        >
          Kirim Keluhan via WhatsApp
        </a>
        
        <div className="mt-4 text-sm text-gray-500">
          Kami siap mendengarkan dan membantu Anda
        </div>
      </div>
    </div>
  );
};

export default ComplaintPage;