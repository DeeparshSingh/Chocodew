"use client";

import { motion } from "framer-motion";
import { milestones } from "@/data/milestones";

export function Timeline() {
  return (
    <div className="max-w-4xl mx-auto relative">
      {/* Vertical line */}
      <motion.div 
        className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-primary/5 via-primary/20 to-primary/5"
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      <div className="space-y-16">
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.year}
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Year bubble */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-semibold backdrop-blur-sm">
                {milestone.year}
              </div>
            </motion.div>

            {/* Content */}
            <div className={`w-5/12 ${index % 2 === 0 ? "pr-16 text-right" : "pl-16 ml-auto"}`}>
              <motion.div
                className="bg-white/50 dark:bg-stone-900/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary/10"
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <h3 className="text-lg font-semibold text-primary mb-2">{milestone.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {milestone.description}
                </p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}