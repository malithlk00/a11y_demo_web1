'use client';

import { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function CategoryNav() {
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  let hideMenuTimeout: NodeJS.Timeout;

  const handleMouseEnter = () => {
    clearTimeout(hideMenuTimeout);
    setShowCategoryMenu(true);
  };

  const handleMouseLeave = () => {
    hideMenuTimeout = setTimeout(() => setShowCategoryMenu(false), 200);
  };

  const categories = [
    { name: 'All Categories', hasDropdown: true },
    { name: 'Bundle deals', highlight: true },
    { name: 'Weekly deals' },
    { name: 'Top Brands' },
    { name: 'Choice' },
    { name: 'Home & Garden' },
    { name: 'Hair Extensions & Wigs' },
    { name: "Men's Clothing" },
    // { name: 'More', hasDropdown: true },
  ];

  const categoryMenuItems = [
    { name: 'Home & Garden', icon: '🏠' },
    { name: 'Hair Extensions & Wigs', icon: '💇' },
    { name: "Men's Clothing", icon: '👔' },
    { name: 'Accessories', icon: '👜' },
    { name: 'Consumer Electronics', icon: '📱' },
    { name: 'Home Improvement & Lighting', icon: '💡' },
    { name: 'Home Appliances', icon: '🔌' },
    { name: 'Automotive & Motorcycle', icon: '🏍️' },
    { name: 'Luggages & Bags', icon: '🧳' },
    { name: 'Shoes', icon: '👟' },
    { name: 'Special Occasion Costume', icon: '🎭' },
    { name: "Women's Clothing", icon: '👗' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Desktop view - horizontal categories */}
          <div 
            className="hidden md:flex items-center space-x-8 h-12 overflow-x-auto no-scrollbar"
          >
            {categories.map((category, index) => (
              <div 
                key={index} 
                data-category={index === 0 ? 'all-categories' : undefined}
                className={`flex items-center whitespace-nowrap cursor-pointer ${
                  category.highlight ? 'text-pink-500 font-medium' : 'text-gray-700'
                }`}
                onMouseEnter={index === 0 ? handleMouseEnter : undefined}
                onMouseLeave={index === 0 ? handleMouseLeave : undefined}
              >
                {index === 0 && (
                  <span className="mr-1">☰</span>
                )}
                {category.name}
                {category.hasDropdown && (
                  <ChevronDown className="ml-1 h-4 w-4" />
                )}
              </div>
            ))}
          </div>

          {/* Category dropdown menu */}
          {showCategoryMenu && (
            <div 
              className="absolute z-50 bg-white shadow-lg border border-gray-200 rounded-b-md w-full md:w-64 left-0 md:left-4 mt-0.5"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {categoryMenuItems.map((item, index) => (
                <a 
                  key={index}
                  href="#"
                  className="flex items-center px-4 py-2.5 hover:bg-gray-50 cursor-pointer text-gray-700"
                >
                  <span className="mr-3 w-6 text-center text-lg">{item.icon}</span>
                  <span className="text-sm">{item.name}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
