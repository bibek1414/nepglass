import Link from "next/link"
import { ChevronRight } from "lucide-react"
export default function ShopByCategory() {
    return (
        <section className="bg-gray-50 py-24">
            <div className="container-custom">
                <h2 className="text-center mb-16 text-primary">Shop by Category</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: 'Sunglasses', img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=600', slug: 'sunglasses' },
                        { title: 'Prescription Frames', img: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80&w=600', slug: 'frames' },
                        { title: 'Premium Lenses', img: 'https://images.pexels.com/photos/27543858/pexels-photo-27543858.jpeg', slug: 'lenses' },
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
    )
}