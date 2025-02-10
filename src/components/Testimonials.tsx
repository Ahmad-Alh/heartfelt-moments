"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    name: "Njoud",
    text: "Its absolutely perfeeectttt! I can sense everything was maadee with loovveeee",
  },
  {
    name: "Sara",
    text: "So beautiful and elegant! I had expectations but everything literally exceeded it!",
  },
  {
    name: "Afra",
    text: "Not the first time and surely won't be the last. Will always love your touches and will definitely come back to book my upcoming events!",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-rose-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">What Our Clients Say</h2>
        <div className="relative max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <p className="text-lg mb-4">"{testimonials[currentIndex].text}"</p>
              <p className="font-semibold">- {testimonials[currentIndex].name}</p>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-rose-500 text-white p-2 rounded-full"
          >
            &#8592;
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-rose-500 text-white p-2 rounded-full"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  )
}

