"use client";

import { motion } from "framer-motion";
import { Heart, Lightbulb, Gift, CheckCircle, LucideIcon } from "lucide-react";

interface Reason {
  title: string;
  description: string;
  icon: LucideIcon;
}

const reasons: Reason[] = [
  {
    title: "Personal Touch",
    description:
      "Every event gets our complete dedication and attention. We're not just planners - we're your partners in creating perfect moments.",
    icon: Heart,
  },
  {
    title: "Fresh Perspective",
    description:
      "We bring contemporary ideas and trending concepts while keeping your unique vision at heart. Our fresh approach means creative solutions for your special day.",
    icon: Lightbulb,
  },
  {
    title: "Budget-Friendly Excellence",
    description:
      "We believe magical moments shouldn't break the bank. Our smart planning and industry connections help maximize your budget without compromising on quality.",
    icon: Gift,
  },
  {
    title: "Passionate About Details",
    description:
      "From the perfect flower arrangement to the final goodbye, we obsess over every detail so you don't have to. Your peace of mind is our priority.",
    icon: CheckCircle,
  },
];

export default function WhyChooseUs(): JSX.Element {
  return (
    <section className="py-16 bg-soft-beige">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          The Heartfelt Difference
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                {reason.icon && (
                  <reason.icon className="w-8 h-8 text-soft-rose mr-4" />
                )}
                <h3 className="text-xl font-semibold">{reason.title}</h3>
              </div>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
