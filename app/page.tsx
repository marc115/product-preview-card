import { ProductCard } from "@/components/ProductCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center w-screen h-screen bg-cream p-5">
      <ProductCard />
    </main>
  );
}
