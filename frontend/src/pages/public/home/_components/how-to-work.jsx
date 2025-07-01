import React from 'react'
import { motion } from 'framer-motion'

const HowToWork = () => {
  return (
      <section className="py-20 mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          How It Works
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "1. Browse Services",
              desc: "Explore a wide range of services tailored for your needs."
            },
            {
              step: "2. Book Instantly",
              desc: "Select your preferred service, book, and relax."
            },
            {
              step: "3. Enjoy & Review",
              desc: "Experience top-quality service and leave a review."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 text-center"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold mb-3">{item.step}</h3>
              <p className="text-gray-500 dark:text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
  )
}

export default HowToWork
