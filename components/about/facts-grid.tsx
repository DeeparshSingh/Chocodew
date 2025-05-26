"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Award, Building, Coffee, Truck, Users, Clock } from "lucide-react";

const facts = [
  {
    icon: <Building className="h-8 w-8 text-primary" />,
    title: "Headquarters",
    value: "Ludhiana, Punjab",
  },
  {
    icon: <Coffee className="h-8 w-8 text-primary" />,
    title: "Installations",
    value: "2,000+",
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Certification",
    value: "ISO 9001:2015",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Team Members",
    value: "50+",
  },
  {
    icon: <Truck className="h-8 w-8 text-primary" />,
    title: "Service Network",
    value: "15 States",
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Experience",
    value: "Since 2007",
  },
];

export function FactsGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Chocodew Facts</h2>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          Some key facts and figures about our company and operations
        </p>
      </div>
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {facts.map((fact, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="card-hover h-full border-none shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  {fact.icon}
                </div>
                <h3 className="text-lg font-medium mb-1">{fact.title}</h3>
                <p className="text-2xl font-bold text-primary">{fact.value}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}