'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Calendar, User } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Choosing the Right Frames for Your Face Shape",
    excerpt: "Find the perfect balance for your facial features with our expert guide to frame shapes.",
    date: "Jan 15, 2025",
    author: "Dr. Sharma",
    category: "Style Guide",
    slug: "choosing-right-frames",
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "The Importance of UV Protection in Nepal",
    excerpt: "Why high-altitude sun exposure requires better protection for your eyes.",
    date: "Jan 10, 2025",
    author: "NepGlass Team",
    category: "Eye Health",
    slug: "uv-protection-nepal",
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Digital Strain: Why Blue-Cut Lenses Matter",
    excerpt: "Protect your eyes from the harmful effects of prolonged screen time.",
    date: "Jan 05, 2025",
    author: "Optometrist R. KC",
    category: "Technology",
    slug: "blue-cut-lenses",
    image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Trends for 2025: What's Hot in Eyewear",
    excerpt: "Discover the latest styles making waves in the Nepali fashion scene.",
    date: "Dec 28, 2024",
    author: "Style Editor",
    category: "Trends",
    slug: "eyewear-trends-2025",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800"
  }
];

export default function BlogListingPage() {
  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-gray-50 pt-32 pb-20">
        <div className="container-custom">
          <h1 className="text-primary">Vision Insights</h1>
          <p className="text-xl text-gray-600 max-w-2xl mt-6">
            Expert advice on eye health, style tips, and the latest trends from the world of eyewear.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group flex flex-col">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-secondary mb-3">
                  <span>{post.category}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full" />
                  <span className="flex items-center gap-1 text-gray-400 font-normal normal-case">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 leading-tight group-hover:text-secondary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center font-bold text-primary group-hover:text-secondary transition-colors mt-auto">
                  Read Article <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
