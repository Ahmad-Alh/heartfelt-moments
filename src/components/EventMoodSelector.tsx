"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const moods = [
  { name: "Romantic", color: "bg-blush-pink" },
  { name: "Elegant", color: "bg-subtle-gold" },
  { name: "Rustic", color: "bg-soft-beige" },
  { name: "Modern", color: "bg-neutral-cream" },
  { name: "Whimsical", color: "bg-soft-rose" },
]

export default function EventMoodSelector() {
  const [selectedMood, setSelectedMood] = useState(null)

  return (
    <section className="py-16 bg-neutral-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Find Your Event Mood</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {moods.map((mood) => (
            <motion.button
              key={mood.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedMood(mood.name)}
              className={`${
                mood.color
              } px-6 py-3 rounded-full text-neutral-cream font-semibold transition duration-300 ${
                selectedMood === mood.name ? "ring-4 ring-subtle-gold" : ""
              }`}
            >
              {mood.name}
            </motion.button>
          ))}
        </div>
        {selectedMood && (
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mt-8 text-lg">
            You've selected a {selectedMood} mood. Let's create something beautiful together!
          </motion.p>
        )}
      </div>
    </section>
  )
}

