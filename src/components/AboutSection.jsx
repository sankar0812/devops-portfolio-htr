import React from 'react';
import { motion } from 'framer-motion';

export const AboutSection = ({ data }) => {
  const { title, description, imageSrc, imageAlt, features } = data;
  return (
    <section id="about" className="py-20 relative">
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
          >
            <img
              className="rounded-2xl shadow-2xl floating-animation w-full max-w-md mx-auto h-90 md:h-100 object-cover"
              alt={imageAlt}
              src={imageSrc} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <div key={index} className="glass-effect p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <feature.icon className={`h-8 w-8 ${index === 0 ? 'text-blue-400' : index === 1 ? 'text-yellow-400' : 'text-green-400'} mr-3`} />
                  <h3 className="text-2xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-300">
                  {feature.text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};