"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { milestones } from "@/data/milestones";

export function Timeline() {
  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Vertical line */}
      <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -ml-px" />
      
      <div className="space-y-8 relative">
        {milestones.map((milestone, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative flex items-start md:justify-between"
          >
            {/* Year bubble - Mobile */}
            <div className="absolute left-0 md:hidden">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                  {String(milestone.year).slice(2)}
                </div>
                <div className="h-0.5 w-4 bg-primary/20" />
              </div>
            </div>

            {/* Content */}
            <div className={`ml-16 md:ml-0 md:w-5/12 ${
              index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
            }`}>
              <Card className="card-hover">
                <CardContent className="p-4">
                  {/* Year - Desktop */}
                  <div className="hidden md:block text-primary font-bold mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                </CardContent>
              </Card>

              {/* Circle connector - Desktop */}
              <div className={`absolute top-4 hidden md:block ${
                index % 2 === 0 ? "right-[-42px]" : "left-[-42px]"
              }`}>
                <div className="h-5 w-5 rounded-full bg-background border-4 border-primary" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}