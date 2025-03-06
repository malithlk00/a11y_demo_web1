import SaleBanner from '@/components/SaleBanner';
import CategoryNav from '@/components/CategoryNav';
import DealsSection from '@/components/DealsSection';
import ProductGrid from '@/components/ProductGrid';
import MoreToLoveSection from '@/components/MoreToLoveSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <CategoryNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SaleBanner />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DealsSection />
        <ProductGrid />
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900">More to love</h2>
        </div>
        <MoreToLoveSection />
      </div>
      <Footer />
    </div>
  );
}