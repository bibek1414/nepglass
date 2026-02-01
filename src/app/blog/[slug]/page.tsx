'use client';

import React, { use } from 'react';
import { posts } from '@/data/posts';
import Link from 'next/link';
import { ChevronLeft, Calendar, User, Tag, Share2 } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="container-custom py-40 text-center">
        <h1 className="text-primary">Article Not Found</h1>
        <Link href="/blog" className="text-secondary hover:underline mt-4 block">Return to Blog</Link>
      </div>
    );
  }

  return (
    <article className="pb-20">
      <header className="bg-gray-50 pt-32 pb-20">
        <div className="container-custom">
          <Link href="/blog" className="text-gray-500 text-sm flex items-center gap-2 mb-8 hover:text-primary transition-colors">
            <ChevronLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Tag className="w-4 h-4" /> {post.category}
              </span>
            </div>
            <h1 className="text-primary mt-0 mb-8 leading-tight">{post.title}</h1>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold">
                {post.author[0]}
              </div>
              <div>
                <p className="font-bold text-primary mb-0">{post.author}</p>
                <p className="text-xs text-gray-500">Eyewear Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="aspect-video rounded-3xl overflow-hidden mb-16 shadow-2xl">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>

            <div
              className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="rounded-full">
                  <Share2 className="w-4 h-4 mr-2" /> Share Article
                </Button>
              </div>
              <div className="flex gap-2">
                {['Eye Health', 'Nepal', 'Style'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-50 text-gray-500 text-xs rounded-full border border-gray-100">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Posts */}
      <section className="bg-gray-50 py-20 mt-20">
        <div className="container-custom">
          <h3 className="text-primary text-center mb-12">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.filter(p => p.slug !== slug).slice(0, 2).map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="bg-white p-6 rounded-2xl flex gap-6 hover:shadow-md transition-shadow group">
                <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2 line-clamp-2 group-hover:text-secondary transition-colors leading-tight">{p.title}</h4>
                  <p className="text-xs text-gray-500">{p.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
