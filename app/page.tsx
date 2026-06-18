import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Truck, Clock } from "lucide-react";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full bg-gray-900 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
          alt="E-commerce Hero Banner"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
        
        <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 text-sm font-medium mb-6 backdrop-blur-md">
              New Collection 2024
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
              Elevate Your <br /> Everyday Style.
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              Discover our curated collection of premium products designed to bring elegance and functionality to your daily life.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="white"
                size="lg"
                rounded="full"
              >
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="glass"
                size="lg"
                rounded="full"
              >
                Explore Categories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Shop by Category
          </h2>
          <Link href="#" className="hidden sm:flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors">
            View All Categories <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=600&auto=format&fit=crop" },
            { name: "Fashion", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=600&auto=format&fit=crop" },
            { name: "Home & Living", image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=600&auto=format&fit=crop" },
            { name: "Accessories", image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=600&auto=format&fit=crop" },
          ].map((category, index) => (
            <Link key={index} href="#" className="group relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-semibold text-white mb-1 group-hover:-translate-y-2 transition-transform duration-300">
                  {category.name}
                </h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300">
                  Explore items &rarr;
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending Products */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
            Trending Now
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our most sought-after pieces this season. Handpicked for quality and style.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Premium Wireless Headphones", price: "$299.99", oldPrice: "$349.99", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop", badge: "Sale" },
            { name: "Minimalist Leather Watch", price: "$189.00", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop", badge: "New" },
            { name: "Smart Home Speaker", price: "$149.50", image: "https://images.unsplash.com/photo-1589003071515-2c8c4bc15372?q=80&w=600&auto=format&fit=crop" },
            { name: "Ergonomic Office Chair", price: "$399.00", image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=600&auto=format&fit=crop" },
          ].map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>

      {/* Features/Benefits */}
      <section className="bg-gray-50 border-y border-gray-200 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-6 text-indigo-600">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Free Shipping</h3>
              <p className="text-gray-600">
                Enjoy free standard shipping on all orders over $100. Delivered safely to your door.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-6 text-indigo-600">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Payments</h3>
              <p className="text-gray-600">
                Shop with confidence knowing your transactions are protected by industry-leading encryption.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-6 text-indigo-600">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Our dedicated support team is available around the clock to assist you with any questions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
