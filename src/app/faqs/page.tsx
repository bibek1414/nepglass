import React from 'react';

const faqs = [
  {
    q: 'How long does delivery take?',
    a: 'Inside Kathmandu valley, we deliver within 24-48 hours. Outside valley, it typically takes 3-5 business days.'
  },
  {
    q: 'Can I get prescription lenses with any frame?',
    a: 'Yes, most of our frames are prescription-ready. You can upload your prescription during checkout or visit one of our stores for a professional fitting.'
  },
  {
    q: 'Do you offer a warranty on frames?',
    a: 'We offer a 6-month warranty on manufacturing defects for all our frames.'
  },
  {
    q: 'What is your return policy?',
    a: 'We have a 7-day hassle-free return policy for unused products in their original packaging. Note: Custom-made prescription lenses are non-returnable.'
  },
  {
    q: 'How do I know my frame size?',
    a: 'You can check the measurements (e.g., 52-18-140) printed on the inside of your current glasses or use our virtual try-on tool (coming soon!).'
  }
];

export default function FAQPage() {
  return (
    <div className="pb-20">
      <section className="bg-gray-50 pt-32 pb-20">
        <div className="container-custom">
          <h1 className="text-primary">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-2xl mt-6">
            Find answers to common questions about our products, shipping, and services.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom max-w-3xl">
          <div className="space-y-12">
            {faqs.map((faq, i) => (
              <div key={i} className="group">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-start gap-4">
                  <span className="text-secondary">Q.</span>
                  {faq.q}
                </h3>
                <div className="flex gap-4 pl-10 border-l-2 border-gray-100 group-hover:border-secondary transition-colors">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
