import { Facebook, Twitter, Instagram, MessageCircle, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-16 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Customer service</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-gray-900">Transaction Services Agreement for non-EU/UK Consumers</a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-gray-900">Terms and Conditions for EU/EEA/UK Consumers (Transactions)</a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-gray-900">Take our feedback survey</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Shopping with us</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-gray-900">Making payments</a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-gray-900">Delivery options</a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-400 hover:text-gray-900">Buyer Protection</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Collaborate with us</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">Partnerships</a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">Affiliate program</a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">DS Center</a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">Seller Log In</a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">中国卖家入驻</a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900">Non-Chinese Seller Registration</a>
              </li>
            </ul>
          </div>
          
          <div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Pay with</h3>
              <div className="flex space-x-3 mb-6">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-6 object-contain"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6 object-contain" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/JCB_logo.svg/2560px-JCB_logo.svg.png" alt="JCB" className="h-6 object-contain" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png" alt="American Express" className="h-6 object-contain" />
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Stay connected</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com" className="text-gray-600 hover:text-gray-900">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://www.twitter.com" className="text-gray-600 hover:text-gray-900">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com" className="text-gray-600 hover:text-gray-900">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.facebook.com" className="text-gray-600 hover:text-gray-900">
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a href="https://www.whatsapp.com" className="text-gray-600 hover:text-gray-900">
                  <Phone className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            © 2025 A11YExpress.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}