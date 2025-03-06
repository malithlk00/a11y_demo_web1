'use client';

import { useState } from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  discount: string;
  image: string;
  rating: number;
  sales: string;
  brand?: string;
  freeShipping?: boolean;
  extraCoins?: boolean;
}

export default function MoreToLoveSection() {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "Memory cards 4GB 8GB 16GB High speed Class 10 TF Card",
      price: "$291.95",
      originalPrice: "$575.06",
      discount: "-49%",
      image: "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      sales: "5000+ sold",
      brand: "OLEOO",
      extraCoins: false
    },
    {
      id: 2,
      name: "Dual USB Micro USB Type C Power Bank 20000mAh",
      price: "$669.43",
      originalPrice: "$1,338.86",
      discount: "-50%",
      image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      sales: "600+ sold",
      brand: "Kebidumei",
      extraCoins: false
    },
    {
      id: 3,
      name: "KZ EDX Pro Earphones Dynamic In Ear Monitors HiFi",
      price: "$1,073.44",
      originalPrice: "$1,700.06",
      discount: "Extra 2% off with coins",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      sales: "10000+ sold",
      brand: "KZ",
      extraCoins: true
    },
    {
      id: 4,
      name: "Crystal Luminous LED light Fidget Spinner",
      price: "$291.95",
      originalPrice: "$757.00",
      discount: "-61%",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      sales: "8000+ sold",
      extraCoins: false
    },
    {
      id: 5,
      name: "Baseus USB Cable for iPhone 6 7 8 Plus X",
      price: "$291.95",
      originalPrice: "$830.47",
      discount: "Extra 5% off with coins",
      image: "https://images.unsplash.com/photo-1600490036275-35f5f1656861?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      sales: "500+ sold",
      brand: "Baseus",
      extraCoins: true
    },
    {
      id: 6,
      name: "TPU bumper case for iphone 12 mini 13 pro max",
      price: "$252.95",
      originalPrice: "$506.31",
      discount: "Extra 2% off with coins",
      image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      sales: "380 sold",
      extraCoins: true
    },
    {
      id: 7,
      name: "Kebidumei Dual USB Micro USB Type C Power Bank",
      price: "$775.99",
      originalPrice: "$1,445.02",
      discount: "-46%",
      image: "https://images.unsplash.com/photo-1588145330162-1c1d6a982f86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      sales: "200+ sold",
      brand: "Kebidumei",
      extraCoins: false
    },
    {
      id: 8,
      name: "1.4m Color phone Wire Cord Rope Protector",
      price: "$168.10",
      originalPrice: "$336.19",
      discount: "Free shipping",
      image: "https://images.unsplash.com/photo-1533310266094-8898a03807dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      sales: "2000+ sold",
      freeShipping: true,
      extraCoins: false
    }
  ]);

  return (
    <div className="mt-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden relative">
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-40 object-cover"
              />
              {product.brand && (
                <div className="absolute top-2 left-2 bg-white text-xs px-1 py-0.5 rounded">
                  {product.brand}
                </div>
              )}
              <button className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow">
                <ShoppingCart className="h-4 w-4 text-gray-500" />
              </button>
            </div>
            
            <div className="p-2">
              <p className="text-xs line-clamp-2 h-8 mb-1">{product.name}</p>
              
              <div className="flex items-center">
                <p className="text-red-500 font-bold text-sm">{product.price}</p>
                <p className="text-gray-400 text-xs line-through ml-1">{product.originalPrice}</p>
              </div>
              
              <div className="flex items-center mt-1">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-2 w-2 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                  ))}
                </div>
                <span className="text-xs text-gray-500 ml-1">{product.sales}</span>
              </div>
              
              <div className="mt-1">
                <span className={`inline-block text-xs px-1 py-0.5 rounded ${
                  product.discount.includes('Extra') 
                    ? 'bg-red-100 text-red-500' 
                    : product.freeShipping 
                      ? 'bg-gray-100 text-gray-500'
                      : 'bg-red-500 text-white'
                }`}>
                  {product.discount}
                </span>
                {product.id % 2 === 0 && (
                  <span className="inline-block ml-1 text-xs px-1 py-0.5 rounded bg-yellow-100 text-yellow-700">
                    Choice
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 flex justify-center">
        <Button variant="outline" className="bg-black text-gray-400 hover:bg-gray-800 px-8 py-2 rounded">
          View more
        </Button>
      </div>
    </div>
  );
}