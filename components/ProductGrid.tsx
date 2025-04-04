'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  discount: string;
  image: string;
  rating: number;
  sales: string;
}


export default function ProductGrid() {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "Magcubic Projector HY300 Pro 4K Android 11 Dual WiFi Bluetooth",
      price: "$15,008.05",
      originalPrice: "$31,106.73",
      discount: "52% OFF",
      image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      sales: "100K+ sold"
    },
    {
      id: 2,
      name: "128G R365 Retro Handheld Video Game Console Portable Mini Game Player",
      price: "$10,790.88",
      originalPrice: "$32,516.79",
      discount: "67% OFF",
      image: "https://images.unsplash.com/photo-1599409636295-e3cf3538f212?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      sales: "50,000+ sold"
    },
    {
      id: 3,
      name: "New E99 PRO Drones GPS Professional 8K with HD Camera",
      price: "$2,419.80",
      originalPrice: "$8,177.34",
      discount: "70% OFF",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      rating: 4.5,
      sales: "10K+ sold"
    },
    {
      id: 4,
      name: "Breakfast artifact new popular household egg cooker",
      price: "$901.86",
      originalPrice: "$4,143.08",
      discount: "78% OFF",
      image: "https://images.unsplash.com/photo-1585515320310-259814833e62?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      sales: "5K+ sold"
    },
    {
      id: 5,
      name: "2.4G RC Drift Car 1/43 4WD Remote Control Car",
      price: "$8,524.50",
      originalPrice: "$17,527.52",
      discount: "51% OFF",
      image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      sales: "1K+ sold"
    },
    {
      id: 6,
      name: "2K Dash Camera For Car DVR Dash Cam In The Car",
      price: "$8,022.26",
      originalPrice: "$17,224.14",
      discount: "53% OFF",
      image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      sales: "2K+ sold"
    },
    {
      id: 7,
      name: "Wireless Earbuds Bluetooth 5.3 Headphones with Mic",
      price: "$1,209.90",
      originalPrice: "$4,839.60",
      discount: "75% OFF",
      image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      sales: "50K+ sold"
    },
    {
      id: 8,
      name: "Smart Watch Men Women Heart Rate Monitor Fitness Tracker",
      price: "$3,629.70",
      originalPrice: "$12,099.00",
      discount: "70% OFF",
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      sales: "100K+ sold"
    }
  ]);

  return (
    <div className="mt-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="relative">
              <img 
                src={product.image} 
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 left-2" style={{backgroundColor: '#ffd700', color: '#ffffff'}}>
                {product.discount}
              </div>
            </div>
            
            <div className="p-3">
              <div className="text-sm line-clamp-2 h-10 mb-2" style={{color: '#a9a9a9'}}>{product.name}</div>
              <div className="text-red-500 font-bold" style={{color: '#ff69b4'}}>{product.price}</div>
              <div className="text-gray-400 text-xs line-through">{product.originalPrice}</div>
              
              <div className="flex items-center mt-2">
                <div className="flex items-center">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs ml-1">{product.rating}</span>
                </div>
                <span className="text-xs text-gray-500 ml-2">{product.sales}</span>
              </div>
              <div onClick={() => {}} className="mt-2 px-4 py-2 text-white text-center cursor-pointer" style={{backgroundColor: '#98fb98', color: '#ffffff'}}>
                Add to cart
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}