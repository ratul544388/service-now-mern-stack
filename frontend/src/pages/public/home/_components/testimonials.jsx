import React from 'react'
import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
      <section className="py-20 bg-gray-100 rounded-2xl dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl font-bold mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            What Our Users Say
          </motion.h2>
          <div className="grid gap-10 md:grid-cols-3">
            {["Amazing Service!", "Very Reliable.", "Super Easy to Book."].map((quote, i) => (
              <motion.div
                key={i}
                className="bg-white dark:bg-gray-900 rounded-xl shadow p-6"
                whileHover={{ scale: 1.02 }}
              >
                <p className="mb-4 italic text-gray-600 dark:text-gray-300">“{quote}”</p>
                <div className="flex items-center justify-center gap-3">
                  <img
                    src={`https://i.pravatar.cc/30?img=${i + 5}`}
                    alt="User"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm font-medium">User {i + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Testimonials
