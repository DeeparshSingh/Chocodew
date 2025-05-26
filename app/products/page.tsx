import { ProductTabs } from "@/components/products/product-tabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vending Machines & Premixes",
  description: "Explore our range of premium vending machines and beverage premixes - coffee, tea, soup, and more. ISO 9001:2015 certified quality."
};

export default function ProductsPage() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-neutral-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Our Premium Products</h1>
          <p className="text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Chocodew offers a comprehensive range of high-quality vending machines and premium 
            beverage mixes that deliver exceptional taste and reliability.
          </p>
        </div>

        <ProductTabs />
      </div>
    </div>
  );
}