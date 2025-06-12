import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const ContactSection = ({ data, handleContactClick, ArrowRightIcon }) => {
  const { title, description, imageSrc, imageAlt, contactMethods } = data;
  return (
    <section id="contact" className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">{title}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-effect p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                {contactMethods.map((method) => (
                  <motion.div 
                    key={method.label}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300 cursor-pointer"
                    onClick={handleContactClick}
                  >
                    <method.icon className={`h-6 w-6 ${method.color} mr-4`} />
                    <div>
                      <p className="font-medium">{method.label}</p>
                      <p className="text-gray-300">{method.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Button 
                size="lg" 
                className="gradient-bg hover:scale-105 transition-transform duration-300 pulse-glow"
                onClick={handleContactClick}
              >
                <ArrowRightIcon className="mr-2 h-5 w-5" />
                Start a Conversation
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              className="rounded-2xl shadow-2xl floating-animation w-full"
              alt={imageAlt}
              src={imageSrc} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};