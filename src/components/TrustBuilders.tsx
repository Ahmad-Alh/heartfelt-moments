import { motion } from "framer-motion"

const trustItems = [
  { label: "Events Planned", value: "1000+" },
  { label: "Happy Clients", value: "500+" },
  { label: "Years of Experience", value: "10+" },
  { label: "Industry Awards", value: "15" },
]

export default function TrustBuilders() {
  return (
    <section className="py-16 bg-soft-beige">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-soft-rose mb-2">{item.value}</div>
              <div className="text-gray-600">{item.label}</div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Our Certifications</h3>
          <div className="flex justify-center space-x-4">
            {/* Add certification logos here */}
            <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
            <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
            <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

