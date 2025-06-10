import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router'

const Banner = () => {
  return (
      <section className="relative rounded-2xl w-full h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center px-4"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 text-white drop-shadow-xl">
            Find the Right Service, Anytime, Anywhere
          </h1>
          <p className="text-lg md:text-xl mb-6 text-white/90">
            From expert consultations to beauty, repair, and educational help — book what you need in a click.
          </p>
          <Link
            to="/services"
            className="px-6 py-3 bg-white text-indigo-600 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            Explore Services
          </Link>
        </motion.div>
      </section>
  )
}

export default Banner
