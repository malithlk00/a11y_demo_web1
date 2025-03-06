'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, ShoppingCart, User, ChevronDown, MessageCircle, Heart, CreditCard, Settings, Building2, AlertCircle, Shield, HelpCircle, FileWarning, Accessibility } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  let hideMenuTimeout: NodeJS.Timeout;

  const popularSearches = [
    'glueless wig human hair',
    'woman clothing',
    'man shoes',
    'iphone 14 pro max',
    '99cents items free',
    'press on nails',
    'ear buds wireless',
    'y2k clothes',
    'makeup',
    'highlights'
  ];

  const suggestedCategories = [
    { name: 'Home Appliances', items: [
      { name: 'Air Purifier', image: 'https://images.unsplash.com/photo-1585417791023-a5a6164c714c?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
      { name: 'Humidifier', image: 'https://images.unsplash.com/photo-1585417791023-a5a6164c714c?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
      { name: 'Refrigerators', image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
      { name: 'Electric Hair Brushes', image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
      { name: 'Hair Dryer', image: 'https://images.unsplash.com/photo-1522337094846-8a2d95f02867?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' }
    ]}
  ];

  const userMenuItems = [
    { type: 'auth', items: [
      { name: 'Sign in', primary: true },
      { name: 'Register', link: true }
    ]},
    { type: 'main', items: [
      { name: 'My Orders', icon: CreditCard },
      { name: 'My Coins', icon: Settings },
      { name: 'Message Center', icon: MessageCircle },
      { name: 'Payment', icon: CreditCard },
      { name: 'Wish List', icon: Heart },
      { name: 'My Coupons', icon: CreditCard }
    ]},
    { type: 'settings', title: 'Settings', items: [
      { name: 'AliExpress Business', icon: Building2 },
      { name: 'DS Center', icon: Settings },
      { name: 'Seller Log In', icon: User },
      { name: 'Buyer Protection', icon: Shield },
      { name: 'Help Center', icon: HelpCircle },
      { name: 'Disputes & Reports', icon: AlertCircle },
      { name: 'Report IPR infringement', icon: FileWarning },
      { name: 'Accessibility', icon: Accessibility },
      { name: 'Penalties information', icon: AlertCircle }
    ]}
  ];

  const handleSearchFocus = () => {
    setShowSearchSuggestions(true);
  };

  const handleMouseEnter = () => {
    setShowUserMenu(true);
  };

  const handleMouseLeave = () => {
    //setShowUserMenu(false);
    hideMenuTimeout = setTimeout(() => setShowUserMenu(false), 250);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchSuggestions(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-4 md:h-16 space-y-4 md:space-y-0">
          {/* Logo */}
          <div className="flex items-center justify-between">
            <a href="/" className="flex-shrink-0">
              <h1 className="text-xl font-bold text-orange-500">A11YExpress</h1>
            </a>
            <div className="flex items-center space-x-4 md:hidden">
              <ShoppingCart className="h-6 w-6" />
              <User className="h-6 w-6" />
            </div>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-2xl mx-0 md:mx-4" ref={searchRef}>
            <div className="relative">
              <Input
                type="text"
                placeholder="plus size clearance sale"
                className="w-full h-10 pl-4 pr-10 rounded-full border border-gray-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={handleSearchFocus}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full bg-black">
                  <Search className="h-4 w-4 text-white" />
                </Button>
              </div>
            </div>

            {/* Search suggestions dropdown */}
            {showSearchSuggestions && (
              <div className="absolute z-50 bg-white shadow-lg border border-gray-200 rounded-md w-full mt-1">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4">
                  <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-4">
                    <h3 className="font-medium text-sm mb-2">Discover more</h3>
                    <ul className="space-y-2">
                      {popularSearches.map((search, index) => (
                        <li key={index}>
                          <a href="#" className="text-xs text-blue-600 hover:underline">{search}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="md:col-span-4">
                    {suggestedCategories.map((category, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="font-medium text-sm">{category.name}</h3>
                          <a href="#" className="text-xs text-blue-600">Other recommendations</a>
                        </div>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                          {category.items.map((item, itemIndex) => (
                            <a 
                              key={itemIndex} 
                              href="#" 
                              className="flex flex-col items-center text-center hover:bg-gray-50 p-2 rounded"
                            >
                              <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-16 h-16 object-cover rounded mb-1" 
                              />
                              <span className="text-xs">{item.name}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center">
              <img 
                src="https://ae01.alicdn.com/kf/S7dba031b1bef4c1c9f3c22000c7a8c2cM.png" 
                alt="Download app" 
                className="h-5 w-5 mr-1" 
              />
              <span className="text-xs">Download the<br />A11YExpress app</span>
            </div>
            
            <div className="flex items-center">
              <span className="text-sm mr-1">EN</span>
              <span className="text-sm mr-1">/</span>
              <span className="text-sm mr-1">USD</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            
            <div 
              className="flex items-center cursor-pointer relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={userMenuRef}
            >
              <User className="h-5 w-5 mr-1" />
              <div className="text-xs">
                Welcome<br />
                <span className="text-blue-600">Sign in / Register</span>
              </div>

              {/* User menu dropdown */}
              {showUserMenu && (
                <div className="absolute z-50 top-full right-0 mt-1 w-64 bg-white shadow-lg border border-gray-200 rounded-md py-2">
                  {userMenuItems.map((section, sectionIndex) => (
                    <div key={sectionIndex} className={sectionIndex > 0 ? 'border-t border-gray-200 mt-2 pt-2' : ''}>
                      {section.title && (
                        <h3 className="px-4 py-1 text-xs text-gray-500">{section.title}</h3>
                      )}
                      {section.type === 'auth' ? (
                        <div className="px-4 py-2 space-y-2">
                          <Button className="w-full bg-black text-white hover:bg-gray-800">
                            Sign in
                          </Button>
                          <div className="text-center">
                            <a href="#" className="text-sm text-blue-600 hover:underline">
                              Register
                            </a>
                          </div>
                        </div>
                      ) : (
                        <div className="py-1">
                          {section.items.map((item, itemIndex) => (
                            <a
                              key={itemIndex}
                              href="#"
                              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            >
                              {item.icon && <item.icon className="h-4 w-4 mr-3 text-gray-400" />}
                              {item.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}