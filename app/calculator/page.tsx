import { CalculatorForm } from "@/components/calculator/calculator-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premix Calculator",
  description: "Calculate your monthly premix requirements for tea, coffee, or soup with our easy-to-use premix calculator.",
};

export default function CalculatorPage() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-neutral-50/50 to-white">
      <div className="max-w-6xl mx-auto px-4 pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="text-center mb-6 md:mb-10">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Premix Calculator</h1>
          <p className="text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Estimate your monthly premix needs in just 30 seconds! Our calculator helps you 
            determine exactly how much premix you'll need based on your consumption.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <CalculatorForm />
        </div>
      </div>
    </div>
  );
}