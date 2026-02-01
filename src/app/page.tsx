
import { products } from '@/data/products';

// New Components
import ProductShowcase from '@/components/home/ProductShowcase';
import FeatureSplit from '@/components/home/FeatureSplit';
import WhyNepGlass from '@/components/home/WhyNepGlass';
import Testimonials from '@/components/home/Testimonials';
import FAQSection from '@/components/home/FAQSection';
import Newsletter from '@/components/home/Newsletter';
import HeroSection from '@/components/home/Hero-section';
import TrustStrip from '@/components/home/TrustStrip';
import ShopByCategory from '@/components/home/ShopByCategory';
import LensProcess from '@/components/home/LensProcess';
export default function Home() {
  // Simulate different product lists
  const featuredProducts = products.slice(0, 4);
  const bestSellingProducts = products.slice(0, 4).reverse(); // Just for demo
  const latestProducts = products.slice(1, 5); // Just for demo

  return (
    <div className="overflow-x-hidden">
      {/* 1. Hero Section */}

      <HeroSection />
      {/* 2. Brand Ticker */}

      {/* 3. Trust Strip */}
      {/* 3. Featured Products */}
      <ProductShowcase
        title="Featured Products"
        subtitle="Trending Now"
        products={featuredProducts}
      />

      {/* 4. Feature Split 1 (Image Left) */}
      <FeatureSplit
        title="Crafted for Clarity"
        subtitle="Precision Lenses"
        description="Our lenses are crafted with advanced digital surfacing technology to provide sharper vision in all directions. Whether you need single vision or progressive lenses, we ensure every detail is perfect."
        image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
        ctaText="View Lens Options"
        ctaLink="/products"
      />

      {/* 5. Best Selling Products */}
      <ProductShowcase
        title="Best Selling"
        subtitle="Customer Favorites"
        products={bestSellingProducts}
      />

      {/* 6. Why NepGlass */}
      <WhyNepGlass />

      {/* 7. Feature Split 2 (Image Right / Reverse) */}
      <FeatureSplit
        title="Style That Speaks"
        subtitle="Modern Aesthetics"
        description="We believe eyewear is an expression of your personality. Our collections range from bold, statement-making frames to subtle, minimalist designs that complement your unique style."
        image="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800"
        ctaText="Explore Collections"
        ctaLink="/products"
        reverse={true}
      />
      <LensProcess />
      {/* 8. Latest Products */}
      <ProductShowcase
        title="New Arrivals"
        subtitle="Just In"
        products={latestProducts}
      />

      {/* 9. Shop by Category */}
      <ShopByCategory />
      <TrustStrip />

      {/* 10. Testimonials */}
      <Testimonials />

      {/* 11. FAQ Section */}
      <FAQSection />

      {/* 12. Newsletter */}
      <Newsletter />
    </div>
  );
}
