import Link from 'next/link';
import Button from '@/components/ui/Button';
import { Eye, Shield, MapPin, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-gray-50">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6">
              See Clearer. <br />
              <span className="text-secondary">Look Sharper.</span> <br />
              Live Brighter.
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              At NepGlass, we specialize in premium lens solutions, stylish frames, and trendsetting sunglasses designed to elevate your look and protect your vision.
            </p>
            <div className="flex gap-4">
              <Link href="/products">
                <Button size="lg">Shop Collection</Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg">Our Story</Button>
              </Link>
            </div>
          </div>
          <div className="relative h-full hidden md:block">
            <div className="absolute inset-0 bg-secondary/10 rounded-full blur-3xl -z-10 transform translate-x-1/4 translate-y-1/4" />
            <img
              src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800"
              alt="Stylish Sunglasses"
              className="rounded-2xl shadow-2xl object-cover w-full h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="bg-white">
        <div className="container-custom py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-primary">More Than Just a Visual Aid</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Based in Nepal, we see eyewear as a statement of style, comfort, and confidence.
              We combine quality craftsmanship with modern aesthetics, offering a curated selection
              of products suited for every face, lifestyle, and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-50">
        <div className="container-custom py-20">
          <h2 className="text-center mb-16 text-primary">Discover Our Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Sunglasses', img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=600', slug: 'sunglasses' },
              { title: 'Stylish Frames', img: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80&w=600', slug: 'frames' },
              { title: 'Premium Lenses', img: 'https://images.unsplash.com/photo-1589710304834-03e39c424467?auto=format&fit=crop&q=80&w=600', slug: 'lenses' },
            ].map((cat) => (
              <Link key={cat.slug} href={`/categories/${cat.slug}`} className="group relative overflow-hidden rounded-xl h-96">
                <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
                  <h3 className="text-white mb-0">{cat.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white">
        <div className="container-custom py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Sparkles className="w-8 h-8 text-secondary" />, title: 'Stylish & Versatile', desc: 'From timeless frames to fashion-forward sunglasses.' },
              { icon: <Eye className="w-8 h-8 text-secondary" />, title: 'Vision First', desc: 'High-quality lenses with precision fitting and care.' },
              { icon: <MapPin className="w-8 h-8 text-secondary" />, title: 'Made for Nepal', desc: 'Designed to suit local preferences and everyday needs.' },
              { icon: <Shield className="w-8 h-8 text-secondary" />, title: 'Personalized Service', desc: 'Expert guidance to help you choose what fits best.' },
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-gray-50 rounded-full">{feature.icon}</div>
                <h4 className="text-lg font-bold text-primary mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-24 text-center">
        <div className="container-custom">
          <h2 className="text-white mb-6">Ready to find your perfect pair?</h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
            Experience the NepGlass difference today. Browse our full collection of frames and lenses online or visit us for a personalized fitting.
          </p>
          <Link href="/products">
            <Button variant="secondary" size="lg">Shop All Products</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
