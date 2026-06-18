import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export interface Product {
  name: string;
  price: string;
  oldPrice?: string;
  image: string;
  badge?: string;
  href?: string;
}

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="group flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-64 w-full bg-gray-100 overflow-hidden">
        {product.badge && (
          <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full">
            {product.badge}
          </span>
        )}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Quick Add overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <button className="w-full py-3 bg-white/90 backdrop-blur-sm text-gray-900 font-semibold rounded-xl shadow-lg hover:bg-white transition-colors flex items-center justify-center gap-2">
            <ShoppingBag className="w-4 h-4" /> Add to Cart
          </button>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <Link href={product.href || "#"} className="text-lg font-medium text-gray-900 hover:text-indigo-600 transition-colors line-clamp-1 mb-2">
          {product.name}
        </Link>
        <div className="mt-auto flex items-center gap-3">
          <span className="text-lg font-bold text-gray-900">
            {product.price}
          </span>
          {product.oldPrice && (
            <span className="text-sm text-gray-500 line-through">
              {product.oldPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
