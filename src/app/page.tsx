import Link from 'next/link';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/shop/ProductCard';
import { products } from '@/data/products';
import {
  Eye,
  Shield,
  MapPin,
  Sparkles,
  Star,
  ChevronRight,
  Mail,
  Phone,
  ArrowRight
} from 'lucide-react';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  const testimonials = [
    { name: "Rajesh", role: "Teacher, Kathmandu", text: "NepGlass provided the best experience I've had getting new lenses. The personalized service was exceptional.", rating: 5 },
    { name: "Sita", role: "Professional, Lalitpur", text: "The frames are stylish and durable. I love that they are designed with local preferences in mind.", rating: 5 },
    { name: "Anish", role: "Student, Pokhara", text: "Great value for money. The blue-cut lenses have really helped with my screen time during studies.", rating: 4 }
  ];

  const homepageFaqs = [
    { q: "How long does delivery take?", a: "Inside Kathmandu valley, we deliver within 24-48 hours." },
    { q: "Do you offer warranty?", a: "Yes, we offer a 6-month warranty on manufacturing defects." },
    { q: "Can I get prescription lenses?", a: "Absolutely. We specialize in precision-fitted prescription lenses." }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-white">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
          <div className="z-10 py-12">
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
              Premium Eyewear <br />
              <span className="text-secondary">Designed for Nepal.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
              Experience the perfect blend of style, comfort, and precision. Elevating your everyday look while protecting your most precious asset—your vision.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products">
                <Button size="lg">Explore Collection</Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg">Our Story</Button>
              </Link>
            </div>
          </div>
          <div className="relative h-full hidden md:block">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />
            <img
              src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800"
              alt="NepGlass Premium Sunglasses"
              className="rounded-3xl shadow-2xl object-cover w-full aspect-[4/5]"
            />
          </div>
        </div>
      </section>

      {/* 2. Featured Products */}
      <section className="bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Trending Now</p>
              <h2 className="text-primary mt-0 mb-0">Featured Products</h2>
            </div>
            <Link href="/products" className="group flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors">
              View All Products <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Choose NepGlass */}
      <section className="bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-primary">Why NepGlass?</h2>
            <p className="text-gray-600">We combine quality craftsmanship with modern aesthetics, tailored for the unique needs of Nepal.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Sparkles className="w-8 h-8 text-secondary" />, title: 'Stylish & Versatile', desc: 'From timeless frames to fashion-forward sunglasses for every face.' },
              { icon: <Eye className="w-8 h-8 text-secondary" />, title: 'Vision First', desc: 'High-quality lenses with precision fitting and expert care.' },
              { icon: <MapPin className="w-8 h-8 text-secondary" />, title: 'Made for Nepal', desc: 'Designed to suit local preferences and everyday environmental needs.' },
              { icon: <Shield className="w-8 h-8 text-secondary" />, title: 'Personalized Service', desc: 'Expert guidance to help you choose what fits your lifestyle best.' },
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="mb-6 p-4 bg-secondary/10 rounded-full">{feature.icon}</div>
                <h4 className="text-lg font-bold text-primary mb-3">{feature.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Shop by Category */}
      <section className="bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-16 text-primary">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Sunglasses', img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=600', slug: 'sunglasses' },
              { title: 'Prescription Frames', img: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80&w=600', slug: 'frames' },
              { title: 'Premium Lenses', img: 'https://images.unsplash.com/photo-1589710304834-03e39c424467?auto=format&fit=crop&q=80&w=600', slug: 'lenses' },
            ].map((cat) => (
              <Link key={cat.slug} href={`/categories/${cat.slug}`} className="group relative overflow-hidden rounded-2xl h-[450px]">
                <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-10">
                  <h3 className="text-white mb-2">{cat.title}</h3>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Explore Collection <ChevronRight className="inline w-4 h-4" /></p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. About NepGlass (Brief) */}
      <section className="bg-white">
        <div className="container-custom grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
              alt="Craftsmanship"
              className="rounded-3xl shadow-xl"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Our Story</p>
            <h2 className="text-primary mt-0">Handcrafted for Your Eyes</h2>
            <p className="text-gray-600 mb-6">
              Based in Nepal, we see eyewear as more than just a visual aid — it’s a statement of style, comfort, and confidence. We specialize in premium lens solutions that elevate your look and protect your vision.
            </p>
            <p className="text-gray-600 mb-10">
              We combine quality craftsmanship with modern aesthetics, offering a curated selection of products suited for every face, lifestyle, and budget.
            </p>
            <Link href="/about">
              <Button variant="outline">Learn More Our Story</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="bg-primary text-white">
        <div className="container-custom">
          <h2 className="text-white text-center mb-16">See Through Our Customers' Eyes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-2xl border border-white/10 flex flex-col h-full">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className={`w-4 h-4 ${j < t.rating ? 'text-secondary fill-secondary' : 'text-gray-600'}`} />
                  ))}
                </div>
                <p className="text-gray-300 mb-8 flex-1 italic">"{t.text}"</p>
                <div>
                  <p className="font-bold text-white mb-1">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Blog Highlights (Simulated) */}
      <section className="bg-white">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-primary mt-0 mb-0">Vision Insights</h2>
            <Link href="/blog" className="text-primary font-bold hover:text-secondary flex items-center gap-2">
              View All Posts <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Choosing the Right Frames for Your Face Shape", date: "Jan 15, 2025", img: "https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&q=80&w=400" },
              { title: "The Importance of UV Protection in Nepal", date: "Jan 10, 2025", img: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&q=80&w=400" },
              { title: "Digital Strain: Why Blue-Cut Lenses Matter", date: "Jan 05, 2025", img: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80&w=400" },
            ].map((post, i) => (
              <Link key={i} href="/blog/sample-post" className="group">
                <div className="overflow-hidden rounded-2xl mb-6 aspect-video">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="text-xs text-gray-500 mb-2">{post.date}</p>
                <h4 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors leading-tight">{post.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="bg-gray-50">
        <div className="container-custom max-w-3xl">
          <h2 className="text-center mb-16 text-primary">Questions? We've Got Answers</h2>
          <div className="space-y-6">
            {homepageFaqs.map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-primary mb-3">{faq.q}</h4>
                <p className="text-sm text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/faqs" className="text-primary font-bold hover:underline">View All FAQs</Link>
          </div>
        </div>
      </section>

      {/* 9. Contact / Get in Touch */}
      <section className="bg-white">
        <div className="container-custom grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-primary mt-0 mb-6">Let's Connect</h2>
            <p className="text-gray-600 mb-10">Have questions about our products or need expert guidance on choosing your next pair? Our team is here to help.</p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-secondary">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-primary font-medium">hello@nepglass.com.np</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-secondary">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-primary font-medium">+977-1-4XXXXXX</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
             <Link href="/contact">
               <Button className="w-full" size="lg">Send us a Message</Button>
             </Link>
          </div>
        </div>
      </section>

      {/* 10. Newsletter Signup */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-transparent" />
        <div className="container-custom relative z-10 text-center max-w-2xl">
          <h2 className="text-white mt-0 mb-4">Stay in Style</h2>
          <p className="text-gray-300 mb-10">Get the latest style tips, vision care insights, and exclusive offers delivered to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-gray-500 outline-none focus:border-secondary transition-colors"
            />
            <Button variant="secondary" size="lg" className="rounded-full shrink-0">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
}
