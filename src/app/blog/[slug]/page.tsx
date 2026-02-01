'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  // Simulate fetching post data based on slug
  const { slug } = use(params);

  // Mock data - normally would fetch from API/CMS
  const post = {
    title: "Choosing the Right Frames for Your Face Shape",
    date: "Jan 15, 2025",
    author: "Dr. Sharma",
    category: "Style Guide",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&q=80&w=1200",
    content: (
      <>
        <p className="lead text-xl text-gray-600 mb-8 font-serif">
          Not all glasses are created equal, and neither are faces. Finding the perfect pair is about balancing your features and highlighting your best angles. Here is our comprehensive guide to finding your perfect match using the science of face shapes.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-12 mb-6">Determining Your Face Shape</h2>
        <p className="mb-6">
          Before you start shopping, pull your hair back and look in the mirror. Trace the outline of your face on the mirror with lipstick or a dry-erase marker (or just visualize it). What shape do you see?
        </p>

        <h3 className="text-xl font-bold text-primary mt-8 mb-4">1. Round Face</h3>
        <p className="mb-6">
          <strong>Features:</strong> Full cheeks, rounded chin, equal width and length.<br />
          <strong>Best Frames:</strong> Angular, geometric frames like rectangular or square shapes add definition and structure. Avoid round frames which can exaggerate roundness.
        </p>

        <h3 className="text-xl font-bold text-primary mt-8 mb-4">2. Square Face</h3>
        <p className="mb-6">
          <strong>Features:</strong> Strong jawline, broad forehead, equal width and length.<br />
          <strong>Best Frames:</strong> Round, oval, or cat-eye frames soften strong angles. Thinner frames generally work better than heavy, blocky ones.
        </p>

        <h3 className="text-xl font-bold text-primary mt-8 mb-4">3. Oval Face</h3>
        <p className="mb-6">
          <strong>Features:</strong> Balanced proportions, slightly high cheekbones, chin narrower than forehead.<br />
          <strong>Best Frames:</strong> Lucky you! Almost any shape works. Experiment with bold shapes, aviators, or oversized frames. Just ensure the frame is as wide as the widest part of your face.
        </p>

        <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-secondary my-10">
          <p className="italic text-gray-700 font-medium">
            "The most important rule? Confidence. If you love how you look in a pair of glasses, that's the right pair for you."
          </p>
        </div>

        <h2 className="text-2xl font-bold text-primary mt-12 mb-6">The NepGlass Fit</h2>
        <p className="mb-6">
          At NepGlass, we understand that Nepali face shapes can vary. Our "Made for Nepal" collection features specifically designed nose pads and frame widths to ensuring a comfortable fit that doesn't slide down or pinch.
        </p>

        <p>
          Visit one of our stores in Kathmandu for a personalized fitting session with our style experts.
        </p>
      </>
    )
  };

  return (
    <div className="pb-20">
      <div className="bg-primary/5 pb-20 pt-32">
        <div className="container-custom">
          <Link href="/blog" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
          </Link>
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center items-center gap-4 text-sm font-bold uppercase tracking-wider text-secondary mb-6">
              <span>{post.category}</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span className="text-gray-500 font-medium normal-case flex items-center gap-2"><Clock className="w-4 h-4" /> {post.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary font-bold mb-8 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" /> {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> {post.date}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom -mt-12">
        <div className="max-w-4xl mx-auto">
          <img
            src={post.image}
            alt={post.title}
            className="w-full aspect-video object-cover rounded-3xl shadow-2xl mb-16"
          />

          <div className="grid md:grid-cols-[1fr_250px] gap-12">
            <article className="prose prose-lg prose-headings:text-primary prose-a:text-secondary max-w-none text-gray-600">
              {post.content}
            </article>

            <aside className="space-y-12">
              <div>
                <h4 className="font-bold text-primary mb-4 uppercase text-xs tracking-widest">Share this article</h4>
                <div className="flex gap-4">
                  <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-colors">
                    <Facebook className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-colors">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="bg-primary text-white p-8 rounded-2xl text-center">
                <h4 className="text-xl font-bold mb-4">Find Your Look</h4>
                <p className="text-gray-300 text-sm mb-6">Browse our latest collection tailored for style and comfort.</p>
                <Link href="/products">
                  <Button variant="secondary" className="w-full">Shop Now</Button>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
