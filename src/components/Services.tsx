import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Diverse Event Planning",
    description:
      "From intimate birthdays to grand weddings, we tailor every event to reflect your unique style and needs.",
    image: "/cake.jpg",
  },
  {
    title: "Captured Joy",
    description:
      "Capture every heartfelt moment with our professional photographers, ensuring your memories last a lifetime.",
    image: "/wedding.jpg",
  },
  {
    title: "Gift Wrapping",
    description:
      "Add the perfect touch with our beautifully crafted gift-wrapping services, designed to impress on any occasion.",
    image: "/gifts.jpg",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-neutral-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative aspect-[3/2]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index === 0}
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
