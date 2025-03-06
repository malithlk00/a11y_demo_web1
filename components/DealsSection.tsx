export default function DealsSection() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-center mb-8">Today's deals</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="bg-white rounded-lg shadow p-4 md:p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg md:text-xl font-bold">Bestsellers</h4>
            <div className="flex items-center bg-[#fff9e6] text-[#ff9800] px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">
              <span className="mr-1">🔥</span>
              Top price & quality picks
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1626379953822-baec19c3accd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                className="w-full aspect-square object-cover rounded-lg mb-2"
                alt="Magcubic Projector"
              />
              <p className="text-xs line-clamp-2">Magcubic Projector HY300 Pro 4K Android 11 Dual WiFi</p>
              <p className="text-red-500 font-bold text-sm">$15,008.05</p>
              <p className="text-gray-400 text-xs line-through">$31,106.73</p>
              <div className="flex items-center mt-1">
                <span className="text-yellow-400">★</span>
                <span className="text-xs ml-1">4.7</span>
                <span className="text-xs text-gray-500 ml-2">100K+ sold</span>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1599409636295-e3cf3538f212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                className="w-full aspect-square object-cover rounded-lg mb-2"
                alt="Game Console"
              />
              <p className="text-xs line-clamp-2">128G R365 Retro Handheld Video Game Console</p>
              <p className="text-red-500 font-bold text-sm">$10,790.88</p>
              <p className="text-gray-400 text-xs line-through">$32,516.79</p>
              <div className="flex items-center mt-1">
                <span className="text-yellow-400">★</span>
                <span className="text-xs ml-1">4.7</span>
                <span className="text-xs text-gray-500 ml-2">50,000+ sold</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4 md:p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg md:text-xl font-bold">SuperDeals</h4>
            <div className="flex items-center bg-[#ffebee] text-[#f44336] px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">
              <span className="mr-1">🔴</span>
              Up to 70% off
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Drone" 
                  className="w-full aspect-square object-cover rounded-lg mb-2"
                />
                <div className="absolute top-1 left-1 bg-red-500 text-white text-xs px-1 rounded">
                  -70%
                </div>
              </div>
              <p className="text-xs line-clamp-2">New E99 PRO Drones GPS Professional 8K with HD Camera</p>
              <p className="text-red-500 font-bold text-sm">$2,419.80</p>
              <p className="text-gray-400 text-xs line-through">$8,177.34</p>
            </div>
            
            <div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1585515320310-259814833e62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Egg cooker" 
                  className="w-full aspect-square object-cover rounded-lg mb-2"
                />
                <div className="absolute top-1 left-1 bg-red-500 text-white text-xs px-1 rounded">
                  -78%
                </div>
              </div>
              <p className="text-xs line-clamp-2">Breakfast artifact new popular household egg cooker</p>
              <p className="text-red-500 font-bold text-sm">$901.86</p>
              <p className="text-gray-400 text-xs line-through">$4,143.08</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4 md:p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg md:text-xl font-bold">Big Save</h4>
            <div className="flex items-center bg-[#e8f5e9] text-[#4caf50] px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">
              <span className="mr-1">🔴</span>
              500+ Brands
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="RC Car" 
                className="w-full aspect-square object-cover rounded-lg mb-2"
              />
              <p className="text-xs line-clamp-2">2.4G RC Drift Car 1/43 4WD Remote Control Car</p>
              <p className="text-red-500 font-bold text-sm">$8,524.50</p>
              <p className="text-gray-400 text-xs line-through">$17,527.52</p>
              <p className="text-xs text-green-600">You save: $9,003.02</p>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Dash Cam" 
                className="w-full aspect-square object-cover rounded-lg mb-2"
              />
              <p className="text-xs line-clamp-2">2K Dash Camera For Car DVR Dash Cam In The Car</p>
              <p className="text-red-500 font-bold text-sm">$8,022.26</p>
              <p className="text-gray-400 text-xs line-through">$17,224.14</p>
              <p className="text-xs text-green-600">You save: $9,201.88</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}