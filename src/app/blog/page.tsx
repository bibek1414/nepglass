import React from 'react';
import Link from 'next/link';
import { posts } from '@/data/posts';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';

export default function BlogLandingPage() {
  return (
    <div className="pb-20">
      <section className="bg-gray-50 pt-32 pb-20">
        <div className="container-custom">
          <h1 className="text-primary">Vision Insights</h1>
          <p className="text-xl text-gray-600 max-w-2xl mt-6">
            Expert advice on eyewear style, eye health, and the latest trends handcrafted for Nepal.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post) => (
              <article key={post.slug} className="group flex flex-col h-full bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                <Link href={`/blog/${post.slug}`} className="block aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Tag className="w-3 h-3" /> {post.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors line-clamp-2 mt-0">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-8 line-clamp-3 text-sm">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-secondary/20 text-secondary rounded-full flex items-center justify-center">
                        <User className="w-3 h-3" />
                      </div>
                      <span className="text-xs font-medium text-gray-700">{post.author}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="text-secondary font-bold text-sm flex items-center gap-1 hover:underline">
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
