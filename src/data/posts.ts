export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  category: string;
  author: string;
}

export const posts: BlogPost[] = [
  {
    slug: 'choosing-the-right-frames',
    title: 'Choosing the Right Frames for Your Face Shape',
    excerpt: 'Find the perfect match for your facial features with our comprehensive guide to frame styles.',
    content: `
      <p>Choosing the right eyewear is about more than just vision—it's about finding a style that complements your natural features. Whether you have a round, square, oval, or heart-shaped face, there's a perfect frame waiting for you at NepGlass.</p>

      <h3>Round Faces</h3>
      <p>For round faces, the goal is to add contrast. Angular, square, or rectangular frames can help define your features and provide a sharper look.</p>

      <h3>Square Faces</h3>
      <p>If you have a strong jawline and broad forehead, round or oval frames can help soften your angles and bring balance to your face.</p>

      <h3>Oval Faces</h3>
      <p>Considered the most versatile shape, oval faces can pull off almost any style. Bold, oversized frames or classic aviators look particularly striking.</p>

      <h3>Heart-Shaped Faces</h3>
      <p>Frames that are wider at the top than the bottom, like cat-eye styles or clubmasters, work beautifully for heart-shaped faces.</p>
    `,
    date: 'Jan 15, 2025',
    image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&q=80&w=800',
    category: 'Style Guide',
    author: 'NepGlass Expert'
  },
  {
    slug: 'uv-protection-importance',
    title: 'The Importance of UV Protection in Nepal',
    excerpt: 'Living at higher altitudes in Nepal increases UV exposure. Learn how to protect your eyes effectively.',
    content: `
      <p>Nepal's beautiful geography often means we are living and traveling at higher altitudes, where the atmosphere is thinner and UV radiation is stronger. Protecting your eyes from these harmful rays is essential for long-term vision health.</p>

      <h3>Why UV Protection Matters</h3>
      <p>Long-term exposure to UV radiation can lead to various eye conditions, including cataracts and macular degeneration. At NepGlass, all our sunglasses provide 100% UV400 protection.</p>

      <h3>Polarized vs. Non-Polarized</h3>
      <p>While both can provide UV protection, polarized lenses go a step further by reducing glare from reflective surfaces like water or snow—perfect for our trekking enthusiasts!</p>
    `,
    date: 'Jan 10, 2025',
    image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&q=80&w=800',
    category: 'Eye Health',
    author: 'Dr. Vision'
  },
  {
    slug: 'digital-strain-blue-cut',
    title: 'Digital Strain: Why Blue-Cut Lenses Matter',
    excerpt: 'Spending hours in front of screens? Discover how blue-light filtering can reduce eye fatigue.',
    content: `
      <p>In today's digital age, we spend more time than ever looking at screens. This prolonged exposure to blue light can lead to digital eye strain, headaches, and disrupted sleep patterns.</p>

      <h3>What are Blue-Cut Lenses?</h3>
      <p>Blue-cut lenses feature a special coating that reflects harmful blue light emitted from digital devices. They help maintain high contrast while reducing the "flicker" that causes eye fatigue.</p>

      <h3>Benefits for Students and Professionals</h3>
      <p>Whether you're studying for exams or working long hours at the office, blue-cut lenses can help you stay focused and comfortable throughout the day.</p>
    `,
    date: 'Jan 05, 2025',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80&w=800',
    category: 'Technology',
    author: 'Tech Specialist'
  }
];
