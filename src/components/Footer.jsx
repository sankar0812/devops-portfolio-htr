import React from 'react';
import { motion } from 'framer-motion';

export const Footer = ({ data }) => {
  const { socialLinks } = data;
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold gradient-text"> AWS DevOps Engineer ☁️ </span>
            <p className="text-gray-400 mt-2">Building the future of infrastructure</p>
          </div>
          {/* <div className="flex items-center space-x-2">
           <img src="/assets/devops-logo.png" alt="DevOps Logo" className="h-8 w-8 object-contain" />
           <span className="text-2xl font-bold gradient-text">DevOps </span>
           <p className="text-gray-400 mt-2">Building the future of infrastructure</p>
         </div> */}
  {/* // <footer className="py-12 border-t border-white/10">
  // <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //   <div className="flex flex-col md:flex-row justify-between items-center">
  //     <div className="mb-4 md:mb-0">
  //       <span className="text-2xl font-bold gradient-text">
  //         DevOps <span role="img" aria-label="infinity">♾️</span>
  //       </span>
  //       <p className="text-gray-400 mt-2">Building the future of infrastructure</p>
  //     </div> */}



          
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={link.handler}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <link.icon className="h-6 w-6" />
              </motion.button>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DevOps ☁️. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};